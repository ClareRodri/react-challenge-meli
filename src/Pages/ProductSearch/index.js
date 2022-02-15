import React from 'react';
import { useLocation} from "react-router-dom";
import ListProducts from '../../Components/Product/ListProducts';
import useProductSearch from '../../Hooks/useProductSearch';
import BreadCrumb from '../../Shared/Components/BreadCrumb';
import Spinner from '../../Shared/Components/Spinner';

export default function ProductSearch() {
    const location = useLocation()
    const search = new URLSearchParams(location.search).get('search');
    const { loading, products } = useProductSearch({ sKeyword: search });
    const { categories } = products;
    return <>
        {categories !== undefined ? (<BreadCrumb categories={categories}></BreadCrumb>) : <div className='py-3'></div>}
        <div className='card'>
            {
                loading
                    ? <Spinner></Spinner>
                    : <ListProducts products={products}></ListProducts>
            }
        </div>
    </>
}