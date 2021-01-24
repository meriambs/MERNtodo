import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodo,deletTodo, updateTodo ,completTodo } from "../redux/action";
import { AiOutlineCheck } from "react-icons/ai";
import axios from 'axios';
function TodoItem({todo}){
    const [editable,setEditable] = useState(false);
    const [name,setName]=useState(todo.name);

  let dispatch = useDispatch();
  
      return(
        <div>
           
            <div 
            className="row mx-2 align-items-center">
                {/* <div>{todo.id.length > 1 ?todo.id[2] : todo.id}</div> */}
                <div>
                   <AiOutlineCheck onClick={()=>{
                     console.log('hey',todo.id);
                     dispatch(completTodo(todo.id))}}>  
                   {' '}
                {!todo.isCompleted ? 'Complete' : 'Undo'}</AiOutlineCheck>
                </div>
                <div 
                className="col" >
 {editable ? <input type="text" className="form-control"
 value={name} 
 onChange={(e)=>{console.log(e.target.value);
 setName(e.target.value)}} /> : <h4  style={{
                  display: 'inline',
                  textDecoration: todo.isCompleted ? 'line-through' : 'none'
                }}
                >{todo.title}</h4>}
 </div>
                    
                 <button 
                 className="btn btn-danger m-2"
                  onClick ={()=>{

            axios.delete(`http://localhost:3003/todos/${todo._id}`).then(
                ()=>{
 axios.get("http://localhost:3003/todos").then((res)=>
        dispatch(getTodo(res.data)))
                }
            )
               
              
        }}
                 >Delete</button>
     
                    <button  
     className="btn btn-primary m-2"
     onClick={()=> {

          axios.put(`http://localhost:3003/todos/${todo._id}`,{title:name})
 .then(()=>{axios.get("http://localhost:3003/todos")

 .then((res)=>{dispatch(getTodo(res.data))
 setEditable(!editable)}
         )})
     }} >{editable ? "Update" : "Edit"};
     </button>
    
            </div>
       
       
        </div>
    );
}

export default TodoItem;