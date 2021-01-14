export function createAction1 (a: any): any {
  return {
    type: 'SHOW',
    params1: a
  }
}


// interface Person {
//   name: string,
//   age: number,
//   readonly sex?: string,
//   [anyProp: string]: any
// }

// interface Arr {
//   [index: number]: Person
// }


// interface Animal {
//   clone(animal: number): number;
// }

// interface Fn {
//   (x: any): any
// }

// class Dog implements Animal{
//   clone(num: number) {
//     return num
//   }
// }


// let person: Person = {name: '1', age: 1, x: 1}
// let people: Arr = [ person, {name: '2', age: 2} ]
// let ar1: any[] = [1]
// let f: Fn
// f = function (x: any) {
//   return Boolean(true)
// }

// enum Day { Mon = 1, Tus = 2 }
// let d: Day = 1

// type S = string
// type SN = S & number
// interface Arr2 extends Arr { [index: number]: any }

// type O = object
// interface O1 extends O { name: string }
// type PersonType = Person & {  hair: string }


