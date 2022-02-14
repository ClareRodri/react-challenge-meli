import React from 'react';
import './index.scss';
import NumberFormat from 'react-number-format';

export default function ProductPrice(params) {
    const { title, price, condition } = params;
    const conditionSpanish = condition == 'new' ? 'Nuevo' : 'Usado';
    return <>
        <div className='product-price'>
            <span className='mb-3 typ-detail-condition product-price--condition'>{conditionSpanish}</span>
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