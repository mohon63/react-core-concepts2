import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function User(props) {
  return (
    <div className={"products"}>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}>{user.name}</User>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCoutn] = useState(55);
  const handleIncrease = () => setCoutn(count + 1);
  const handleDecrease = () => setCoutn(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{ backgroundColor: "green", color: "white", marginRight: "5px" }} onClick={handleIncrease}>Increase</button>
      <button style={{ backgroundColor: "red", color: "white" }} onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const products = {
    borderRadius: '15px'
  }
  return (
    <div className="products" style={products}>
      <h2>Name: {props.name}</h2>
      <h2>Price: {props.price}</h2>
    </div>
  )
}

/* 
const products = [
    { name: 'Mobile', price: '12000' },
    { name: 'Oppo', price: '36000' },
    { name: 'Samsung', price: '21000' },
    { name: 'Vivo', price: '13000' },
    { name: 'Sony', price: '22000' }
  ]
*/

/* 
{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Mobile" price="12000"></Product>
      <Product name="AC" price="22000"></Product>
      <Product name="Freaze" price="32000"></Product>
*/
export default App;
