var solution = require('./')

describe('Tests the change maker', function() {
    it('should return the correct amount of coins for 51 cents as input', function() {
        const givenInput = 51
        
        const expectedOutput = {
            '1': 1,
            '5': 0,
            '10': 0,
            '25': 2,
        }
        
        expect(solution(givenInput)).toEqual(expectedOutput)
    })

    it('should return the correct amount of coins for 42 cents as input', function() {
        const givenInput = 42
        
        const expectedOutput = {
            '1': 2,
            '5': 1,
            '10': 1,
            '25': 1,
        }
        
        expect(solution(givenInput)).toEqual(expectedOutput)
    })

    it('should accept a new set of coins', function() {
        const givenAmount = 82
        const country = 'AU'

        const expectedOutput = {
            '20': 4,
            '10': 0,
            '5': 0,
        }

        expect(solution(givenAmount, country)).toEqual(expectedOutput)
    })

    it('remainder', function() {})

    it('should throw an exception when passed a country code that we haven\'t defined in the coins', function() {
        const givenInput = 91
        const country = 'NZ'

        expect(() => solution(givenInput, country)).toThrow(`Missing coin definition for "${country}"`)
    })
})