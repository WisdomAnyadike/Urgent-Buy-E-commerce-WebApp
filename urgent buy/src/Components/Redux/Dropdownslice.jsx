import { createSlice } from "@reduxjs/toolkit";

 export const DropSlicer = createSlice({
    name:"isDropping",
    initialState:{
        value: false
        
    } , 
    reducers:{
        setDropOpen : (state)=> { 
            state.value = !state.value
            }
    }
   
 })

 export const {setDropOpen} = DropSlicer.actions
 export default DropSlicer.reducer