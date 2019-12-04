import React, {Component} from 'react';
import Service from "./Service";
import { createClient } from 'contentful'

export default class ServiceListPage extends Component {
    constructor() {
        super();
        this.state = {
            services: []
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
      .getEntries("service")
      .then(res => {
         console.log(res.items)
         this.setState({
            services: res.items
         })
         console.log("Getting Response from Contentful ", this.state.services[0].sys.id);
      })
      .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                {this.state.services.map(ser => <Service key={ser.sys.id} ser={ser}/>)}
            </div>
        )
    }
}
