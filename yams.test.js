import { describe, it, expect } from "vitest";
import { scoreRoll } from "./yams.js";

describe("Score du YAMS", () => {

    it("Brelan = 28 si 3 dés sont identiques", () => {
        expect(scoreRoll([4, 4, 4, 1, 2])).toBe(28);
    });

    it("Carré = 35 si 4 dés sont identiques", () => {
        expect(scoreRoll([2, 2, 2, 2, 5])).toBe(35);
    });

    it("Full = 30 si 3 dés sont identiques et 2 autres aussi", () => {
        expect(scoreRoll([3, 3, 3, 5, 5])).toBe(30);
    });

    it("YAMS = 50 si les 5 dés sont identiques", () => {
        expect(scoreRoll([6, 6, 6, 6, 6])).toBe(50);
    });    

    it("0 sinon", () => {
        expect(scoreRoll([1, 2, 3, 4, 5])).toBe(0);
    });
});