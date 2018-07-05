import Food from './Food';
export function testFunction(food:Food): void { 
    console.log("I like " + food.name + ' with ' + food.calories);
}

export function testGeneric<T>(param: T) : T[] {
    const arrayOfT: T[] = [];
    arrayOfT.push(param);
    return arrayOfT;
}