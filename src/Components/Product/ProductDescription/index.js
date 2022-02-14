import './index.scss';
import React from 'react';

export default function ProductDescription(params) {
    const { description } = params;
    return <div className='product-description'>
        <label className='product-description--title'>Descripción del producto</label>
        <p className='mt-6 product-description--description'>
            {description}
        </p>
    </div>
}