import React from 'react'
import ChatItem from './ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { newChat } from '../features/chat/chatSlice'


const ChatContainer = () => {

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

  if (amountTotal < 1) {
    return (
      <section className='column'>
        <header>
            <h2>No chats available</h2>
        </header>
        <div className='chatitem'>
          <input type='text' placeholder='Inserisci nome' className='inputchat'/> <br /> <br />
          <input type='text' placeholder='Inserisci Messaggio' className='inputchat'/>
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
            <h4> Scrivi un nuovo messaggio</h4>
            <input type='text' 
              placeholder='Inserisci nome' 
              className='inputchat' 
              onChange={handleChange} 
              name='name' 
              value={newMsgData.name}
            /> <br />
            <input type='text' 
              placeholder='Inserisci Messaggio' 
              className='inputchat' 
              onChange={handleChange} 
              name='msg' 
              value={newMsgData.msg}
            /> <br />
            <input type='button' 
              onClick={() => dispatch(newChat({name: newMsgData.name, msg: newMsgData.msg})) } 
              className='inputchat' 
              value ='Invia Messaggio'
            />
          </div>
    </section>
  )
}

export default ChatContainer