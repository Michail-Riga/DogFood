import React from 'react'
import './header.css'
import { NavLink, useNavigate } from "react-router-dom"
import { TOKEN } from '../../utils/token'
import styles from './header.css'

export const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem(TOKEN)

    const handleExit = () => {
        localStorage.removeItem(TOKEN)
        return navigate('/signin')
    }    

    return (
         
        <header> 
        <div className="position-relative">        
    <img src="https://img5.cliparto.com/pic/s/200009/5440920-english-bulldog-vector-illustration.jpg"  alt=""></img>
    </div>
    <div className={styles.logo}>
        <p>Элитный корм для собак</p>
      <p><strong>DOG FOOD</strong></p>
      </div>
      
      <nav>
      <div className='position-relative'>
      <p><NavLink to={'/signup'}>Регистрация</NavLink></p>
      <p><NavLink to={'/signin'}>Авторизация</NavLink></p>
      <p><NavLink to={'/home'}>Главная</NavLink></p>
      <p><NavLink to={'/user'}>Пользователь</NavLink> </p>
        </div>
        </nav>
      
        <button><a href='/cart' className="btn btn-info">Корзина</a></button>
        <button><a href='/favorites' className="btn btn-info">Избранное</a></button>                      
        {token && <button onClick={handleExit} className="btn btn-info">Выход</button>}
    </header> 
    )
}
