import { describe, it, expect } from "vitest";
import { parseDateFromString } from "./javascript.js";

describe("parseDateFromString", () => {
	it("returns a Date for yyyy-mm-dd", () => {
		const result = parseDateFromString("2026-02-21");
		expect(result instanceof Date).toBe(true);
		expect(result.getFullYear()).toBe(2026);
		expect(result.getMonth()).toBe(1);
		expect(result.getDate()).toBe(21);
	});

	it("returns a Date for dd/mm/yyyy", () => {
		const result = parseDateFromString("21/02/2026");
		expect(result instanceof Date).toBe(true);
		expect(result.getFullYear()).toBe(2026);
		expect(result.getMonth()).toBe(1);
		expect(result.getDate()).toBe(21);
	});

	it("returns a Date for yyyy/mm/dd", () => {
		const result = parseDateFromString("2026/02/21");
		expect(result instanceof Date).toBe(true);
		expect(result.getFullYear()).toBe(2026);
		expect(result.getMonth()).toBe(1);
		expect(result.getDate()).toBe(21);
	});

	it("returns a Date for dd-mm-yyyy", () => {
		const result = parseDateFromString("21-02-2026");
		expect(result instanceof Date).toBe(true);
		expect(result.getFullYear()).toBe(2026);
		expect(result.getMonth()).toBe(1);
		expect(result.getDate()).toBe(21);
	});

	it("returns empty string for 01-01-0001", () => {
		expect(parseDateFromString("01-01-0001")).toBe("");
		expect(parseDateFromString("01/01/0001")).toBe("");
		expect(parseDateFromString("0001-01-01")).toBe("");

	});

	it("returns empty string for invalid dates", () => {
		expect(parseDateFromString("31/02/2026")).toBe("");
		expect(parseDateFromString("2026-13-01")).toBe("");
	});

	it("returns empty string for non-string input", () => {
		expect(parseDateFromString(123)).toBe("");
	});

	it("returns empty string for blank input", () => {
		expect(parseDateFromString("   ")).toBe("");
	});
});
