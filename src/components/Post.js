import React from 'react'
import '../styles/Post.css'

const Post = (props) => {
    return (
        <li>
            <h2>{props.title}</h2>
            <h3>By: {props.author}</h3>
            <p><strong>{props.category} </strong>{props.body}</p>
            <div className="postFooter">
                <button className="button-neutral">Edit</button>
                <button className="button-danger" onClick={() => props.handlePostDelete(props.post._id)}>Delete</button>
            </div>
        </li>
    )
}

export default Post