import React from 'react';
import { useLocation} from "react-router-dom";
import ListProducts from '../../Components/Product/ListProducts';
import useProductSearch from '../../Hooks/useProductSearch';
import BreadCrumb from '../../Shared/Components/BreadCrumb';

export default function ProductSearch() {
    const location = useLocation()
    const search = new URLSearchParams(location.search).get('search');
    const { loading, products } = useProductSearch({ sKeyword: search });
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