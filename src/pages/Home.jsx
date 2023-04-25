import React from 'react'
import SliderCopm from '../componenets/home/SliderCopm'
import Sorting from '../componenets/home/Sorting'
import Categories from '../componenets/home/Categories'
import Product from '../componenets/home/Product'
import "../css/home.scss"
import { useState } from 'react'
function Home() {
  const [sort,setSort]= useState('')
  const [category,setCategory]= useState('')

  
  return (
    <div>
      <SliderCopm/>
      <Sorting setSort = {setSort}/>
      <div className='home-navbar'>
        <Categories setCategory = {setCategory}/>
        <Product category = {category} sort = {sort}/>
      </div>
    </div>
  )
}

export default Home