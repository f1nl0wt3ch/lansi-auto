import React, {Component} from 'react';
import Carousel from "./Carousel";
import CarsList from "./CarsList";
import BlogList from "./BlogList";
import {createClient} from "contentful";

export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            blogs: [],
            cars: []
        }
    }

    componentDidMount() {
        let blogsArr = [];
        let carsArr = [];

        const client = createClient({
            space: 'xd8y5qe1attb',
            accessToken: 'saJqB-lLlWNKxG6Em7kui82HU1C92JD457qIWSaTNTU'
        });

        client.getEntries()
            .then((response) => {
                response.items.map(item => {
                    if(item.sys.contentType.sys.id === "blog") {
                        blogsArr.push(item);
                    } else if (item.sys.contentType.sys.id === "car") {
                        carsArr.push(item);
                    }
                });
                this.setState({
                    blogs: blogsArr,
                    cars: carsArr
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Carousel/>
                <CarsList cars={this.state.cars}/>
                <BlogList blogs={this.state.blogs}/>
            </div>
        )
    }
}
