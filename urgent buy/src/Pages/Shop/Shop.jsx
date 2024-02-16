import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/Product Card/ProductCard'
import '/src/Pages/Shop/shop.styles.scss'
import { ToastContainer } from 'react-toastify';

const Shop = () => {
  let [datas, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/hats').then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className='products-container'>
      {datas.map((data) =>
        <ProductCard key={data.id}  data={data} />
      )}
<ToastContainer
  position='bottom-left'
/>
    </div>
  )
}

export default Shop