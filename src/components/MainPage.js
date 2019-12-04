import React, {Component} from 'react';
import Carousel from "./Carousel";
import CarsList from "./CarsList";
import BlogList from "./BlogList";
import { createClient } from 'contentful'

export default class MainPage extends Component {

  constructor() {
      super();
      this.state = {
          cars: [],
          blogs: []
      }
  }

  /*Make a call to contentful */
  componentDidMount() {

    createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'xd8y5qe1attb',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'saJqB-lLlWNKxG6Em7kui82HU1C92JD457qIWSaTNTU'
    })
    .getEntries("blog")
    .then(res => {
       this.setState({
          blogs: res.items
       })
    })
    .catch(err => console.log(err));

    createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'xd8y5qe1attb',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'saJqB-lLlWNKxG6Em7kui82HU1C92JD457qIWSaTNTU'
    })
    .getEntries("car")
    .then(res => {
       this.setState({
          cars: res.items
       })
    })
    .catch(err => console.log(err));


  }

    render() {
        return (
            <div>
                <Carousel/>
                <CarsList cars = {this.state.cars}/>
                <BlogList blogs = {this.state.blogs}/>
            </div>
        )
    }
}
