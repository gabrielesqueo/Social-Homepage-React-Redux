import React from 'react'
import notification from '../static/images/notification.png'
import { useDispatch } from 'react-redux'
import { setSeen, setToSee } from '../features/chat/chatSlice'

const ChatItem = ({id, name, isRead, lastmsg}) => {
  const dispatch = useDispatch();
  
  return (
    
    <div className='chatitem' onClick={()=>!isRead ? dispatch(setSeen({id})) : dispatch(setToSee({id}))}>
      <h4>{name}</h4>
      <div className='chatmsg'>
        <p> {lastmsg}</p>
        {!isRead &&<img src={notification}  alt="notification" className='chatImg'></img>}
      </div>
    </div>
  )
}
export default ChatItem