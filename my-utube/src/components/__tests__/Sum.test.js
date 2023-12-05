import { Sum } from "../Sum";

test("Sum shouild calculated", () => {
    const result = Sum(3,4);
    expect(result).toBe(7);
});