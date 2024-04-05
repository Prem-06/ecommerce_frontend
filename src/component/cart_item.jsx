import React from 'react';
import './cart_item.css';

const CartItem = ({ item, onDelete }) => {
  const { piece_size, cut_option, amount, bill,fish } = item;
 
  return (
    <div className='cart_item'>
        
      <div>
        <div className='header'>
        <h3>Product Details</h3>
        <button onClick={onDelete}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
        </div>
        <hr />
        <p><strong>Fish:</strong>{fish}</p>
        <p><strong>Piece Size:</strong>{piece_size}</p>
        <p><strong>Cut Option:</strong>{cut_option}</p>
        <p><strong>Amount(kg):</strong>{amount}</p>
        <p><strong>Bill:</strong>₹{bill}</p>
      </div>
     
    </div>
  );
};

export default CartItem;