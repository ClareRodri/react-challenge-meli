import './index.scss';
import React from 'react';
import { useParams } from "react-router-dom";
import useProductDetail from '../../Hooks/useProductDetail';
import BreadCrumb from '../../Shared/Components/BreadCrumb';
import ProductImage from '../../Components/Product/ProductImage';
import ProductPrice from '../../Components/Product/ProductPrice';
import ProductDescription from '../../Components/Product/ProductDescription';

export default function ProductDetail() {
    const { id } = useParams();
    const { loading, product } = useProductDetail(id);
    return <>
        <BreadCrumb></BreadCrumb>
        <div className='card'>
            {
                loading
                    ? <i className='loading'>Cargando.....</i>
                    : (
                        <div className='product-detail'>
                            <div className='product-detail-image'>
                                <ProductImage
                                    src={product.item.picture}
                                    title={product.item.title}>
                                </ProductImage>
                            </div>
                            <div className='product-detail-price'>
                                <ProductPrice 
                                    title={product.item.title}
                                    price={product.item.price.amount}
                                    condition={product.item.condition}>
                                </ProductPrice>
                            </div>
                            <div className='ml-6 mb-6 mt-6 product-detail-description'>
                                <ProductDescription
                                    description={product.item.description}>
                                </ProductDescription>
                            </div>
                        </div>
                    )
            }
        </div>
    </>
}