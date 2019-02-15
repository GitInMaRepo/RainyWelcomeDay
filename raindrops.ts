class RainDrops {
    rain(input: number): string {
        if (input === 3) {
            return "Pling"
        }
        if (input === 5) {
            return "Plang"
        }
        if (input === 7) {
            return "Plong"
        }
        return input.toString()
    }
}

export default RainDrops