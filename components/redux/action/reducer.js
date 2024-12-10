import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
    name:'todo',
    initialState:{list:[]},
    reducers:{
        addTodo : (state,action)=>{
            console.log(action.payload)
            state.list.push(action.payload)
        },
        removeTodo: (state,action)=>{
            state.list =state.list.filter(todo=> todo.id !== action.payload.id)
        },
        doneTodo:(state,action)=>{
            const todo = state.list.find(todo=>todo.id === action.payload.id)
            if(todo){
                todo.status = action.payload.status
                todo.description = action.payload.description
                todo.status = action.payload.status
            }
        }


    }
})

export const{addTodo,removeTodo,doneTodo}= reducerSlice.actions
export default reducerSlice.reducer