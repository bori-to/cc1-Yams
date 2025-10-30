import { describe, it, expect } from "vitest";
import { scoreRoll, calcScore } from "./yams.js";

describe("Score du YAMS", () => {

    it("Brelan = 28 si 3 dés sont identiques", () => {
        expect(scoreRoll([4, 4, 4, 1, 2])).toBe(28);
        expect(scoreRoll([1, 5, 2, 5, 5])).toBe(28);
    });

    it("Carré = 35 si 4 dés sont identiques", () => {
        expect(scoreRoll([2, 2, 2, 2, 5])).toBe(35);
        expect(scoreRoll([5, 5, 5, 5, 2])).toBe(35);
    });

    it("Full = 30 si 3 dés sont identiques et 2 autres aussi", () => {
        expect(scoreRoll([3, 3, 3, 5, 5])).toBe(30);
        expect(scoreRoll([2, 2, 2, 5, 5])).toBe(30);
    });

    it("Grande suite = 40 si les 5 dés sont consécutifs", () => {
        expect(scoreRoll([1, 2, 3, 4, 5])).toBe(40);
        expect(scoreRoll([2, 3, 4, 5, 6])).toBe(40);
    });

    it("YAMS = 50 si les 5 dés sont identiques", () => {
        expect(scoreRoll([6, 6, 6, 6, 6])).toBe(50);
    });    

    it("Chance = somme des 5 dés", () => {
        expect(scoreRoll([1, 2, 3, 4, 6])).toBe(16);
    });

    it("Ne détecte pas de full si 4 dés identiques", () => {
        expect(scoreRoll([3, 3, 3, 3, 5])).toBe(35);
    });

    it("Ne détecte pas de brelan avec seulement une paire", () => {
        expect(scoreRoll([2, 2, 5, 6, 1])).toBe(16);
    });

    it("prend bien la meilleure figure", () => {
        expect(scoreRoll([5, 5, 5, 5, 5])).toBe(50);
        expect(scoreRoll([2, 2, 2, 2, 2])).toBe(50);
        expect(scoreRoll([4, 4, 4, 4, 1])).toBe(35);
        expect(scoreRoll([6, 6, 6, 2, 2])).toBe(30);
    });
});

describe("Somme des lancers", () => {
  it("Total sur plusieurs lancers", () => {
    const lancers = [
      [6, 6, 6, 6, 6],
      [3, 3, 3, 5, 5],
      [2, 2, 2, 2, 5],
      [1, 2, 3, 4, 5],
      [4, 4, 4, 1, 2],
      [1, 2, 3, 4, 6],
    ];
    expect(calcScore(lancers)).toBe(199);
  });

  it("0 si aucun lancer", () => {
    expect(calcScore([])).toBe(0);
  });

  it("Un lancer", () => {
    expect(calcScore([[2, 2, 2, 2, 2]])).toBe(50);
  });

  it("additionne correctement", () => {
    const lancers = [
      [5, 5, 5, 1, 2],
      [2, 3, 4, 5, 6],
      [1, 1, 2, 3, 6],
    ];
    expect(calcScore(lancers)).toBe(28 + 40 + 13);
  });

  it("Meilleure figure pour chaque lancer", () => {
    const lancers = [
      [4, 4, 4, 4, 4],
      [3, 3, 3, 3, 1],
    ];
    expect(calcScore(lancers)).toBe(50 + 35);
  });
});