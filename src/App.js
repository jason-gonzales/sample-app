import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://reqres.in/api/users/')
      .then( async res => {
        if (!res.ok) {
          throw Error('WRONG')
        }
        return res.json()
      })
      .then(data => {

        setData(data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getData();
  }, [])


  const email = data.[0]?.email

  let mapped = data?.map((el, i) => {
    return (
      <>
      <li key={el.id}>{el.first_name} {el.last_name}</li>
      <img src={el.avatar} alt={el.first_name}/>
      </>
      )
})

let filtered = data?.filter((el,i) => {
 if(el.first_name.length <= 5) {
    return true
 }

})
let fil = filtered.map((el,i) => {
    return (<div>{el.first_name}</div>)
})
console.log("data",data);
console.log("filter",filtered)
  return (
    <div className="App">
      <h2>HELLO</h2>
      <h3>{email}</h3>
      <div>
        <ul>{fil}</ul>
        <ul>{mapped}</ul>

      </div>

    </div>
  );
}

export default App;
