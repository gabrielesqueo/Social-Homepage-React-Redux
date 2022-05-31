import React from 'react'
import like from '../static/images/like.png'
import notliked from '../static/images/notliked.png'
import { useDispatch } from 'react-redux'
import { setNotLiked, setLike } from '../features/feed/feedSlice';


const Post = ({id, name, text, isLiked}) => {
    const dispatch = useDispatch();
    return (
        <div className='postitem' >
            <h4>{name} </h4>
            <p className='chatmsg'> {text}</p>
            {isLiked ? 
                <img src={like} className="like "  alt="like" onClick={() => dispatch(setNotLiked({id})) }/> : 
                <img src={notliked} className="like "  alt="not liked" onClick={() => dispatch(setLike({id})) }/>
            }
        </div>
    )
}

export default Post