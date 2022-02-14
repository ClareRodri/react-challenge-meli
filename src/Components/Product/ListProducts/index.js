import './index.scss';
import React from 'react';
import ProductItem from '../ProducItem';

export default function ListProducts({ products }) {
    return <div className='product-list'>
        {
            products.items.map((item) => (
                    <>
                    <ProductItem item={item}></ProductItem>
                    </>
                )
            )
        }
    </div>
}