import './App.css'
import Fish_component from './component/fish_component'
import { useEffect,useState } from 'react'
import Navbar from './component/navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [data,setdata]=useState([])
  const [data_reach,setdata_reach]=useState(false)
useEffect(()=>{
async function getdata(){
   await fetch('https://ecommerce-backend-dehb.onrender.com/getdata',{
    method:"get",
    headers:{
      'Content-Type': 'application/json'
    }
   }).then((res)=>{
    return res.json();
   }).then((val)=>{
    setdata(val.data)
    setdata_reach(true)
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
       data_reach? ( data.map((d,k)=>{
          return <Fish_component data={d}/>
        })):<ClipLoader
        color="#419ae1"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      }
      </div>
   
  )
}
{/* <MoonLoader color="#36d7b7" /> */}
export default App
