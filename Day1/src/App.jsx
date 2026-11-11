// const App = () =>{
//   return<div>Hello</div>
// }
// export default App;

// or 
// export const App = () =><div>Hello</div>

// jsx
import React from 'react'

const App = () => {
  const name = "suman";
  const nums = "20";
  const person = {
    name:'suman',
    gmail:'suman@gmail.com',
  }

  return (
    <div>
      <h1>Hello</h1>
      <h1>2+5</h1>
      <h1>{2+5}</h1>
      <h1>{5-2}</h1>
      <h1>Name = {name}</h1>
      <h1> nums = {nums}</h1>
      <h1>Name = {person.name}</h1>
      <h1>Gmail = {person.gmail}</h1>

    </div>
  )
}

export default App
