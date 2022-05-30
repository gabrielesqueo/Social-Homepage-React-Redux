import React from 'react'
import like from '../static/images/like.png'
import { useDispatch } from 'react-redux'


const Post = (props) => {
    const dispatch = useDispatch();
    return (
        <div className='postitem' onClick={() => dispatch()}>
            <h4>{props.name} </h4>
            <p className='chatmsg'> {props.text}</p>
            <img src={like} className={props.isLiked && "isLiked"}/>
        </div>
    )
}

export default Post