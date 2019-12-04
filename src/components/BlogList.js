import React, {Component} from 'react';
import Blog from './Blog'

export default class BlogList extends Component {
    render() {
      const {blogs} = this.props;
      console.log("Type of blos ",typeof blogs)
        return (
            <div className="container">
                {blogs.map(blog => <Blog key={blog.sys.id} blog={blog}/>)}
            </div>
        )
    }
}
