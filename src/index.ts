// Following --> https://www.youtube.com/watch?v=BCg4U1FzODs
// TS Docs   --> https://www.typescriptlang.org/docs/
//
//  Requirements:
//      -Requires Global Install of TS
//      -To run with TS compiler use `tsc index.ts` instead of `node index.ts`, this will
//       compile your TS file and create an index.js version with whatever ES version is
//       set up in the compiler.
//
//  Notes:
//      -IF you run `tsc --watch index.ts` it will check for errors on every saved change
//       and give you input on the terminal
//      -Running `tsc --init` in your Root Folder will create a tsconfig,json which carries
//       the configuration for your TS project.
//
//  Examples:
//
let id = 5;
//  -TS infers the type as if you8u were doing ===>  id: number = 5
//  -If you tried setting id = 'Hi'  -->  Since the number type was inferred, then this won't compile
//
let tsID: any = 5;
tsID = "5";
//  -Any removes the static type requirement, you could also do number, string, boolean, array, etc

//
//  Arrays
//
const carMakers: string[][] = []; // Array of Array of Strings
//
//  Map Inferred Array
carMakers[0][0] = "";
carMakers[0].map((car: string): string => {
  return car;
});
//
// Mixed Data Type Array
const importantData: (string | number)[] = ["3", 1, "2"];

//
// Tupples
//
const drink: [string, boolean, number] = ["brown", true, 40]; // color, carbonated, sugar

type Drink = [string, boolean, number];

const drink2: Drink = ["blur", true, 20];

//
// Interfaces
//
const oldCivic = {
  model: "civic",
  year: 2000,
  broken: true,
};

// Typed all arg properties manually, not optimal,
// Can't be reused, doesn't look readable, might create duplicate code
const printYear = (car: { model: string; year: number; broken: boolean }) => {
  return car.year;
};

// Creating a reusable interface is much more optimal
interface Vehicle {
  model: string;
  year: number;
  broken: boolean;
}

const printYearBetter = (car: Vehicle): number => {
  return car.year;
};

printYearBetter(oldCivic);

// Interfaces can have non primitive types
// and functions as properties
interface VehicleExpanded {
  model: string;
  year: number;
  broken: boolean;
  timeOfPurchase: Date;
  summary(): string;
}

const newCivic = {
  model: "civic",
  year: 2020,
  broken: false,
  timeOfPurchase: new Date(),
  summary(): string {
    return `Model --> ${this.model}, Purchased --> ${this.timeOfPurchase}`;
  },
};

const printSummary = (car: VehicleExpanded): void => {
  car.summary();
};

printSummary(newCivic);
