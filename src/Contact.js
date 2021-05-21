import React, {useState} from 'react';

const Contact = (props) => {
let nameVal = props.data[0]?.name
const [name, setName] = useState([])

console.log(name)
return (
<div>CONTACT
  <input type="text" value={nameVal} onChange={(e) => {
    console.log(e.target.value)
    setName(e.target.value)
    }}/>
</div>
)
}

export default Contact;


// let objName = data[0].name
// console.log(objName)
// const [dataObj, setDataObj] = useState([]);
// const [name, setName] = useState([]);

// const getData = () => {
//   setDataObj(data)
// }

// useEffect(() => {
//   getData();
// }, [])

// const handleNameChange = (e) => {
//   const input = e.target.name;
//   const value = e.target.value;

//   const newState = {};
//   newState[input] = value;
//   setName(newState)

// }

// const Update = (name) => {
//   console.log(name)
// }

// const handleEmailChange = (e, i) => {
//   console.log(e)
// }


// const info = dataObj.map((el, i) => {
//   console.log(el)
//   return (

//     <>
//       <input key={i} name="name" value={el.name} onChange={handleNameChange} />
//       <div>{el.name}</div>
//       <button onClick={() => Update(el.name)}>update name</button>
//       {/* <input type="text" key={i} value={el.email} onChange={(e)=>handleEmailChange(e,i)} /> */}
//     </>
//   )
// })

// return (
//   <div className="App">
//     Hello
//     <div>{info}</div>
//     <Contact data={dataObj} />
//   </div>
// )

//-----------------------------------------------


// const [data, setData] = useState([]);

// const getData = () => {
//   fetch('https://reqres.in/api/users/')
//     .then(async res => {
//       if (!res.ok) {
//         throw Error('WRONG')
//       }
//       return res.json()
//     })
//     .then(data => {

//       setData(data.data)
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }

// useEffect(() => {
//   getData();
// }, [])


// // const email = data.[0]?.email

// let mapped = data?.map((el, i) => {
//   console.log(el.id)
//   return (
//     <>
//       <li key={el.first_name}>{el.first_name} {el.last_name}</li>
//       <img src={el.avatar} alt={el.first_name} />
//     </>
//   )
// })

// let filtered = data?.filter((el, i) => {
//   if (el.first_name.length <= 5) {
//     return true
//   }

// })
// let fil = filtered.map((el, i) => {
//   return (<div key={el.first_name}>{el.first_name}</div>)
// })
// console.log("data", data);
// console.log("filter", filtered)
// return (
//   <div className="App">
//     <h2>HELLO</h2>
//     {/* <h3>{email}</h3> */}
//     <div>
//       <ul>{fil}</ul>
//       <ul>{mapped}</ul>

//     </div>

//   </div>
// );
