import React, { useState } from "react";
import { getTodo,addTodo } from "../redux/action";
// import {v1 as uuid} from 'uuid';
import { useDispatch } from "react-redux";
import axios from 'axios';
function TodoInput(){
let [title,settitle]= useState();
let dispatch=useDispatch();


    return(
        <div className="row m-2">
            
            <input 
            onChange={(e)=>settitle(e.target.value)} 
            value={title}
            type="text"  
            className="col form-control" 
            placeholder="type something"/>
            <button 
            onClick ={()=>{

            axios.post('http://localhost:3003/todos',{title}).then(
                ()=>{
 axios.get("http://localhost:3003/todos").then((res)=>
        dispatch(getTodo(res.data)))
                }
            )
               
              
        }}
            className="btn btn-primary m-2" >Add</button>
        </div>
    )
}

export default TodoInput;