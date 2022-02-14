import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const CATEGORIAS = [
    { title: 'Electrónica Audio y Video', weigth: 10 },
    { title: 'iPod', weigth: 22 },
    { title: 'Reproductores', weigth: 1 },
    { title: 'iPod touch', weigth: 4 },
    { title: '32GB', weigth: 5 },
]

export default function BreadCrumb() {
    return (
        <div className='my-3'>
            {CATEGORIAS.map(({ title }, key) =>
            {
                const url = `/search/${title}`;
                return (CATEGORIAS.length - 1 === key)
                    ? (<span className='breadcrumb-title' key={key}>
                            <strong>{title}</strong>
                        </span>)
                    : (<span>
                        <Link className='breadcrumb-title typ-detail' key={key} to={url}> {title}</Link>
                        <span className='breadcrumb-title typ-detail mx-2'> {'>'} </span>
                        </span>)
               }
            )}
        </div>
    );
}