import { testGeneric } from './testModule';

test('should ', () => {
    const numberArray : number[] = testGeneric<number>(12);
    expect(numberArray).toEqual([12]);
    const stringArray : string[] = testGeneric<string>('rofl');
    expect(stringArray).toEqual(['rofl']);
})
