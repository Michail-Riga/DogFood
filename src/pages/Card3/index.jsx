export const Card3 = ()=>{
    return (
        <>
            <div className="d-flex justify-content-center mb-5 btn btn-info">
                <div>
                    <h3>Отличный продукт для вашего питомца</h3>
           <img className src='https://react-learning.ru/image-compressed/6.jpg' alt='Калтык говяжий для собак'></img>
           <strong>"Калтык говяжий для собак"</strong>
           <p>Вес 100г<br></br>
            Цена 290р<br></br>
            Количество в наличие 10 штук</p>
            
            <button type="button" className="btn btn-success mb-5 mt-5">Добавить в корзину</button>
            </div>
        </div>
        </>
    )
}