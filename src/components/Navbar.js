import React from 'react'
import { useSelector } from 'react-redux';
import Notification from '../static/images/notification.png'
import Logo from '../static/images/logo.png'
const Navbar = () => {
  const amount = useSelector((store)=> 
        store.chat.amount
    );

  return (
    <div className='navbar'>
        <div className='navbar--left'>
          <img src={Logo} alt='notification number'className='logoimg'/>
        </div>
        <div className='navbar--right'>
            <img src={Notification} alt='notification number'/>
            <h3 className='notificationNumber'>{amount}</h3>
        </div>
        
    </div>
    
  )
}

export default Navbar