import './App.css'
import Fish_component from './component/fish_component'
import { useEffect,useState } from 'react'
import Navbar from './component/navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data,setdata]=useState([])
useEffect(()=>{
async function getdata(){
   await fetch('http://localhost:3000/getdata',{
    method:"get",
    headers:{
      'Content-Type': 'application/json'
    }
   }).then((res)=>{
    return res.json();
   }).then((val)=>{
    setdata(val.data)
   }).catch((err)=>{
    console.log(err)
   })
}
getdata()
},[])
  return (
    
     <div className='app'>
<Navbar/>
<ToastContainer />
      {
        data.map((d,k)=>{
          return <Fish_component data={d}/>
        })
      }
      
      </div>
   
  )
}

export default App
