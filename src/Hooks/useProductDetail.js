import { useState, useEffect } from 'react';
import getProductById from '../Services/GetProductById';

export default function useProductDetail(id) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id).then(productDetail => {
            setProduct(productDetail);
            setLoading(false);
        });
    }, [id]);

    return { loading, product };
}