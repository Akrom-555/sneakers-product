
import React, { useState } from 'react';

const Product = (props) => {

  const [text, setText] = useState(false)
  const [basket, setBasket] = useState('Добавить в корзину')
  const [textBasket, setTextBasket] = useState(false)

  const handleAddinBasket = () => {
    setBasket('уже в корзине')
    setTextBasket(true)
  }

  const deleteInfotext = () => {
    setTextBasket(false)
    setBasket('добавить в корзину')
  }

  const handleOff = () => {
    setText(false)
  }

  const hadleText = () => {
    let elem;
    if (!text) {
      setText(
        elem = <div className="info-sneakers"><p>самые лучшие кроссы в мире</p><button onClick={handleOff} className='xxx'>x</button></div>
      )
    }
  }


  return (
    <div className='wrapper'>

      <div className="image"><img width={260} height={180} src={props.image} alt="" /></div>
      <div className="info">
        <div className="firma-price">
          <div className="firma">{props.name}</div>
          <div className="price">{props.price}</div>
        </div>
        <div className="details"><button onClick={hadleText}>детали</button></div>
        {text}
      </div>
      <hr />
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nihil.</div>
      <button onClick={handleAddinBasket} className='basket'>{basket}</button>
      {textBasket ? <div onClick={deleteInfotext} className="addText">удалить из корзины</div> : null}
    </div>
  );
};

export default Product;