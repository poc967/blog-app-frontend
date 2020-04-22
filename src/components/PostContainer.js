import React from 'react'
import '../styles/PostContainer.css'
import Post from './Post'

const PostContainer = (props) => {

    const postsList = props.posts

    let post = postsList.map((post) => {
        return <Post key={post._id}
            post={post}
            title={post.title}
            author={post.author}
            category={post.category}
            body={post.post}
            handlePostDelete={props.handlePostDelete} />

    })


    return (
        <ul>
            {post}
        </ul>
    )
}

export default PostContainer