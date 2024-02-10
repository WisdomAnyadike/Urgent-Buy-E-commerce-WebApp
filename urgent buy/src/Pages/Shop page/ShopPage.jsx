import React from 'react'
import { useParams } from 'react-router-dom'


const ShopPage = () => {
  const {param} = useParams()

  console.log(param);
  return (
    <div>ShopPage</div>
  )
}

export default ShopPage