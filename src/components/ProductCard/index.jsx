import './index.css'

export const ProductCard = ({ product }) => {


    return (
      <div className="currentfood">
        <img src={`https// api.react-learning.ru/image-compressed/${product.img}`} alt='корм...'/>
        <div className='d-flex justify-content-center'>
      
       <p><strong>Название:</strong> <br></br>{product.name}</p>
        
        </div>
        <p><strong>Количество: </strong>{product.stock}</p>
        <p><strong>Цена</strong> {product.price}</p>
        <p><button><a href ='/currentproduct' type="button" className="btn btn-success">Посмотреть корм</a></button></p>
        <button><a href ='/cart' type="button" className="btn btn-success"> В корзину</a></button>   
      </div>
    )
  }
  