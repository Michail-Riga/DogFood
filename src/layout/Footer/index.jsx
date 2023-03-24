import './footer.css'
import React from 'react';
export const Footer = () => {


    return (
        <footer>
            <div className= "d-flex justify-content-evenly mx-1 btn btn-warning">
            <div>
            <div>DOG FOOD</div>
            <img src="https://img5.cliparto.com/pic/s/200009/5440920-english-bulldog-vector-illustration.jpg" alt=""></img>
            <p></p><p> Мы на связи:</p>
            <p>8(999)999-99-99</p>
          </div>
            
            <div>
           <h1><button type="submit" className="btn btn-light py-1 mx-5 my-1">Новости</button></h1>
           <h1><button type="submit" className="btn btn-light py-1 mx-5 my-1">Каталог</button></h1>
            <h1><button type="submit" className="btn btn-light py-1 mx-5 my-1">Отзывы</button></h1>
            <h1><button type="submit" className="btn btn-light py-1 mx-5 my-1">Акции</button></h1>           
            </div>
            <div className='d-flex align-items-center'>
            <img src="https://i.pinimg.com/236x/51/59/f5/5159f53781234aaac8ac92fbfc034e48--dog-food-bowls-dog-feeding.jpg?nii=t" alt=""></img>
            </div>
             <div>
             <h1><button type="submit" className="btn btn-light py-1 mx-5 my-1">Оплата и доставка</button></h1>
             <h1><button type="submit" className="btn btn-light py-1 my-1">Часто спрашивают</button></h1>  
             <h1><button type="submit" className="btn btn-light py-1 my-1">Обратная связь</button></h1>  
             <h1><button type="submit" className="btn btn-light py-1 my-1">Контакты</button></h1>  
             
             </div>
             </div>
             </footer>
    )
}