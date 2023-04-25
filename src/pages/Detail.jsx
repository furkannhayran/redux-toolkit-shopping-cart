import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProducts } from '../redux/ProductSlice';
import DetailNavbar from '../componenets/detail/DetailNavbar';
import Loading from '../componenets/Loading';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProducts(id))
    }, [dispatch, id])
    console.log(productDetail)
    return (
        <div>
            {
                productDetailStatus === "LOADING" ? <Loading /> : <DetailNavbar productDetail={productDetail} />
            }
        </div>
    )
}

export default Detail