import React, {Component} from 'react';
import Blog from './Blog'

export default class BlogList extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
            </div>
        )
    }
}