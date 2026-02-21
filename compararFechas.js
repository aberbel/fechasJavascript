function normalizeDate(input) {
	if (input === "") {
		return null;
	}

	if (input instanceof Date && !Number.isNaN(input.getTime())) {
		return input;
	}

	return null;
}

// Las fechas son dates o cadenas vacias. Cualquier otra cosa se considera inválida y devuelve 0 días de diferencia.
export function diferenciaEnDias(fecha1, fecha2) {
	let dateA = normalizeDate(fecha1);
	let dateB = normalizeDate(fecha2);

	if (!dateA || !dateB) {
		return 0;
	}

	if (dateA.getTime() > dateB.getTime()) {
		const temp = dateA;
		dateA = dateB;
		dateB = temp;
	}

	const utcA = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
	const utcB = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
	const msPerDay = 24 * 60 * 60 * 1000;

	return Math.floor((utcB - utcA) / msPerDay);
}
