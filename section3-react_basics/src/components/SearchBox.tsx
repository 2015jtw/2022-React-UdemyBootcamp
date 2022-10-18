import React from 'react';
import '../SearchBox.css'
import { ChangeEvent } from 'react';

const name: string = '1234567';

type SearchBoxProperties = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProperties) => {

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