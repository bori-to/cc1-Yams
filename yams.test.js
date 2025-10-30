import { describe, it, expect } from "vitest";
import { scoreRoll } from "./yams.js";

describe("Score de base", () => {
    it("50 si les 5 dés sont identiques", () => {
        expect(scoreRoll([6, 6, 6, 6, 6])).toBe(50);
    });

    it("0 sinon", () => {
        expect(scoreRoll([1, 2, 3, 4, 5])).toBe(0);
    });
});
