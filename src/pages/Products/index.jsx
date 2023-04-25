import { productsFetch } from "../../api/products"
import { useQuery } from "react-query"
import { useAuth } from "../../hooks/useAuth"
import { useSelector } from "react-redux"

export const Products = () => {
  const { token } = useAuth()   
  const search = useSelector(state => state.filter.search) 

  const { isLoading, isError, error} = useQuery({             
    queryKey: ['getAllProducts', search],                                
    queryFn: async () => {
      const res = await productsFetch(token, search)
      const responce = await res.json()

      return responce;
    }
  })

  if (isLoading) return <p>Подождите, идет загрузка.</p>

  if (isError) return <p>Произошла ошибка: {error}</p>

  return (
    <>
    <div>Вы вошли на главную страницу</div>
    <div>
  </div>
    </>
  )
}













/*import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TOKEN } from "../../utils/token"

export const Products = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (!token) navigate('/signin')
  }, [navigate])

  return (
    <div>Products</div>
  )
}*/
  
