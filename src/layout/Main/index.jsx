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
                   <h6>*Ломтики<br></br> крольчатины</h6>
                   </div>
                   
                   <div>
                   <img className src='https://react-learning.ru/image-compressed/5.jpg' alt='Мелкая говяжья сушёно-вяленая жилка'></img>
                   <h6>*Мелкая говяжья<br></br> сушёно-вяленая жилка</h6>
                   </div>
                   
                   <div>
                    <img className src='https://react-learning.ru/image-compressed/6.jpg' alt='Калтык говяжий для собак'></img>
                    <h6>*Калтык говяжий<br></br> для собак</h6>
                   </div>
                   
                   <div>
                   <img className src='https://react-learning.ru/image-compressed/2.jpg' alt='Желудки утиные сушёно-вяленые'></img>
                   <h6>*Желудки утиные<br></br> сушёно-вяленые</h6>
                   </div> 
                   
                   <div>
                    <img className src='https://react-learning.ru/image-compressed/3.jpg' alt='Куриная кругля'></img>
                    <h6>*Куриная кругля</h6>
                    </div>  
                
                </div>
              </main>
    )
}