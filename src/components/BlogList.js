import React, {Component} from 'react';
import Carousel from "react-bootstrap/cjs/Carousel";
import './App.css';

export default class BlogList extends Component {
    render() {
        const {blogs} = this.props;
        return (
            <div className="container">
                <Carousel>
                    {blogs.map((blog, index) => {return (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100"
                                src={blog.fields.imageBlog.fields.file.url}
                                alt="slide"
                            style={{height: 450}}/>
                            <Carousel.Caption>
                                <h3>{blog.fields.name}</h3>
                                <p>{blog.fields.content.content[0].content[0].value}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )})}
                </Carousel>
            </div>
        )
    }
}