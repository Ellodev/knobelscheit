import { sumDice, rollDice } from "./dice.ts";
import { Knobelscheit } from "./knobelscheit.ts";

let gameIsRunning = true;
console.log("hello, welcome to the game Knobelscheit");

while (gameIsRunning)
prompt("please roll the dice by pressing enter");
console.log("rolling dice")
const dice1 = rollDice();
const dice2 = rollDice();
console.log("Dice 1: " + dice1);
console.log("Dice 2: " + dice2);
let numberString = prompt("enter the numbers you wish to flip (1-9), seperated by commas")
const numberArray: number[] = Number(numberString?.split(","));