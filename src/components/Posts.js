import React from 'react'
import Post from './Post'

const Posts = (props) => {

    const postsList = props.posts

    let post = postsList.map((post) => {
        return <Post key={post._id}
            title={post.title}
            author={post.author}
            category={post.category}
            body={post.post} />
    })

    return (
        <div className="posts">
            <ul >
                {post}
            </ul>
        </div>
    )
}

export default Posts