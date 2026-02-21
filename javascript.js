export function parseDateFromString(input) {
	if (typeof input !== "string") {
		return "";
	}

	const trimmed = input.trim();
	if (!trimmed) {
		return "";
	}

	// Sentinel date: 01-01-0001 in any supported format.
	if (/^0?1[\/-]0?1[\/-]0001$/.test(trimmed) || /^0001[\/-]0?1[\/-]0?1$/.test(trimmed)) {
		return "";
	}

	// Try native parsing first for ISO-like strings.
	const nativeDate = new Date(trimmed);
	if (!Number.isNaN(nativeDate.getTime())) {
		return nativeDate;
	}

	// Supported: dd/mm/yyyy, dd-mm-yyyy, yyyy/mm/dd, yyyy-mm-dd
	const match = trimmed.match(/^([0-9]{1,4})[\/-]([0-9]{1,2})[\/-]([0-9]{1,4})$/);
	if (!match) {
		return "";
	}

	const part1 = Number(match[1]);
	const part2 = Number(match[2]);
	const part3 = Number(match[3]);

	let year;
	let month;
	let day;

	if (match[1].length === 4) {
		// yyyy/mm/dd
		year = part1;
		month = part2;
		day = part3;
	} else if (match[3].length === 4) {
		// dd/mm/yyyy
		year = part3;
		month = part2;
		day = part1;
	} else {
		return "";
	}

	if (year === 1 && month === 1 && day === 1) {
		return "";
	}

	if (month < 1 || month > 12 || day < 1 || day > 31) {
		return ""
	}

	const result = new Date(year, month - 1, day);
	if (
		result.getFullYear() !== year ||
		result.getMonth() !== month - 1 ||
		result.getDate() !== day
	) {
		return "";
	}

	return result;
}

// Example:
// console.log(parseDateFromString("21/02/2026"));
