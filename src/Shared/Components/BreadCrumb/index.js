import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';
export default function BreadCrumb({ categories }) {
    let url = '';
    return (
        <div className='my-3'>
            {
                categories.map(({ title }, key) => {
                    url = `/items?search=${title}`;
                    
                    return (categories.length - 1 === key)
                        ? (<span className='breadcrumb-title' key={key}>
                            <Link className='breadcrumb-title typ-detail' key={key} to={url}> <strong>{title}</strong></Link>
                               
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