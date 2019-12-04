import React, {Component} from 'react';
import Service from "./Service";
import {createClient} from 'contentful'

export default class ServiceListPage extends Component {
    constructor() {
        super();
        this.state = {
            services: []
        }
    }

    /*Make a call to contentful */
    componentDidMount() {
        let serviceArr = [];

        const client = createClient({
            space: 'xd8y5qe1attb',
            accessToken: 'saJqB-lLlWNKxG6Em7kui82HU1C92JD457qIWSaTNTU'
        });

        client.getEntries()
            .then((response) => {
                response.items.map(item => {
                    if(item.sys.contentType.sys.id === "service") {
                        serviceArr.push(item);
                    }
                });
                this.setState({
                    services: serviceArr
                });
                console.log(this.state.services);
            })
            .catch(err => console.log(err));
    }

        render()
        {
            return (
                <div>
                    {this.state.services.map(ser => <Service key={ser.sys.id} ser={ser}/>)}
                </div>
            )
        }
    }
