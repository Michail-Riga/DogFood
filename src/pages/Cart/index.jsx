import './cart.css'
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate()
  
    return (
      <>
      <div className="bank d-flex justify-content-center mt-1">
        <strong>Ваша корзина</strong>
      </div>
      <div className='transition'>
      <p>Корзина пуста</p>
      </div>
      <p>Перейдите в <button onClick={() => navigate("/catalog")}>Каталог</button></p>
      </>
    )
}