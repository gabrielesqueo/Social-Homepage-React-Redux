import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Post from './Post'
import { newPost } from '../features/feed/feedSlice'

const Feed = () => {
  const { feedPosts} = useSelector((store) => store.feed);
  const [newPostData, setNewPostData] = useState({name: "Myself", text:""})
  const dispatch = useDispatch();

  function handleChange(event) {
    setNewPostData(oldPostData => {
      return {
        ...oldPostData,
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
        /><br />
        <input
          type="button"
          className='inputfeed'
          onClick={() => dispatch(newPost({name: newPostData.name, text: newPostData.text}))}
          value = "Create new post"
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