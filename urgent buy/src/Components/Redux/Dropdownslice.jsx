import { createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';

export const DropSlicer = createSlice({
    name: "isDropping",
    initialState: {
        value: false,
        cartArr: [] 

    },
    reducers: {
        setDropOpen: (state) => {
            state.value = !state.value
        },
        setCartArr: (state, action) => {
            const { id } = action.payload
            console.log(action.payload);
            const existingObjIndex = state.cartArr.findIndex(obj => id === obj.id);

            if (existingObjIndex === -1) {
                // If object with id does not exist, push the new object to cartArr
                state.cartArr.push(action.payload);
                toast.success(`${action.payload.name} added to cart`)
               
            } else {
                // If object with id exists, increment its quantity by 1
                const existingObj = state.cartArr[existingObjIndex];
                state.cartArr[existingObjIndex] = {
                    ...existingObj,
                    quantity: (existingObj.quantity || 0) + 1 // Increment quantity or set to 1 if undefined
                };
                toast.success(`${existingObj.name} added to cart`)
            }

        }
    }

})

export const { setDropOpen, setCartArr } = DropSlicer.actions
export default DropSlicer.reducer