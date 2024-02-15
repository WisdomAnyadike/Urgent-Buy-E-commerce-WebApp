import {configureStore} from '@reduxjs/toolkit'
// import  DropSlicer  from './Dropdownslice'
import  {DropSlicer}  from './Dropdownslice'


export const Store = configureStore({
    // reducer: {DropSlicer}
    reducer:DropSlicer.reducer
})


