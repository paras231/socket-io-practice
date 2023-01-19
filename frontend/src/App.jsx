import React,{useState,useEffect} from 'react'
import { io } from "socket.io-client";

let socket;
const App = () => {


  const [data,setData] = useState([]);

  useEffect(()=>{
    socket = io("http://localhost:5000");
    console.log(socket);
    socket.on('connection',()=>{
console.log('socket connected',socket);
    })
  },[])

  useEffect(()=>{
    socket.on("data",(newdata)=>{
      console.log(newdata);
      setData([...data,newdata])
    })
  },[data])
console.log(data[0],'line 24');
const updated = data[0];
  return (
    <>
    {/* <h3>socket io</h3> */}
    {
     updated?.map((value)=>{
      return (
        <>
        <h3>{value.name}</h3>
        </>
      )
     })
    }
    </>
  )
}

export default App
