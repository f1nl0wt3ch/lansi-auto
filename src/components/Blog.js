import React, {Component} from 'react';

export default class Blog extends Component {
    render() {
        const {blog} = this.props;

        return (
            <div>
              <p>{blog.fields.name}</p>
            </div>
        )
    }
}