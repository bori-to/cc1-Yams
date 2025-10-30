export function scoreRoll(roll) {
    const counts = {};
    for (const v of roll) counts[v] = (counts[v] || 0) + 1;

    if (Object.values(counts).includes(5)) return 50; // YAMS
    if (Object.values(counts).includes(4)) return 35; // Carré

    return 0;
}