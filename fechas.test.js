import { describe, it, expect } from "vitest";
import { formatearFecha } from "./fechas.js";

describe("formatearFecha", () => {
	it("formats a date with dd/mm/yyyy", () => {
		const date = new Date(2026, 1, 21);
		expect(formatearFecha(date, "dd/mm/yyyy")).toBe("21/02/2026");
	});

	it("formats a date with yyyy-mm-dd", () => {
		const date = new Date(2026, 1, 21);
		expect(formatearFecha(date, "yyyy-mm-dd")).toBe("2026-02-21");
	});

	it("formats a date with yyyy-mm-dd (American)", () => {
		const date = new Date(2026, 1, 21);
		expect(formatearFecha(date, "yyyy-mm-dd")).toBe("2026-02-21");
	});

	it("formats a date with dd-mm-yyyy (Spanish)", () => {
		const date = new Date(2026, 1, 21);
		expect(formatearFecha(date, "dd-mm-yyyy")).toBe("21-02-2026");
	});

	it("returns empty string for invalid date", () => {
		expect(formatearFecha(new Date("invalid"), "dd/mm/yyyy")).toBe("");
	});

	it("returns empty string for invalid format", () => {
		const date = new Date(2026, 1, 21);
		expect(formatearFecha(date, "")).toBe("");
		expect(formatearFecha(date, 123)).toBe("");
	});
});
