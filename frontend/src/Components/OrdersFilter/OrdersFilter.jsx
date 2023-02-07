import React, { useState } from 'react'
import { BsFilterRight } from 'react-icons/bs'

import './OrdersFilter.styles.scss'

const OrdersFilter = () => {
  const [filterPanelEnabled, setFilterPanelEnabled] = useState(false)
  return (
    <div className='filter-container'>
        <button className='filter-button' onClick={() => setFilterPanelEnabled(!filterPanelEnabled)}><BsFilterRight /> Filter</button>
        {filterPanelEnabled && (
            <div className='filter-panel'>Coming Soon!!!</div>
        )}
    </div>
  )
}

export default OrdersFilter