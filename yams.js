export function scoreRoll(roll) {
    const counts = {};
    for (const v of roll) counts[v] = (counts[v] || 0) + 1;

    const values = Object.values(counts);

    if (values.includes(3) && values.includes(2)) return 30; // Full
    if (values.includes(3)) return 28; // Brelan
    if (values.includes(4)) return 35; // Carré
    if (values.includes(5)) return 50; // YAMS

    return 0;
}
