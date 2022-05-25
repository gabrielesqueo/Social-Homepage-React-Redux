import React from 'react'
import { useSelector } from 'react-redux';
import Notification from '../static/images/notification.png'

const Navbar = () => {
  const amount = useSelector((store)=> 
        store.chat.amount
    );

  return (
    <div className='navbar'>
        <div className='navbar--left'>
            <p>navbar left</p>
        </div>
        <div className='navbar--right'>
            <img src={Notification} alt='notification number'/>
            <h3 className='notificationNumber'>{amount}</h3>
        </div>
        
    </div>
    
  )
}

export default Navbar