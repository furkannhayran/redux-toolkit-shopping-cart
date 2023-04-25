import React from 'react'
import { removeFromCart } from '../../redux/CartSlice'
import { useDispatch } from 'react-redux'

function CartNavbar({cart}) {
  const dispatch = useDispatch()
  return (
    <div> 
      <img style={{
        width:"200px"
      }} src={cart.image} alt="" />
      <button onClick={() =>dispatch(removeFromCart(cart.id))}>Ürünü sil</button>
    </div>
  )
}

export default CartNavbar