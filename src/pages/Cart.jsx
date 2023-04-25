import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/CartSlice'
import CartNavbar from '../componenets/cart/CartNavbar'

function Cart() {
    const dispatch = useDispatch()
    const { carts, itemCount, totalAmount } = useSelector(state => state.carts)

    console.log(itemCount, totalAmount)
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div>{
            carts?.length > 0? <div>
                {
                    carts?.map((cart,i)=>(

                        <CartNavbar key={i} cart = {cart}/>
                    ))
                }
            </div>:<div>Kartınız boş...</div> 
        }</div>
    )
}

export default Cart