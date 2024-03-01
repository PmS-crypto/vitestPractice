import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, factorial } from "../intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })


    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    })


    it('should return the first argument if both are equal', () => {
        expect(max(1, 1)).toBe(1);
    })
})

describe('fizzbuzz', () => {
    it('should return FizzBuzz if divisible by both 3 and 5', () => {
        expect(fizzBuzz(30)).toBe("FizzBuzz");
    })


    it('should return Fizz if divisible by 3', () => {
        expect(fizzBuzz(18)).toBe("Fizz");
    })


    it('should return Buzz if divisible by 5', () => {
        expect(fizzBuzz(20)).toBe("Buzz");
    })

    it('should return number as string if divisible by neither 3 nor 5', () => { 
        expect(fizzBuzz(11)).toBe("11");
    })
})

describe('factorial', () => {
    it('should return 1 if number is 0', () => { 
        expect(factorial(0)).toBe(1);
    })
    it('should return 1 if number is 1', () => { 
        expect(factorial(1)).toBe(1);
    })
    it('should return 2 if number is 2', () => { 
        expect(factorial(2)).toBe(2);
    })
    it('should return 4  if the number is 4', () => {
        expect(factorial(4)).toBe(24);
    })
})