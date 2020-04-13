import React from 'react'
import '../styles/Post.css'

const Post = (props) => {
    return (
        <li>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <h2>{props.category}</h2>
            <p>{props.body}</p>
        </li>
    )
}

export default Post