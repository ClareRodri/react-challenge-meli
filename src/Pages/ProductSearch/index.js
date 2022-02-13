import React from 'react';
import {useParams } from "react-router-dom";

import ListProducts from '../../Components/Product/ListProducts';
import useProductSearch from '../../Hooks/useProductSearch';
import BreadCrumb from '../../Shared/Components/BreadCrumb';

export default function ProductSearch() {
    const { sKeyword } = useParams();
    const { loading, products } = useProductSearch({ sKeyword });
    return <>
        <BreadCrumb></BreadCrumb>
        <div className='card'>
            {
                loading
                    ? <i className='loading'>Cargando.....</i>
                    : <ListProducts products={products}></ListProducts>
            }
        </div>
    </>
}