import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Post from './Post'


const Feed = () => {
  const { feedPosts} = useSelector((store) => store.feed);
  const [newPostData, setNewPostData] = useState({name: "Myself", text:""})
  const dispatch = useDispatch();

  function handleChange(event) {
    setNewPostData(perPostData => {
      return {
        ...perPostData,
        [event.target.name]: event.target.value
      }
  })}

  return (
    <section className='column'>
      <div className='postitem'>
        <h4> Create a New post</h4>
        <input
          type="text"
          className='inputfeed'
          onChange={handleChange}
          name= "text"
          value = {newPostData.text} 
          placeholder= "Write here your thoughts"
        />
      </div>
      {feedPosts.map((item) => {
          return(
            <Post key={item.id} {...item} />
          )
        })}
    </section>
  )
}

export default Feed