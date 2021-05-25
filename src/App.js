import React, { useState, useEffect } from 'react';
import './App.css';
// import Contact from './Contact';
var data = [
  {
    name: 'James',
    email: 'james@gmail.com'
  },
  {
    name: 'Jones',
    email: 'jones@gmail.com'
  },
  {
    name: 'Donald',
    email: 'don@yahoo.com'
  }
]




function App() {
const [dataState, setDataState] = useState([])

const getData = () => {
  setDataState(data);
}

useEffect(() => {
  getData();
}, [])

const handleNameChange = (e, i) => {
  const { value } = e.target
  dataState[i].name = value;


}

const handleEmailChange = (e, i) => {
  const {value} = e.target
  console.log(value)
  dataState[i].email = value;

}

console.log(dataState)

const mapped = dataState.map((el, i) => {

  return (
    <>
      <input key={i} defaultValue={el.name} onChange={(e) => handleNameChange(e, i)} />
      <input key={i} defaultValue={el.email} onChange={(e) => handleEmailChange(e,i)} />
    </>
  )
})

return (
  <div>
    Hello
    <div>{mapped}</div>
  </div>
)

}

export default App;



// const [people, setPeople] = useState(data)
// console.log(people)
// return (
//   <div>
//     {people.map(el => {
//       return (
//         <div>
//           <input onChange={(e) => {

//             // const firstName = e.target.value
//             setPeople((currentPeople) => currentPeople.map(x => x.name === el.name ? {
//               ...x,
//               name: e.target.value
//             } : x))

//           }} value={el.name} />
//         </div>
//       )
//     })}
//   </div>
// )
