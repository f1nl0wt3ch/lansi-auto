import React, {Component} from 'react';
import Carousel from "./Carousel";
import CarsList from "./CarsList";
import BlogList from "./BlogList";

export default class MainPage extends Component {

    render() {
        return (
            <div>
                <Carousel/>
                <CarsList/>
                <BlogList/>
            </div>
        )
    }
}