import React from 'react'
import '/src/Components/Product Card/product.styles.scss'
import Button from '../Buttons/Button'



const ProductCard = ({ data : {  name, imageUrl, price } }) => {
    return (
        <div className='product-card-container rounded'>
            <img className='rounded' src={imageUrl} />
            <div className='card-footers'>
                <span className='name'> {name}</span>
                <span className='price'> N{price}.00 </span>
             <Button  buttonType={'inverted'} styles={'button'} >
                    ADD TO CART
                </Button> 
            </div>

        </div>
    )
}

export default ProductCard