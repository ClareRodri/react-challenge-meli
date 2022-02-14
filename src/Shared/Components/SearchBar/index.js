import './index.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [sKeyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = ev => {
        ev.preventDefault();
        navigate(`/items/${sKeyword}`);
    }
    const handleChangeInput = ev => { setKeyword(ev.target.value); }
    
    const handleClicButton = ev => { 
        ev.preventDefault();
        const productSearch = document.getElementById("search-input").value;
        navigate(`/items?search=${productSearch}`);
     }
    
    return <>
        <div className='search-container'>
            <Link to="/" className='search-logo-meli'>Mercado Libre Colombia - Donde comprar y vender de todo</Link>
            <form className='search-form' onSubmit={handleSubmit}>
                <input id="search-input"
                    className='search-input'
                    placeholder='Nunca dejes de buscar'
                    type='text'
                    onClick={handleChangeInput}>
                </input>
                <button
                    aria-label={'Búsqueda de productos'}
                    className='search-button'
                    onClick={handleClicButton}></button>
            </form>
        </div>
        
    </>
}