import React from 'react'

const ColumnFilter = ({ column }) => {
    const {filterValue, setFilter, preFilteredRows } = column
    const count = preFilteredRows.length;
  return (
    <div>
    <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder={`Filter ${count} products in stock`} />
    </div>
  )
}

export default ColumnFilter