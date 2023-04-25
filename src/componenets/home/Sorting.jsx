import React from 'react'
import '../../css/sortContainer.scss'
function Sorting({setSort}) {
  return (
    <div className='Sorting-container'>
        <select onChange={e => setSort(e.target.value)} className='sorting-select' name="" id="">
            <option disabled={true} value="">Seçiniz</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting