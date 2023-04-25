import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, getCategoryProducts } from '../../redux/ProductSlice'
import ProductItem from './ProductItem'
import Loading from '../Loading'
import ReactPaginate from 'react-paginate'
function Product({ category, sort }) {

  const displach = useDispatch()
  const { product, productStatus } = useSelector(state => state.products)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }
  useEffect(() => {
    if (category) {
      displach(getCategoryProducts(category))
    } else {
      displach(getProduct())
    }

  }, [displach, category])
  return (
    <div>
      {
        productStatus === "LOADING" ? <Loading /> :
          <>
            <div style={{
              width: "170vh",
              display: "flex",
              flex: "wrap",
              overflow: "auto",
              height: "1000px"
            }}>
              {
                currentItems?.sort((a, b) =>
                sort === 'inc' ? a.price - b.price : sort === 'dec' ? b.price - a.price : null 
                ).map((product, i) => (
              <ProductItem key={i} product={product} />
              ))
              }
              <ReactPaginate
                className='pagginate'
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
              />
            </div>
          </>

      }
    </div>
  )
}

export default Product