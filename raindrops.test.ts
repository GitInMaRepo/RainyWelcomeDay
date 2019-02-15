import RainDrops from "./raindrops"

describe('Raindrops', () => {

    let target: RainDrops

    beforeEach(() => {
        target = new RainDrops()
    })

    it('should show "1" if we give it a 1', () => {
        expect(target.rain(1)).toBe("1")
    })

    it('should show "2" if we give it a 2', () => {
        expect(target.rain(2)).toBe("2")
    })

    it('should show "Pling" if we give it a 3', () => {
        expect(target.rain(3)).toBe("Pling")
    })

    it('should show "Plang" if we give it a 5', () => {
        expect(target.rain(5)).toBe("Plang")
    })

    it('should show "Plong" if we give it a 7', () => {
        expect(target.rain(7)).toBe("Plong")
    })

    it('should show "Pling" if we give it a 6', () => {
        expect(target.rain(6)).toBe("Pling")
    })

    it('should show "Pling" if we give it a 10', () => {
        expect(target.rain(10)).toBe("Plang")
    })

    it('should show "Plong" if we give it a 14', () => {
        expect(target.rain(14)).toBe("Plong")
    })

    it('should show "PlingPlang" if we give it a 15', () => {
        expect(target.rain(15)).toBe("PlingPlang")
    })

    it('should show "PlangPlong" if we give it a 35', () => {
        expect(target.rain(35)).toBe("PlangPlong")
    })

    it('should show "PlingPlangPlong" if we give it a 105', () => {
        expect(target.rain(105)).toBe("PlingPlangPlong")
    })
})