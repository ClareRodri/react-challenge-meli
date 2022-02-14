import React from 'react';
import './index.scss';
import NumberFormat from 'react-number-format';

export default function ProductPrice(params) {
    const { title, price, condition, sold_quantity } = params;
    const conditionSpanish = condition == 'new' ? 'Nuevo' : 'Usado';
    const soldQuantity = sold_quantity != '' ? sold_quantity : 0;
    return <>
        <div className='product-price'>
            <span className='mb-3 typ-detail-condition product-price--condition'>{conditionSpanish} - {soldQuantity} vendidos</span>
            <span className='mb-6 product-price--title'>{title}</span>
            <span className='mb-6 product-price--price'>
                <NumberFormat className="product-item-card--content-price"
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'} />
            </span>
            <button className='mr-6 btn btn-shopping' onClick={()=> {}}>Comprar</button>
        </div>
    </>
}