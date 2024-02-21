import React from 'react'
import '/src/Components/Product Card/product.styles.scss'
import {  useDispatch } from 'react-redux'
import { setCartArr } from '../Redux/Dropdownslice'
import '@fortawesome/fontawesome-free/css/all.min.css';




const ProductCard = ({ data : { id, name, imageUrl, price } }) => {

   const dispatch = useDispatch()
    

    const handleCart = (id , name , imageUrl , price)=> {
        const cartObject = {
            id,
            name,
            imageUrl,
            price,
            quantity: 1 ,
        }

        dispatch(setCartArr(cartObject))

    }

    return ( 
        <div className="product-grid rounded">
            <div className="product-image ">
                <a href="#" className="image">
                    <img width={150} height={150} className='rounded' src={imageUrl}/>
                </a>
                <span className="product-discount-label">-23%</span>
                <ul className="product-links">
                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-random"></i></a></li>
                </ul>
                <button className='border-0 add-to-cart' onClick={()=> handleCart(id , name , imageUrl , price)}   >Add to Cart</button>
            </div>
            <div className="product-content " style={{borderRadius:"0px 0px 5px 5px"}}>
                <h3 className="title"><a href="#">{name}</a></h3>
                <div className="price">N{price}.00  <span>N68.88</span></div>
            </div>
        </div>
 
    )
}

export default ProductCard