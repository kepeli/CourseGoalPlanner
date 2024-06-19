



let userName: string = 'Max';

let userNumber: string | number = 34;

let userBoolean: boolean = true;

let user: {
  name: string,
  age: number,
  isAdmin: boolean,
  id: string | number
};

user = {
  name : 'Max',
  age : 34,
  isAdmin : false,
  id : 'Max'
};

let hobbiies: [string, number, boolean];

hobbiies = ['string', 3, false];


const add = (a: number, b: number,) => {
  const result = a + b;
  return result;

}
