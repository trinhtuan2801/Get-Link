let input = [2, 3, -2, -2, 5]
function adjacentElementsProduct(inputArray)
{
    if (inputArray.length == 1) return inputArray[0]
    if (inputArray.length == 0) return null
    let best = -Infinity
    for (let i = 0; i < inputArray.length-1; i++)
    {
        best = Math.max(best, inputArray[i]*inputArray[i+1])
    }
    return best
}

console.log(adjacentElementsProduct(input))

input = [60, 40, 55, 75, 64]
function alternatingSums(a)
{
    let evensum = 0
    let sum = 0
    for (let i = 0; i < a.length; i++)
    {
        sum += a[i]
        if (i % 2 == 1) evensum += a[i]
    }
    return [sum - evensum, evensum]
}

console.log(...alternatingSums(input))

