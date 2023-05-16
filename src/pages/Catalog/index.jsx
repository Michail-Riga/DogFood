import { useEffect, useState } from "react"
import { TOKEN } from "../../utils/token";
import { ProductCard } from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../api/products";
import './catalog.css'
import { toast } from 'react-toastify';

toast.success('Результаты получены')
export const Catalog = () => {
  const [data, setData] = useState({ total: 0, products: [] })
  const navigate = useNavigate()
  const token = localStorage.getItem(TOKEN)

  useEffect(() => {
    if (!token) return navigate('/signin')
  }, [navigate, token])
  
 useEffect(() => {
    const fetchData = async () => {
      const responce = await fetchProducts(token)
      const res = await responce.json()
    
    return setData(res)
    }
    fetchData();
  }, [token]);

    return (
      
        <div className="btn btn-info">
          
            <div>
                <h1>-СПИСОК ТОВАРА-</h1>
                <h2>Всего продуктов:{data.total}</h2>
                
                <div className="products_wrapper py-3">
                {data.products.map(product => {
          return <ProductCard key={product._id} product={product} />
        })}
                </div>
                <p><strong>*НЕ ЗАБУДЬТЕ КУПИТЬ ЭЛИТНЫЙ КОРМ ДЛЯ СВОЕЙ СОБАКИ.*</strong></p>
                </div>
                </div>      
    )
 }

  