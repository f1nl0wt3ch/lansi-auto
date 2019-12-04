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

  /*Make a call to contentful */
  componentDidMount() {

    createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'xd8y5qe1attb',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'saJqB-lLlWNKxG6Em7kui82HU1C92JD457qIWSaTNTU'
    })
    .getEntries()
    .then(res => {
      console.log(res.items)
      let blogArr = [], carArr = [];
      res.items.map( item => {
         if(item.fields.model && item.fields.branch){
            carArr.push(item)
         } else if(item.fields.createdDate && item.fields.name){
            blogArr.push(item)
         }
      });
      console.log("carArr",carArr.length)
      console.log("blogArr",blogArr.length)
       this.setState({
          cars: carArr,
          blogs: blogArr
       })
    })
    .catch(err => console.log(err));
  }
    render() {
        return (
          <div>
            <div>
                <Carousel/>
                <CarsList cars={this.state.cars}/>
                <BlogList blogs={this.state.blogs}/>
            </div>
            <div>
                 <BlogList blogs = {this.state.blogs}/>
            </div>
          </div>

        )
    }
}
