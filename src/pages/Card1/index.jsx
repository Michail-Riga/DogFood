export const Card1 = ()=>{
    return (
        <>        
            <div className="d-flex justify-content-center pt-3 mb-5 btn btn-info">
                <div>
                    <h3>Хорошее угощение для вашей собаки</h3>
           <img className src='https://react-learning.ru/image-compressed/4.jpg' alt="Ломтики крольчатины"></img>           
           <strong>"Ломтики крольчатины"</strong>
           <p>Вес 100г<br></br>
            Цена 500р<br></br>
            Количество в наличие 10 штук</p>

            <button type="button" className="btn btn-success mb-5 mt-5">Добавить в корзину</button>
            </div>
        </div>
        </>
    ) 
}