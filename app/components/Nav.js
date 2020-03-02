import React from 'react';
import cartIcon from '../../assets/cart-icon.svg';

export default function Nav() {
  return (
    <ul className='flex-center navbar'>
      <li>
        <button className='btn-clear nav-link-selected'>
          Lorem Ipsum
        </button>
      </li>
      <li>
        <button className='btn-clear nav-link'>
          Lorem
        </button>
      </li>
      <li>
        <button className='btn-clear nav-link'>
          Ipsum
        </button>
      </li>
      <li>
        <button className='btn-clear nav-link'>
          Excepteur
        </button>
      </li>
      <li>
        <button className='btn-clear nav-link'>
          Consectetur
        </button>
      </li>
      <li>
        <button className='btn-clear nav-link'>
          Veniam
        </button>
      </li>
      <li>
        <img className='cart-icon' src={cartIcon}  />
      </li>
    </ul>
  )
}
