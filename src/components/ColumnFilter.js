import { fi } from 'date-fns/locale'
import React from 'react'

export const ColumnFilter =({column })=>{
    const {filterValue,setFilter}=column

    return (
        <span>
            Search:{' '}
            <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
    )
}