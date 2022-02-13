import './index.scss';
import React from 'react';

export default function SearchBar() {
    return <>
        <a className='search-logo-meli'>Mercado Libre Colombia - Donde comprar y vender de todo</a>
        <form className='search-form'>
            <input className='search-input'
                placeholder='Busca productos y más...'
                type='text'>
            </input>
            <button className='search-button'>
                🔎
            </button>
        </form>
    </>
}