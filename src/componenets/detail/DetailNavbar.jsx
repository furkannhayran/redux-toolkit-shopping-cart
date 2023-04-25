import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/CartSlice';

function DetailNavbar({ productDetail }) {
    const dispach = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/')
    }
    const decrement = () => {
        if (quantity === 0) {
            setDisable(false)
        } else {
            setQuantity(quantity - 1)
        }
    }
    const increment = () => {
        if (quantity < productDetail?.rating?.count) {
            setQuantity(quantity + 1)
        }
        if (quantity > 0) {
            setDisable(true)
        }

    }
    const addBAsket = () => {
        dispach(addToCart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity }))
    }

    return (
        <div>
            <div onClick={decrement}>-</div>
            <input disabled={disable} type='text' value={quantity} />
            <div onClick={increment}>+</div>
            <div onClick={addBAsket}>****************Sepete Ekle**************</div>
            <div onClick={() => backHome()}>Ana Sayfa</div>
            <div> {productDetail.title} </div>
            <div> {productDetail?.rating?.count}  </div>
            <div> {productDetail?.rating?.rate} </div>
            <img style={{
                width:"150px"
            }} src={productDetail.image} alt="" />
            <div>
                <div> {productDetail.description} </div>
                <div> {productDetail.price} </div>
            </div>
        </div>
    )
}

export default DetailNavbar