import React from 'react'
import './view_more.css'
import { useState } from 'react'
const View = (prop) => {
const [isopen,setisopen]=useState(false);
const [displaystyle,setdisplaystyle]=useState('none');
const {know_more}=prop;
const descrip=know_more[0];
function setviewmore(){
    if(isopen){
        setisopen(false)
        setdisplaystyle('none')
    }
    else{
        setisopen(true)
        setdisplaystyle('block')
    }
}

  return (
    <div className='view_more'>
        <div className="btn-div">
            <button onClick={()=>{setviewmore()}}>View More{
                isopen?<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="white" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
              </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
            }</button>
        </div>
        <br />
        <div className="view-detail" style={{display:`${displaystyle}`}}>
            <p className='title-tag'>Nutritional Value</p>
            <br />
            <br />
            <div className='about'>
            <p>{descrip}</p>
            </div>
           <br />
            <div className='list-div'>
                <ul>
                    {
                       know_more.map((v,k)=>{
                       if(k!=0){
                        return <li>{v}</li>
                       }
                            
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default View