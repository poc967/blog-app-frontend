import React, { Component } from 'react'
import '../styles/CreatePost.css'
import axios from 'axios'


class CreatePost extends Component {

    state = {
        title: '',
        author: '',
        category: '',
        post: ''
    }

    handleInputChange = (e) => {
        const value = e.target.value
        const key = e.target.name

        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { title, author, category, post } = this.state

        axios.post('http://localhost:8080/posts', {
            title, author, category, post
        })

            .then(response => {
                console.log(response)
                return response
            })
            .then(() => this.setState({ title: '', post: '', author: '', category: '' }))

    }

    render() {
        return (
            < div className="createPost" >
                <form className="createPostForm"
                    onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Author"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        required />
                    <input type="text"
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        required />
                    <select type="text"
                        placeholder="Category"
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        name="category"
                        required >
                        <option value="mystery">Mystery</option>
                        <option value="drama">Drama</option>
                        <option value="thriller">Thriller</option>
                        <option value="recipe">Recipe</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="science-fiction">Sci-Fi</option>
                    </select >
                    <textarea rows="10"
                        cols="50"
                        value={this.state.post}
                        onChange={this.handleInputChange}
                        placeholder="Article body"
                        name="post" />
                    <input className="submit"
                        type="submit"
                        value="Share!" />
                </form>
            </div >
        )
    }
}

export default CreatePost