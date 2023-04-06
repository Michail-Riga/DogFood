import { useEffect } from "react"
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
}
  
