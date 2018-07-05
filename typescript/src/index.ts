import { testFunction, testGeneric } from './testModule'
import Food from './Food';
import Menu from './Menu';

const burger: Food = {name: 'hamburger', calories: 200};
const myArr: string[] = ['lol','test'];

testFunction(burger);

const sundayMenu = new Menu([undefined, 'horsecock'], 2);
sundayMenu.list();

console.log(testGeneric<number>(12));
console.log(testGeneric("hallo"));