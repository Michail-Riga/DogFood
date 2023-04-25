import { useCallback, useEffect} from "react";
import './main.css'

export const Main = () => {
    
   const fetchData = useCallback (async () =>{
    
    // eslint-disable-next-line no-use-before-define
    const responce = await responce.json();
    }, [])

    const TOKEN =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI5MGEiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ5LCJleHAiOjE3MTAzMzg0NDl9.a422X9TgA5kapDk2bPUxOGd9mYgMlW3am1R9RBKpXxU'
    useEffect(() => {
       const fetchDataProducts = async () => {
        const res = await fetch('https://api.react-learning.ru/products', {
          headers: {
            Authorization: `Bearer ${TOKEN}`  
          }
        })

        const responсe = await res.json();
          console.log(responсe);

        if (res.ok) {
          const responсe = await res.json();
          console.log(responсe);
        }
    
      // eslint-disable-next-line no-const-assign
      responсe = {message:'Нет токена'} 
   }
            fetchDataProducts()
    }, [fetchData])   

    return (
        <main>
          
          <div className="d-flex justify-content-center"><p>ВЫ НЕ ВЫБРАЛИ ПОКА НИ ОДИН ТОВАР</p></div>
          
          <div className="d-flex justify-content-center mb-5">
           <button><a href ="/generalcard" type="button" className="btn btn-success">Выберите корм</a></button>
           </div>
                   
                   <div className="d-flex justify-content-center">
                        <p><strong>Образцы товара</strong></p>
                     </div>
                    
                    <div className='d-flex justify-content-evenly'>
                      
                      <div>
                   <img className src='https://react-learning.ru/image-compressed/4.jpg' alt="Ломтики крольчатины"></img>
                   <p><strong>*Ломтики<br></br> крольчатины</strong></p>
                   </div>
                   
                   <div>
                   <img className src='https://react-learning.ru/image-compressed/5.jpg' alt='Мелкая говяжья сушёно-вяленая жилка'></img>
                   <p><strong>*Мелкая говяжья<br></br> сушёно-вяленая жилка</strong></p>
                   </div>
                   
                   <div>
                    <img className src='https://react-learning.ru/image-compressed/6.jpg' alt='Калтык говяжий для собак'></img>
                    <p><strong>*Калтык говяжий<br></br> для собак</strong></p>
                   </div>
                   
                   <div>
                   <img className src='https://react-learning.ru/image-compressed/2.jpg' alt='Желудки утиные сушёно-вяленые'></img>
                   <p><strong>*Желудки утиные<br></br> сушёно-вяленые</strong></p>
                   </div> 
                   
                   <div>
                    <img className src='https://react-learning.ru/image-compressed/3.jpg' alt='Куриная кругля'></img>
                    <p><strong>*Куриная кругля</strong></p>
                    </div>  
                
                </div>
              </main>
    )
}