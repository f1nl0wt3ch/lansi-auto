import React, {Component} from 'react';
import Car from "./Car";

export default class CarsList extends Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    }
    /*Make a call to contentful */
    componentWillMount() {

    }

    render() {
        return (
            <div className="container">
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        )
    }
}