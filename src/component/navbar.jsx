import React,{useState} from 'react'
import './navbar.css'
import logo from '../../public/pictures/without_bg_white_text-cropped_ykiihu.svg'
import Cart from './cart'
const Navbar = () => {
  const [cart_vis, setcart_vis] = useState(false);
  function showcart(){
   if(cart_vis===false){
      setcart_vis(true)
   }
   else{
      setcart_vis(false)
   }
  }
  return (
    <div className='navbar'>
        <div className="logo"><img src={logo} alt="err" /></div>
        <div className="search-div">
            <input type="search" placeholder='Search item...'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            
        </div>
        <div className="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
           <svg onClick={()=>{showcart()}} xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-handbag-fill" viewBox="0 0 16 16" >
  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
</svg>
        </div>
        <Cart check={cart_vis}/>
    </div> 
  )
}

export default Navbar