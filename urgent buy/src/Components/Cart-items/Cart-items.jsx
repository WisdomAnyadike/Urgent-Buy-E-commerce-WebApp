import React from 'react'
import '/src/Components/Cart-items/cart-item.styles.scss'

const Cartitems = ({cartItem: {id , name , price , quantity , imageUrl}}) => {
   
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`} />
    
    <div className='item-details'> 
    <h2 className='name'> {name}</h2>
    <span className='price'> <i> {quantity}  x N{price}  </i>  &nbsp; <b>N{ Number(quantity) * Number(price)} </b></span> 
    </div>
   
    
    </div>
  )
}

export default Cartitems