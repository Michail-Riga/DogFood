import { useDispatch } from "react-redux"
import { decrementCart, deleteFromCart, incrementCart } from "../../redux/slices/cartSlice"

export const ProductInCart = ({ product }) => {

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementCart(product._id))
  }
  const handleDecrement = () => {
    dispatch(decrementCart(product._id))
  }
  const handleDelete = () => {
    dispatch(deleteFromCart(product._id))
  }

  return (
    <div>
      <img src="" alt="текст вместо картинки" />
      <span>Название {product.name}</span>
       <span>Количество {product.stock}</span> 
      <button type="button" onClick={() => handleIncrement()}>+</button>
      <span>{1}</span>
      <button type="button" onClick={() => handleDecrement()}>-</button>
      <button type="button" onClick={() => handleDelete()}>Удалить</button>

    </div>
  )
}













/*import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../redux/slices/cartSlice"

export const ProductInCart = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (event) => {
    event.stopPropagation()

    dispatch(addToCart(product._id))

  }

  return (
    <div onClick={() => navigate(`/products/${product._id}`)}>
      <img src="" alt="текст вместо картинки" />
      <span>Цена: {product.price}</span>
      <span>Название {product.name}</span>
      <span>Количество {product.stock}</span>
      <button type="button" onClick={(event) => handleAddToCart(event)}>В корзину</button>
    </div>
  )
}*/
