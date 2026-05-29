import { assertEquals } from "@std/assert";
import {  } from "./dice.ts";

Deno.test("3 + 5 = 8", function sumDice() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = sumDice(a, b);

  // Assert
  assertEquals(actual, a + b);
});

Deno.test("Value of dice is between 1 - 6", function rollDiceRange() {
  // Arrange, Act
  const actual = rollDice();

  // Assert
  assertEquals(actual >= 1 && actual <= 6, true);
});
