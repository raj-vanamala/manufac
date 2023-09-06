// Function to calculate the mean (average) of an array of numbers
export function calculateMean(numbers) {

    if (numbers.length === 0) {
        return 0; // Handle the case of an empty array
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return (sum / numbers.length).toFixed(3);
}

// Function to calculate the median of an array of numbers
export function calculateMedian(numbers) {
    if (numbers.length === 0) {
        return 0; // Handle the case of an empty array
    }

    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
        // If the array has an even number of elements, take the average of the two middle values
        const middleValue1 = sortedNumbers[middleIndex - 1];
        const middleValue2 = sortedNumbers[middleIndex];
        return (middleValue1 + middleValue2) / 2;
    } else {
        // If the array has an odd number of elements, return the middle value
        return sortedNumbers[middleIndex];
    }
}

// Function to calculate the mode (most frequent value) of an array of numbers
export function calculateMode(numbers) {
    if (numbers.length === 0) {
        return []; // Handle the case of an empty array
    }

    const numCounts = {};
    numbers.forEach(num => {
        numCounts[num] = (numCounts[num] || 0) + 1;
    });

    let mode = [];
    let maxCount = 0;
    
    for (const num in numCounts) {
        if (numCounts[num] > maxCount) {
            mode = [parseInt(num)];
            maxCount = numCounts[num];
        } else if (numCounts[num] === maxCount && parseInt(num) !== mode[mode.length-1]) {
            mode.push(parseInt(num));
        }
    }

    return mode;
}
