import React,{useState} from 'react'



function Todolist() {
const[list,Setlist]=useState();
const callback=(e) =>{
  Setlist(e.target.value)
}
const addtask=()=>(
  console.log(list)

)

  return (
    <div>
      <input type="text" onChange={callback}/>
      <button
        onClick={()=>{
          addtask();
        }}
        >addtask</button>
    
    </div>
  );
}

export default  Todolist;
  