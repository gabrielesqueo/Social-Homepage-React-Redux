import React from 'react'
import ChatItem from './ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { newChat } from '../features/chat/chatSlice'


const ChatContainer = () => {
  const {isVisible} = useSelector((store) => store.chat);
  const {chatItems, amountTotal} = useSelector((store) => store.chat);
  const [newMsgData, setNewMsgData] = useState({name: '', msg: ''})
  const dispatch = useDispatch();

  function handleChange(event) {
    setNewMsgData(prevmsgData => {
      return {
        ...prevmsgData,
        [event.target.name]: event.target.value
      }
 
  })}
  if (!isVisible) {
    return <></>
  }

  if (amountTotal < 1) {
    return (
      <section className='column'>
        <header>
            <h2>No chats available</h2>
        </header>
        <div className='chatitem'>
        <input type='text' 
              placeholder='Insert Name' 
              className='inputchat' 
              onChange={handleChange} 
              name='name' 
              value={newMsgData.name}
            /> <br />
            <input type='text' 
              placeholder='Insert Text' 
              className='inputchat' 
              onChange={handleChange} 
              name='msg' 
              value={newMsgData.msg}
            /> <br />
            <input type='button' 
              onClick={() => dispatch(newChat({name: newMsgData.name, msg: newMsgData.msg})) } 
              className='inputchat' 
              value ='Send Message'
            />
        </div>
      </section>
    );
  }
  return (
    <section className='column'>
          {chatItems.map((item) => {return(
            <ChatItem key={item.id} {...item} />
            )}
          )}
          <div className='newmsg chatitem '>
            <h4> Write a new message</h4>
            <input type='text' 
              placeholder='Insert Name' 
              className='inputchat' 
              onChange={handleChange} 
              name='name' 
              value={newMsgData.name}
            /> <br />
            <input type='text' 
              placeholder='Insert Text' 
              className='inputchat' 
              onChange={handleChange} 
              name='msg' 
              value={newMsgData.msg}
            /> <br />
            <input type='button' 
              onClick={() => dispatch(newChat({name: newMsgData.name, msg: newMsgData.msg})) } 
              className='inputchat' 
              value ='Send Message'
            />
          </div>
    </section>
  )
}

export default ChatContainer