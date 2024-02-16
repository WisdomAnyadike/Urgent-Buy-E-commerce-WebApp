import React from 'react'
import '/src/Components/Product Card/product.styles.scss'
import Button from '../Buttons/Button'
import {  useDispatch } from 'react-redux'
import { setCartArr } from '../Redux/Dropdownslice'



const ProductCard = ({ data : { id, name, imageUrl, price } }) => {

   const dispatch = useDispatch()
    

    const handleCart = (id , name , imageUrl , price)=> {
        const cartObject = {
            id,
            name,
            imageUrl,
            price,
            quantity: 1
        }

        dispatch(setCartArr(cartObject))

    }

    return (
        <div className='product-card-container rounded'>
            <img className='rounded' src={imageUrl} />
            <div className='card-footers'>
                <span className='name'> {name}</span>
                <span className='price'> N{price}.00 </span>
             <Button func={()=> handleCart(id , name , imageUrl , price)}  buttonType={'inverted'} styles={'button'} >
                    ADD TO CART
                </Button> 
            </div>

        </div>
    )
}

export default ProductCard