import React from 'react';
import '../SearchBox.css'

const SearchBox = ({className, placeholder, onChangeHandler}) => {

    return (
        <div>
            <input
                className={`search-box ${className}`}
                onChange={onChangeHandler}
                placeholder={placeholder}
                type='search'
            />
        </div>
    )
}


export default SearchBox;