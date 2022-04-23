// Following https://www.youtube.com/watch?v=BCg4U1FzODs
//
let id = 5;         // TS infers the type as if you were doing ===>  id: number = 5
let tsID: any = 5;  // Any removes the static type requirement
//
// id = 'Hi'           // Since the number type was inferred, then this won't compile
tsID = '5'

console.log(id, tsID)

