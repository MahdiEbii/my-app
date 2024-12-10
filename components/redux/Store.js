import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import reducerSlice from './action/reducer'
// const store = configureStore({
//     reducer:{
//         todo:reducerSlice
//     }

//     })

const rootreducer = combineReducers({
    todo:reducerSlice
})

const store =configureStore({
    reducer : rootreducer
})




    
export default store