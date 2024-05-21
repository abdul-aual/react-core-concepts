import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'photoshop', price:'$55'},
    {name:'pdf reader', price:'$23'},
    {name:'Ms word', price:'$11'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Person nayok="shakib Khan" nayika="Opu biswas" ></Person>
        <Person nayok="Jayend Khan"  nayika="Nipun" ></Person>
        <Mam pname ={products[0].name} pprice = {products[0].price}></Mam>
        <Mam pname ={products[1].name} pprice = {products[1].price}></Mam>
        <Mam pname ={products[2].name} pprice = {products[2].price}></Mam>
        
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(9);
  return (
    <div style={{margin:'50px'}}>
      <h3>Count: {count}</h3>
      <button onClick={()=> setCount(count+1)} >Increase</button>
      <button onClick={()=>setCount(count-1)} >Decrease</button>
    </div>
  )
}
function Mam(props) {
  const pstyle =
  {
    
    height:'200px',
    width: '200px',
    backgroundColor: 'gray',
    borderRadius:'9px',
    margin: '6px'
  }
  const btn={
    borderRadius:'5px',
    border:'none'
  }
  return(
    <div style ={pstyle}>
      <h4>{props.pname} </h4>
      <p>{props.pprice}</p>
      <button style={btn}>Buy Now</button>
    </div>
  )
  
}

function Person(props)
{
  const PersonStyle={
    border:'3px dotted blue',
    margin:'4px',
    padding:'5px',
    

  }
  
  return (
    <div style={PersonStyle} >
      <h3>Nayok: {props.nayok}</h3>
      <h5>Nayika: {props.nayika}<br></br>
      <button>Book Nayika</button></h5>
    </div>
  )
}

export default App;
