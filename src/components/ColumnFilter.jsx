import React from 'react'

const ColumnFilter = ({ column }) => {
    const {filterValue, setFilter, preFilteredRows } = column
    const count = preFilteredRows.length;
  return (
    <div>
        Filter:{' '}
    <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder={`Search ${count} products in stock`} />
    </div>
  )
}

export default ColumnFilter