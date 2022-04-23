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
//  -TS infers the type as if you were doing ===>  id: number = 5
//  -If you tried setting id = 'Hi'  -->  Since the number type was inferred, then this won't compile
//
let tsID: any = 5;  
tsID = '5' 
//  -Any removes the static type requirement, you could also do number, string, boolean, array, etc
//


