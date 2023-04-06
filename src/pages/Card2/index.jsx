export const Card2 = ()=>{
    return (
        <>
            <div className="d-flex justify-content-center mb-5 btn btn-info">
                <div>
                    <h3>Хорошая чистка зубов для вашей собаки</h3>
           <img className src='https://react-learning.ru/image-compressed/5.jpg' alt='Мелкая говяжья сушёно-вяленая жилка'></img>
           <strong>"Мелкая говяжья сушёно-вяленая жилка"</strong>
           <p>Вес 100г<br></br>
            Цена 300р<br></br>
            Количество в наличие 10 штук</p>
            
            <button type="button" className="btn btn-success mb-5 mt-5">Добавить в корзину</button>
            </div>
        </div>
        </>
    )
}