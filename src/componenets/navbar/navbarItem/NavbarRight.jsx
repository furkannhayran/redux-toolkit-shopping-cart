import React, { useEffect } from 'react'
import '../../../css/navbar-right.scss'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/CartSlice'
import { useNavigate } from 'react-router-dom'

function NavbarRight() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { itemCount } = useSelector(state => state.carts)
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className='navbarRight-container'>
      <div className='navbarRight-navbar'>
        <input className='navbarRight-navbar-input' type='text' placeholder='Arama Yapınız...' />
        <AiOutlineSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate('/cart')} className='navbar-basket'>
        <div className='navbar-count'>{
itemCount
        }</div>
        <SlBasket size={28} />
      </div>
    </div>
  )
}

export default NavbarRight