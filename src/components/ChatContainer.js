import React from 'react'
import ChatItem from './ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateAmount } from '../features/chat/chatSlice'


const ChatContainer = () => {
  const {chatItems, amountTotal} = useSelector((store) => store.chat);
  if (amountTotal < 1) {
    return (
      <section className='column'>
        <header>
            <h2>No chats available</h2>
        </header>
      </section>
    );
  }
  return (
    <section className='column'>
          {chatItems.map((item) => {return(
            <ChatItem key={item.id} {...item} />
            )}
          )}
    </section>
  )
}

export default ChatContainer