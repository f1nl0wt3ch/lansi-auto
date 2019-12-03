import React, {Component} from 'react';
import Service from "./Service";

export default class ServiceListPage extends Component {
    constructor() {
        super();
        this.state = {
            services: []
        }
    }

    /*Make a call to contentful */
    componentWillMount() {

    }

    render() {
        return (
            <div>
                {this.state.services.map(ser => <Service key={ser.id} ser={ser}/>)}
            </div>
        )
    }
}