function rellenar(value) {
	return String(value).padStart(2, "0");
}

// La fecha es date o cadena vacia. Cualquier otra cosa se considera inválida y devuelve "".
// si el formato no es válido, devuelve "".
// se devuelve la fecha formateada según el formato especificado, reemplazando yyyy, mm y dd por los valores correspondientes.
export function formatearFecha(fecha, formato) {
	if (!(fecha instanceof Date) || Number.isNaN(fecha.getTime())) {
		return "";
	}

	if (typeof formato !== "string" || !formato) {
		return "";
	}

	const tokens = {
		yyyy: String(fecha.getFullYear()),
		mm: rellenar(fecha.getMonth() + 1),
		dd: rellenar(fecha.getDate())
	};

	return formato.replace(/yyyy|mm|dd/g, function (match) {
		return tokens[match];
	});
}
