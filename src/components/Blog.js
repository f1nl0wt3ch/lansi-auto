import React, {Component} from 'react';

export default class Blog extends Component {
    render() {
        const {blog} = this.props;
        return (
            <div className="container">
                <p>{blog.fields.name}</p>
                <p>{blog.fields.description}</p>
            </div>
        )
    }
}
