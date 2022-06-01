import React from 'react'
import { useDispatch } from 'react-redux'
import { setVisibility } from '../features/feed/feedSlice'
import { setVisibilityChat } from '../features/chat/chatSlice'

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <section className='column'>
        <div className='navigationdiv' onClick= {() => dispatch(setVisibility())}>
          <h3> Feed Section</h3>
          <p>Change Visibility</p>
        </div>
        <div className='navigationdiv' onClick= {() => dispatch(setVisibilityChat())}>
          <h3> Chat Section </h3>
          <p>Change Visibility</p>
        </div>
    </section>
  )
}

export default Navigation