import { describe, it, expect } from "vitest";
import { diferenciaEnDias } from "./compararFechas.js";

describe("diferenciaEnDias", () => {
	it("returns 0 when either date is blank", () => {
		expect(diferenciaEnDias("", new Date(2026, 1, 21))).toBe(0);
		expect(diferenciaEnDias(new Date(2026, 1, 21), "")).toBe(0);
	});

	it("swaps dates when the first is greater", () => {
		expect(diferenciaEnDias(new Date(2026, 1, 21), new Date(2026, 1, 20))).toBe(1);
	});

	it("returns day difference for valid inputs", () => {
		expect(diferenciaEnDias(new Date(2026, 1, 21), new Date(2026, 1, 25))).toBe(4);
	});
});
