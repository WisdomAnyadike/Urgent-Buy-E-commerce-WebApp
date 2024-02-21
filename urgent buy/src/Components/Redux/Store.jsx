import {configureStore} from '@reduxjs/toolkit'
import  DropSlicer  from './Dropdownslice'
import Userslice from './Userslice'



export const Store = configureStore({
    reducer: {
         DropSlicer ,
         Userslice
        }    
})


