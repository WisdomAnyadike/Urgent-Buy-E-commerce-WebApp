import React from 'react'
import Button from '../Buttons/Button'
import '/src/Components/Cart -dropdown/cartdrop.styles.scss'
import Cartitems from '../Cart-items/Cart-items'
import { useSelector } from 'react-redux'


const CartDropdown = () => {
const {cartArr} = useSelector(state => state)
const isEmpty = cartArr.length === 0;

  return (
    <div className='cart-dropdown-container rounded'>
    <div className='cart-items'>

{ isEmpty ? <small> Your cart is empty </small> : cartArr.map((cartItem)=> 

<Cartitems  key={cartItem.id}  cartItem={cartItem}/>

)  }

    
    </div>

    <Button buttonType={'normal-button'} >
     CHECKOUT
    </Button>
    


    </div>
  )
}

export default CartDropdown