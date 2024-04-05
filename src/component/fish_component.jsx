import React, { useState } from 'react'
import './fish_component.css'
import View from './view_more'
import Detail from './detail'
import { useGlobalState } from '../global_context.jsx';
import Warn_modal from './warn_modal.jsx'
import {  toast } from 'react-toastify';
const Fish = (prop) => {
   const notifyB = (val) => toast.error(val);
   const notifyA = (val) => toast.success(val);
   const [cartItems, setCartItems] = useGlobalState();
   const {data}=prop
   const [total_bill,settotal_bill]=useState(data.price);
   const intital = parseFloat(1.00);
   const cut_options=["Small(40-60gm)","Medium(60-80gm)","Large(80-100gm)"]
   const [total_amount,settotal_amount]=useState(intital.toFixed(2));
   const [piece_size,setpiece_size]=useState("");
   const [cut_option,setcut_option]=useState("");
   const [error, setError] = useState(null);
   
 
  const handleError = (message) => {
    setError(message);
  };

  const handleClose = () => {
    setError(null);
  };
   function decrease_amount() {
      if (total_amount > 0.25) {
         const newAmount = parseFloat(total_amount - 0.25).toFixed(2);
         settotal_amount(newAmount);
         const bill = parseFloat(data.price * newAmount).toFixed(2);
         settotal_bill(bill);
      }
   }
   
   function increase_amount() {
      const newAmount = parseFloat(total_amount) + 0.25;
      settotal_amount(newAmount.toFixed(2));
      const bill = parseFloat(data.price * newAmount).toFixed(2);
      settotal_bill(Number(bill));
      console.log(typeof(total_bill))
   }
   
   function collect_piecesize(val){
       if(piece_size!==""&&val!==""&&piece_size===val){
        setpiece_size("");
      
       }
       else {
        setpiece_size(val);
         
       }
   }
   function collect_cutoption(val){
       if(cut_option!==""&&val!==""&&cut_option===val){
      setcut_option("");
       }
       else{
        setcut_option(val); 
         
       }
   }
   function addtobag() {
      if (piece_size === "") {
        handleError("Select piece size");
        return;
      }
      if (cut_option === "") {
        handleError("Select cut option");
        return;
      }
    const size=cartItems.length
      const detail_product = {
         id:size,
        fish: data.fish,
        piece_size: piece_size,
        cut_option: cut_option,
        amount: total_amount,
        bill: total_bill
      };
      const updatedCartItems = [...cartItems, detail_product];
      setCartItems(updatedCartItems);
      notifyA("Added to bag");
    }
  return (
    <div className='fish_component'>
      <div className="first">
      {error && <Warn_modal errorMessage={error} onClose={handleClose} />}
        <div className="first-img-div">
            <div><img src={data.img_url} alt="err" /></div>
        </div>
        <div className="first-detail-div">
                     <div className="title">
                        <h2 style={{color:"#475f7b"}}>{data.fish}</h2>
                        </div>
                     <br />
                     <div className="fish-type">
                        <p>{data.fish_type}</p>
                     </div>
                     <br />
                     <div className="price">
                        <div style={{marginBottom:"4px"}}><strong>₹{data.price}</strong></div>
                        <div><p>Quantity - <strong>1kg</strong> </p></div>
                     </div>
                    <br />
                   
                    <br />
                     <div className="cutpot">
                        <strong style={{fontSize:"1.4em"}}>Select Cut Options:</strong>
                     </div>
                     <br />
                     <div className="cutbtn">
                        <input type="button" value="Gada-peti" onClick={(e)=>{
                           collect_cutoption(e.target.value);
                           }} 
                           style={{ backgroundColor: cut_option === "Gada-peti" ? '#419ae1' : 'initial',color: cut_option ==="Gada-peti" ? 'white' : 'initial'}}
                           />
                     </div>
                     <br />
                     <div className='sizeopt'><strong style={{fontSize:"1.4em"}}>Select Size Options:</strong></div>
                     <br />
                     
<div className="sizebtn-div">
      {cut_options.map((c, k) => (
        <div key={k} className={`sizebtn`}>
          <input
            type="button"
            value={c}
            onClick={(e) => {
              collect_piecesize(e.target.value)
            }}
            style={{ backgroundColor: piece_size === c ? '#419ae1' : 'initial',color: piece_size === c ? 'white' : 'initial'}}
          />
        </div>
      ))}
    </div>
<br />
                     <div className="description">
                        <p>{data.description}</p>
                     </div>
                     <br />
                     <div className="origin">
                        <div> <strong> Country of Origin:</strong>{data.origin}</div>
                       </div>
<br />
     <div className="addtocart">
        <button onClick={()=>{addtobag()}}><p style={{marginRight:"4px"}}>Add to Bag</p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentcolor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
</svg></button>
     </div>
     <br />
     <div className="quantity-div">
      <div><p style={{fontSize:"125%"}}>Quantity(in kg) - </p></div>
      <div className='value-changer'>
      <div className="decrease"><input type="button" value="-" onClick={()=>{decrease_amount()}}/></div>
        <div className="quantity"><strong>{total_amount}kg</strong></div>
        <div className="increase"><input type="button" value="+" onClick={()=>{increase_amount()}}/></div>
      </div>
        
     </div>
<br />
<div className="amount">
    <p>Total Payable: <strong>₹{total_bill}</strong></p>
</div>
        </div>
      </div>
<View  know_more={data.know_more} />
<br />
<Detail/>

    </div>
  )
}

export default Fish