import './favorites.css'
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
  const navigate = useNavigate()

    return (
      <>
      <div className="preference d-flex justify-content-center mt-1">
        <strong>Ваши избранные товары</strong>
      </div>
      <div className='transition'>
          <p>У Вас нет избранных товаров</p>
        </div>
        <p>Перейдите в <button onClick={() => navigate("/catalog")}>Каталог</button></p>
        </>
    )
}