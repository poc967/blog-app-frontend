import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import CreatePost from './CreatePost'
import PostContainer from './PostContainer'
import NotFound from './NotFound'

const Blog = (props) => {
    return (
        <div className="blog">
            <ul className="create-button">
                <li><NavLink to='/blog/create'>Create</NavLink></li>
            </ul>

            <div className="posts">
                <Route exact path='/blog' render={() => <PostContainer posts={props.posts}
                    handlePostDelete={props.handlePostDelete} />} />
                <Route path='/blog/create' render={() => <CreatePost />} />
                <Route path='/blog/edit' render={() => <NotFound />} />
            </div>
        </div>
    )
}

export default Blog