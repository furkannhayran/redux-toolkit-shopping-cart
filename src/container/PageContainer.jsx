import React from 'react'
import '../css/pageContainer.scss'
function PageContainer({children}) {
  return (
    <div className='page-container'>{children}</div>
  )
}

export default PageContainer