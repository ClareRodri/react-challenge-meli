import './index.scss';
import React from 'react';
import ProductItem from '../ProducItem';

export default function ListProducts({ products }) {

    return <div className='product-list'>
        {   products.items.length > 0
            ? products.items.map((item) => {
                
                    return <ProductItem key={item.id}
                        item={item}>
                    </ProductItem>
                }  
            )
            : <i className='empty'>No se encontraron resultados</i>
        }
    </div>
}