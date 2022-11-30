import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import image from './image.jpg'


function App() {

const [text, setAddText] = useState(false)
const [newButton, setChangeButton] = useState('Добавить в корзину')
const [infoProduct, setInfoproduct] = useState(false)



const handleText = () => {
  setAddText(true)
  setChangeButton('Уже в корзине')

}

const handleDelete = () => {
setAddText(false)
setChangeButton('Добавить в корзину')
}

const hadleGetInfo = () => {
  setInfoproduct(true)
}


  return (

    <div className="wrapper">
      <img className= 'img-sneacers' src={image} alt="" />



      <div className="info-sneacer">
          <div className="firma-price">
            <div className="firma">Nike Sneakers</div>
            <div className="price">$120</div>
          </div>
            <button onClick={hadleGetInfo} className= 'details-btn'>Детали</button>
           {infoProduct ? <div className='info-sneakers'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure <button onClick={() => setInfoproduct(false) } className='info-btn'>x</button> </div> : null}
      </div>
      <hr />
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure </div>
            <button className='AddToBasket'  onClick={handleText}> {newButton}</button>
      
             
              {text ? <div onClick={handleDelete} className='addedclick'>Удалить из корзины</div> : null}
    </div>
  );
}

export default App;
