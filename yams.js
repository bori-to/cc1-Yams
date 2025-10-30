export function scoreRoll(roll) {
    const allEqual = roll.every(v => v === roll[0]);
    if(allEqual) {
        return 50;
    }
    return 0;
}