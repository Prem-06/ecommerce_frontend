import React, { useEffect } from 'react'
import { useState } from 'react'
import './cart.css'
import {  toast } from 'react-toastify';
import Cart_item from './cart_item'
import { useGlobalState } from '../global_context.jsx';
const Cart = (prop) => {
    const {check}=prop;
    const [cart_bill,setcart_bill]=useState(0)
    const notifyA = (val) => toast.success(val);
    const notifyB = (val) => toast.error(val);
    const [cartItems, setCartItems] = useGlobalState();
   function calculate_bill(){
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.bill);
    });
    setcart_bill(total);
   }
useEffect(()=>{
  calculate_bill()
},[cartItems])
      const handleDelete = (id) => {
        const remind=confirm('You want to remove it?');
        if(remind){
          setCartItems(cartItems.filter(item => item.id !== id));
          notifyA('Deleted succesfully')
        }
       
      };
      
      async function cart_checkout(){
        if (cartItems.length <= 0) { 
          notifyB("Cart is empty");
          return;
      }

        await fetch('http://localhost:3000/checkout',{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
           body:JSON.stringify({
            cart_data:cartItems,
            total_bill:cart_bill
           })
        }).then((res)=>{
          return res.json();
        }).then((val)=>{
          if(val.error){
            notifyA(val.error)
          }
          else{
            notifyA(val.message)
          }
          setCartItems([]);
      
        }).catch((err)=>{
          notifyB("Error occur")
        })
      }

  return (
    <div className='cart' style={{display:check?"inline-flex":"none"}}>
{cartItems.map(item => (
        <Cart_item
          key={item.id}
          item={item}
          onDelete={() => handleDelete(item.id)}
        />
       
      ))}
      <br />
      <hr />
      <div className='cart_end'>

        <p><strong>Total:</strong>₹{cart_bill}</p>
        <button onClick={()=>{
          cart_checkout()
        }}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart