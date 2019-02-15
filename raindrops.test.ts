import RainDrops from "./raindrops"

describe('Raindrops', () => {
    it('should say "1" if we give it a 1', () => {
        const target = new RainDrops()
        expect(target.rain(1)).toBe("1")
    })
})