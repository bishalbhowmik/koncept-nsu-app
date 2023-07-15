import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({filter, setFilter}) => {

    const [value,setValue] = useState(filter);

    const onChange = useAsyncDebounce(value=>{
        setFilter(value || undefined)
    },)

    return (
      <span>
        Search:{''}
        <input className='border bg-gray-300' value={filter || ''}
         onChange={(e)=>{
            setValue(e.target.value)
            onChange(e.target.value)
         } } />

      </span>
    );
};

export default GlobalFilter;