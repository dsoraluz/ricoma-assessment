import React from 'react';
import glasses from '../../assets/glasses.jpg';
import chair from '../../assets/chair.jpg';
import airpods from '../../assets/airpods.jpg';
import plant from '../../assets/plant.jpg';
import whiteCheck from '../../assets/whiteCheck.svg';

export default class Shopping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorSelected: 'color-1'
    };
  }

  addToCart() {

  }

  render() {
    return (
      <ul className='grid space-around'>
       <li>
        <div className='shopping-item'>
          <img style={{ width: 345, height: 'auto' }} src={glasses} />
          <div className='shopping-item-text'>
            <h3> Lorem ipsum 1 </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='shopping-item-color'>
            <span className='color-1 selected'><img src={whiteCheck} /></span>
            <span className='color-2'><img src={whiteCheck} /></span>
            <span className='color-3'><img src={whiteCheck} /></span>
          </div>
          <div className='shopping-item-bottom'>
            <button className='btn'>
              Add to cart
            </button>
          </div>
        </div>
       </li>
       <li>
        <div className='shopping-item'>
          <img style={{ width: 345, height: 'auto' }} src={chair} />
          <div className='shopping-item-text'>
            <h3> Lorem ipsum 2 </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='shopping-item-color'>
            <span className='color-1'><img src={whiteCheck} /></span>
            <span className='color-2'><img src={whiteCheck} /></span>
            <span className='color-3'><img src={whiteCheck} /></span>
          </div>
          <div className='shopping-item-bottom'>
            <button className='btn'>
              Add to cart
            </button>
          </div>
        </div>
       </li>
       <li>
        <div className='shopping-item'>
          <img style={{ width: 345, height: 'auto' }} src={airpods} />
          <div className='shopping-item-text'>
            <h3> Lorem ipsum 3 </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='shopping-item-color'>
            <span className='color-1'><img src={whiteCheck} /></span>
            <span className='color-2'><img src={whiteCheck} /></span>
            <span className='color-3'><img src={whiteCheck} /></span>
          </div>
          <div className='shopping-item-bottom'>
            <button className='btn'>
              Add to cart
            </button>
          </div>
        </div>
       </li>
       <li>
        <div className='shopping-item'>
          <img style={{ width: 345, height: 'auto' }} src={plant} />
          <div className='shopping-item-text'>
            <h3> Lorem ipsum 4 </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='shopping-item-color'>
            <span className='color-1'><img src={whiteCheck} /></span>
            <span className='color-2'><img src={whiteCheck} /></span>
            <span className='color-3'><img src={whiteCheck} /></span>
          </div>
          <div className='shopping-item-bottom'>
            <button className='btn'>
              Add to cart
            </button>
          </div>
        </div>
       </li>
      </ul>
    )
  }
}
