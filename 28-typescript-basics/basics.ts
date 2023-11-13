// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// Primitives
let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Swim", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Types inference

let course = "react";
// course = 123; ERROR

// Union types
let courseTwo: string | number = "react";
courseTwo = 123;

// Function & types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
