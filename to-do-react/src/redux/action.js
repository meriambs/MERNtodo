import axios from 'axios';
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLET_TODO = "COMPLET_TODO";
export const GET_TODO = 'GET_TODO';

export function getTodo(todo){
    return {
        type:GET_TODO,
        todos:todo,
    }
}

export const addTodo=(todo)=>dispatch=>{
    axios.post('http://localhost:3003/todos',todo).then(res=>dispatch({
        type:ADD_TODO,
        payload:res.data
    }))
    
}




export function deletTodo(todoId){
    return {
        type: DELETE_TODO,
        payload:todoId,
    }
}


export function updateTodo(todo){
    return {
        type:UPDATE_TODO,
        payload:todo,
    }
}



 export function completTodo(todo){
     return {
         type:COMPLET_TODO,
         payload:todo,
     }
}

