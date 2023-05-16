import { useDispatch } from "react-redux"
import { decrementFavorites, deleteFromFavorites, incrementFavorites } from "../../redux/slices/favoritesSlice"

export const ProductInFavorites = ({ product }) => {

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementFavorites(product._id))
  }
  const handleDecrement = () => {
    dispatch(decrementFavorites(product._id))
  }
  const handleDelete = () => {
    dispatch(deleteFromFavorites(product._id))
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