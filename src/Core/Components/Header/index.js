
import './index.scss';
import React from 'react';
import SearchBar from '../../../Shared/Components/SearchBar';

export default function Header() {
    return <>
        <div className='container'>
            <SearchBar></SearchBar>
        </div>
    </>
}