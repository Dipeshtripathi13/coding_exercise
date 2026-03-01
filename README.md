# Robotic Arm Sorter Implementation

```typescript
/**
 * Dispatches packages to the correct stack based on physical criteria.
 * @param width - Width in cm
 * @param height - Height in cm
 * @param length - Length in cm
 * @param mass - Mass in kg
 * @returns The name of the stack: STANDARD, SPECIAL, or REJECTED
 */
function sort(width: number, height: number, length: number, mass: number): string {
    const volume = width * height * length;
    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) {
        return "REJECTED";
    }

    if (isBulky || isHeavy) {
        return "SPECIAL";
    }

    return "STANDARD";
}

// Quick test logs
console.log(sort(100, 100, 100, 10)); // STANDARD
console.log(sort(200, 50, 50, 10));   // SPECIAL (Bulky)
console.log(sort(10, 10, 10, 25));     // SPECIAL (Heavy)
console.log(sort(200, 200, 200, 30)); // REJECTED (Both)
