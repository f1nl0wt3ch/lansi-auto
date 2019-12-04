import React, {Component} from 'react';
import Blog from './Blog'

export default class BlogList extends Component {
    render() {
        const {blogs} = this.props;
        return (
            <div className="container mt-mb-5">
                {blogs.map(blog => <Blog key={blog.sys.id} blog={blog}/>)}
            </div>
        )
    }
}