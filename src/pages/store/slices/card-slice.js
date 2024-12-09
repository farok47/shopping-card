import { createSlice } from "@reduxjs/toolkit"

const initialState=[]

const cardslice=createSlice({
    name:"card",
    initialState,
    reducers:{
        addtocard(state,action){
            console.log(action)
            state.push(action.payload)
        },
        removefromcard(state,action){
            console.log(action)
           return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addtocard,removefromcard}=cardslice.actions
export default cardslice.reducer
