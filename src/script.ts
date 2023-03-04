// const fetch = require('node-fetch');

export async function createDatabase() {
  console.log('hello Holly');
  return 'hello';
}

export async function readDatabase() {
  console.log('hello Holly');
  try {
  const result = await fetch('url');
  const data = await result.json();
  console.log(data);
  } catch (error) {
    console.log('error', error)
  }
  return 'hello';
}

// export async function fakeAxios() {
//   const instance = new Fetch();
//   const result = instance.get('https://swapi.dev/api/people/1/');
//   return result;
// }

// class Fetch {
//   async get (url)  {
//     try {
//       const response = await fetch(url);
//       const data = await response.json(); 
//       return data;
//     } catch(err) {
//       console.log(err)
//     }
//   }
// }

// console.log(fakeAxios());