import { useState, useEffect } from 'react';
import getProduct from '../Services/Product/GetProduct';

export default function useProductSearch({ sKeyword } = { sKeyword: '' }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct({ sKeyword }).then(arrayProducts => {
            setProducts(arrayProducts);
            setLoading(false);
        });
    }, [sKeyword]);

    return { loading, products };
}