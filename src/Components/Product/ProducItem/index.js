import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default function ProductItem({ item }) {
    return <>
        <div className='py-3 product-item-card'>
            <div className='product-item-card--image'>
                <Link to={`/items/${item.id}`}>
                    <img className='product-item-card--image-img'
                        src={item.picture}
                        alt={item.title}
                        width="180"
                        height="180"></img>
                </Link>
            </div>
            <div className='product-item-card--content'>
                <p className='mb-6'>
                    <NumberFormat className="product-item-card--content-price"
                        value={item.price.amount}
                        displayType={'text'}
                        thousandSeparator={true} prefix={'$'} />
                    <span className='product-item-card--content-place'>{item.city_address}</span>
                </p>
                <Link className='mb-6 product-item-card--content-title' to={`/items/${item.id}`}>
                    <span>{item.title}</span>
                </Link>
            </div>
        </div>
    </>
}