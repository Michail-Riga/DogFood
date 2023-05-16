import './index.css'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToFavorites } from "../../redux/slices/favoritesSlice"
import { addToCart } from "../../redux/slices/cartSlice"
import './index.css'

export const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAddToCart = (event) => {
    event.stopPropagation()

    dispatch(addToCart(product._id))
  }

  const handleAddToFavorites = (event) => {
    event.stopPropagation()
    dispatch(addToFavorites(product._id))
  }

    return (
    
      <>
      <div className="currentfood">
      <div onClick={() => navigate(`/products/${product._id}`)}>

        <img src={`https// api.react-learning.ru/image-compressed/${product.img}`} alt='корм...' />
        <div className='d-flex justify-content-center'>

          <p><strong>Название:</strong> <br></br>{product.name}</p>

        </div>
        <p><strong>Количество: </strong>{product.stock}</p>
        <p><strong>Цена</strong> {product.price}</p>

        <p><button type="button" onClick={(event) => handleAddToFavorites(event)}>Добавить в избранное</button></p>
        <button type="button" onClick={(event) => handleAddToCart(event)}>Добавить в корзину</button>
      </div>
      </div>  
      </>
    )
}