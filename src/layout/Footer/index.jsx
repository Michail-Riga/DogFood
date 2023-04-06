import './footer.css';
import React from 'react';
export const Footer = () => {

    return (
      
        <footer>

            <div className= "d-flex justify-content-evenly mx-1 btn btn-warning">
            <div>
            
            <div>DOG FOOD</div>
            <img src="https://img5.cliparto.com/pic/s/200009/5440920-english-bulldog-vector-illustration.jpg" alt=""></img>
            <p> Мы на связи:</p>
            <p>8(999)999-99-99</p>
          </div>
            
            <div className='py-5'>
           <p><a href='/news'>Новости</a></p>
           <p><a href='/catalog'>Каталог</a></p>
           <p><a href='/reviews'>Отзывы</a></p>
           <p><a href='/stock'>Акции</a></p>
            </div>
            
            <div className='d-flex align-items-center'>
            <img src="https://i.pinimg.com/236x/51/59/f5/5159f53781234aaac8ac92fbfc034e48--dog-food-bowls-dog-feeding.jpg?nii=t" alt=""></img>
            </div>
             
             <div className='py-5'>
             <p><a href='/delivery'>Оплата и доставка</a></p>
             <p><a href='/questions'>Полезные советы</a></p> 
             <p><a href='/feedback'>Обратная связь</a></p>  
             <p><a href='/contacts'>Контакты</a></p>  
             
             </div>
             </div>
         </footer>           
    )
}
