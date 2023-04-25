import React from 'react'
import './header.css'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cleanUser } from "../../redux/slices/userSlice";

export const Header = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleExit = () => {
        dispatch(cleanUser())
        return navigate('/signin')
    }    

    return (
         
        <header> 
        <div className="position-relative">        
    <img src="https://img5.cliparto.com/pic/s/200009/5440920-english-bulldog-vector-illustration.jpg"  alt=""></img>
    </div>
    <div>
        <p>Элитный корм для собак</p>
      <h5>DOG FOOD</h5>
      </div>
      <div className='position-relative'>
      <p><a href='/signup'>Регистрация</a></p>
      <p><a href='/signin'>Авторизация</a></p>
      <a href='/home'>Главная</a> 
        </div>
        <div>               
        <button onClick={handleExit}>Выход</button>
        </div>
    </header> 
    )
}
