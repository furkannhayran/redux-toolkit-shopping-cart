import React from 'react'
import '../../css/productItem.scss'
import { useNavigate } from 'react-router-dom'
function ProductItem({product}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} style={{
        width:"100%"
    }}>
        <div>{product.price}</div>
        <img style={{
            width:"50px"
        }} src={product?.image} alt="" />
        <div>{product.title}</div>
        
    </div>
  )
}

export default ProductItem