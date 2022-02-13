import './index.scss';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [sKeyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = ev => {
        ev.preventDefault();
        navigate(`/search/${sKeyword}`);
    }
    const handleChangeInput = ev => { setKeyword(ev.target.value); }
    
    const handleClicButton = ev => { 
        ev.preventDefault();
        const productSearch = document.getElementById("search-input").value;
        navigate(`/search/${productSearch}`);
     }
    
    return <>
        <div className='search-container'>
            <a className='search-logo-meli'>Mercado Libre Colombia - Donde comprar y vender de todo</a>
            <form className='search-form' onSubmit={handleSubmit}>
                <input id="search-input"
                    className='search-input'
                    placeholder='Busca productos y más...'
                    type='text'
                    onClick={handleChangeInput}>
                </input>
                <button className='search-button' onClick={handleClicButton}></button>
            </form>
        </div>
        
    </>
}