import React from 'react'
import '../../css/catagories.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getCategories } from '../../redux/CatagoriSlice';
function Categories({ setCategory }) {
    const dispach = useDispatch();
    const { catagories } = useSelector(state => state.categories)
    useEffect(() => {
        dispach(getCategories())
    }, [dispach])
    return (
        <div className='catagories-container'>
            <div>KATEGORİ</div>
            <div onClick={() => setCategory('')}>All Category</div>
            {
                catagories.map((cate, i) => (
                    <div onClick={() => setCategory(cate)} key={i}>
                        {cate}
                    </div>
                ))
            }
        </div>
    )
}

export default Categories