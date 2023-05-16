import styles from './header.css'
import { Search } from '../../components/Search'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../redux/slices/userSlice'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const favorites = useSelector(state => state.favorites)

  const handleExit = () => {
    dispatch(clearUser())

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

<NavLink to={"/cart"}>
          Корзина {!!cart.length && `(${cart.length})`}
        </NavLink>
        
        <NavLink to={"/favorites"}>
          Избранное {!!favorites.length && `(${favorites.length})`}
        </NavLink>
<div className='wanted'>
       <p>{token && <Search />}</p>
       <div className='py-5'>
        {token && <button onClick={handleExit} className="btn btn-info">Выход</button>}
        </div>
        </div>
    </header> 
    )
}
