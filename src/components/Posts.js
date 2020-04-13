import React from 'react'
import Post from './Post'
import { postsList } from '../data/posts'

const Posts = (props) => {

    let post = postsList.map((post) => {
        return <Post title={post.title}
            author={post.author}
            category={post.category}
            body={post.body} />
    })

    return (
        <ul className="posts">
            {post}
        </ul>
    )
}

export default Posts