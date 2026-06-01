import { sumDice, rollDice } from "./dice.ts";
import { Knobelscheit } from "./knobelscheit.ts";

let gameIsRunning = true;
const knobelscheit = new Knobelscheit;
console.log("hello, welcome to the game Knobelscheit");

while (gameIsRunning) {
    prompt("please roll the dice by pressing enter");
    console.log("rolling dice")
    const dice1 = rollDice();
    const dice2 = rollDice();
    console.log("Dice 1: " + dice1);
    console.log("Dice 2: " + dice2);
    console.log("currently flipped: " + knobelscheit.flipped.size)
    let numberString = prompt("enter the numbers you wish to flip (1-9), seperated by commas")
    const stringArray: string[] | undefined = numberString?.split(",");
    if (stringArray === undefined) {
        console.log("Error, please enter the numbers you want to flip comma seperated.")
    } else {
        const numberArray: number[] = stringArray.map((i) => (Number(i)));
        knobelscheit.flip(numberArray, (dice1 + dice2));
    }
}
