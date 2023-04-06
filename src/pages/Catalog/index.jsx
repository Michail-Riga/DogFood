import React, { useEffect, useState } from "react";
import { productsFetch } from "../../api/products";

export const Catalog = ()=>{    
    const [data, setData] = useState({total: 0, products: []})

    useEffect(() =>{
        const fetchData = async ()=>{
            const res = await productsFetch()
            if (res.ok){
                const responce = await res.json()
                setData(responce)
            }
        }

        fetchData()
    }, [])
    
    return (
        <div className="d-flex justify-content-center btn btn-info">
            <div>
                <h1>-СПИСОК ТОВАРА-</h1>
                
                <h2>Всего продуктов:{data.total}</h2>
                
                    {data.products.map(product => {
                        return <p key={product._id}>{product.name}</p>;
                    })}
                    <p><strong>*НЕ ЗАБУДЬТЕ КУПИТЬ ЭЛИТНЫЙ КОРМ ДЛЯ СВОЕЙ СОБАКИ.*</strong></p>
                </div>
            </div>
        
    )
}

