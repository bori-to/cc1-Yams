export function scoreRoll(roll) {
    const counts = {};
    for (const v of roll) counts[v] = (counts[v] || 0) + 1;

    const values = Object.values(counts);

    const sorted = [...new Set(roll)].sort((a, b) => a - b);
    const suite1 = [1, 2, 3, 4, 5];
    const suite2 = [2, 3, 4, 5, 6];

    const isGrandeSuite = sorted.length === 5 && (JSON.stringify(sorted) === JSON.stringify(suite1) || JSON.stringify(sorted) === JSON.stringify(suite2));

    if (values.includes(5)) return 50; // YAMS
    if (values.includes(4)) return 35; // Carré
    if (values.includes(3) && values.includes(2)) return 30; // Full
    if (isGrandeSuite) return 40; // Grande suite
    if (values.includes(3)) return 28; // Brelan

    return 0;
}
