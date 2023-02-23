export const getValueInRange = (value, min = 0, max = 6) => {
    if(value > max) return max
    if(value < min) return min
    return value
}