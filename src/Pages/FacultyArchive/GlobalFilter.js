import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import './GlobalFilter.css';





const GlobalFilter = ({filter, setFilter}) => {

    const [value,setValue] = useState(filter);

    const onChange = useAsyncDebounce(value=>{
        setFilter(value || undefined)
    },)

    return (
      <span className='p-4 search-bar'>
       
        <input className="text-center" placeholder='Search Here' value={filter || ''}
         onChange={(e)=>{
            setValue(e.target.value)
            onChange(e.target.value)
         } } />

      </span>
    );
};

export default GlobalFilter;