import React from 'react';
import './index.scss';

export default function ProductImage(params) {
    const { src, title } = params;
    return <div className='product-image'>
        <img className='product-image--img'
            src={src}
            alt={title}
        ></img>
    </div>
}