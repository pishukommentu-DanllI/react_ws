import { useState } from 'react';
import { nanoid } from 'nanoid'
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { Carts } from './components/Carts';
import { Orders } from './components/Orders';

function App() {
  let [user, setUser] = useState(true);
  let [products, setProducts] = useState([
    {id:nanoid(), name:'item1', description:'Description1', price:2000},
    {id:nanoid(), name:'item2', description:'Description2', price:2000}
  ]);

let [carts, setCarts] = useState([]);

let [orders, serOrders] = useState([]);

function f(e, id) {
  
  return e.id === id
  }


function add_to_cart(event) {
  
  // let product = products.find((e) => f(e, event.id))

  console.log(carts.find((e) => f(e, event.id)))
  if (carts.find((e) => f(e, event.id))) {
      setCarts(carts.map((e, index) => {
        if (e.id === event.id) {
          return {...e, count: e.count + 1}
        } else {
          return e
        }
      }))
  } else {
    setCarts([...carts, {id:event.id, count:1, name:event.name}])
    console.log(carts)
  } 



}
function Delete_carts(id) {
  let list = []
  for (let e of carts) {
    if (e.id == id && e.count - 1 >= 1) {
      list.push({...e, count:e.count - 1})
  } else if (e.id !== id) {
      list.push(e)
  }}

  setCarts(list);
  
}

  


return (
    <>
    <Header user={user}/>
      <div className='MainBlock'>
      

      <Routes>
        <Route path='/' element={<Products user={user} products={products} add_to_cart={add_to_cart}/>}/>
        <Route path='/cart' element={<Carts carts={carts} Delete_carts={Delete_carts} setCarts={setCarts}/>}/>
        <Route path='/orders' element={<Orders orders={orders}/>}/>

      </Routes>

      </div>
    </>
  );

}
export default App;
