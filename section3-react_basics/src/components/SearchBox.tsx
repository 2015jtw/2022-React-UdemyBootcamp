import React from 'react';
import '../SearchBox.css'

const name: string = '1234567';

interface ISearchBoxProperties extends IChangeHandlerProps{
    classname: string;
    placeholder?: string
}

interface IChangeHandlerProps{
    onChangeHandler: (a: string) => void
}

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