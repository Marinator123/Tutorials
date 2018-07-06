import { testFunction, testGeneric } from './testModule';
import Burger from './Food';
import Menu, { Taste } from './Menu';

const burger: Burger = {name: 'hamburger', calories: 200, getName() : string {return 'bla'} };
const vegiBurger: Burger = new Burger('vegi', 150);

const myArr: string[] = ['lol','test'];

console.log(burger.getName());
console.log(vegiBurger.getName());

const sundayMenu = new Menu([undefined, 'horsecock'], 2, Taste.Bad);
const enumArray : Taste[] = [Taste.Bad, Taste.Good, Taste.Middle];
/** sundayMenu.list();

console.log(testGeneric<number>(12));
console.log(testGeneric("hallo")); */