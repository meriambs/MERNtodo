import React , {useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import { useSelector,useDispatch } from 'react-redux';
import {getTodo} from '../redux/action';
import axios from 'axios';


function TodoList(){
    let dispatch = useDispatch();
    useEffect(()=>{
    axios.get("http://localhost:3003/todos").then((res)=>
        dispatch(getTodo(res.data)))
    },[])
 const [Completed,setCompleted]=useState(false);
 const [NotCompleted,setNotCompleted]=useState(false);
 let todos = useSelector(state => state.todos);
 console.log('hoo',todos);
    return(
        <div className="my-4" >
           <div className="comppart" style={{display:"flex",justifyContent:"space-around"}}>
            <label>
          Completed
          <input style={{marginLeft:"10px"}}
            
            type="checkbox"
            checked={Completed}
            onChange={()=>setCompleted(!Completed)} />
        </label>
        <label>
          NotCompleted
          <input  style={{marginLeft:"10px"}}
            
            type="checkbox"
            checked={NotCompleted}
            onChange={()=>{
                console.log('NotCompleted',NotCompleted);
                setNotCompleted(!NotCompleted)}} />
        </label>
</div>
           {todos.filter(todo =>{
               if((Completed && NotCompleted)||(!Completed && !NotCompleted) ){
                   return true
               } else if (Completed) {
                   return todo.isCompleted
               } else if (NotCompleted) {
                   return !todo.isCompleted
               } 
           })
           .map(todo =>{
               return <TodoItem key = {todo.id} todo={todo}/>
           })}

        </div>
    )
}

export default TodoList