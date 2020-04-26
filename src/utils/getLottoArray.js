import getRandomIntInclusive from './getRandomIntInclusive'

const getLottoArray = (size, min, max) => {
    // create an array and fill with numbers from min to max
    const arr = new Array(max - min + 1).fill(min).map((curr, i) => curr + i)
    // const arr = Array.from({ length: max - min + 1 }, (_, i) => min + i)

    for (let i = 0; i < size; i++) {
        // random index
        const r = getRandomIntInclusive(i, arr.length - 1)
        // swap values
        const buffer = arr[i]
        arr[i] = arr[r]
        arr[r] = buffer
    }

    return arr.slice(0, size)
}

export default getLottoArray
