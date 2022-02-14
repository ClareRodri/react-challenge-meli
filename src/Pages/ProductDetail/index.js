import './index.scss';
import React from 'react';
import { useParams } from "react-router-dom";
import useProductDetail from '../../Hooks/useProductDetail';
import BreadCrumb from '../../Shared/Components/BreadCrumb';
import Spinner from '../../Shared/Components/Spinner';
import ProductImage from '../../Components/Product/ProductImage';
import ProductPrice from '../../Components/Product/ProductPrice';
import ProductDescription from '../../Components/Product/ProductDescription';

export default function ProductDetail() {
    const { id } = useParams();
    const { loading, product } = useProductDetail(id);
    const { item } = product;
    return <>
        { item!=undefined ? (<BreadCrumb categories={[item.category]}></BreadCrumb>) : ''}
        <div className='card'>
            {
                loading
                    ? <Spinner></Spinner>
                    : (
                        <div className='product-detail'>
                            <div className='product-detail-image'>
                                <ProductImage
                                    src={item.picture}
                                    title={item.title}>
                                </ProductImage>
                            </div>
                            <div className='product-detail-price'>
                                <ProductPrice 
                                    title={item.title}
                                    price={item.price.amount}
                                    condition={item.condition}>
                                </ProductPrice>
                            </div>
                            <div className='ml-6 mb-6 mt-6 product-detail-description'>
                                <ProductDescription
                                    description={item.description}>
                                </ProductDescription>
                            </div>
                        </div>
                    )
            }
        </div>
    </>
}