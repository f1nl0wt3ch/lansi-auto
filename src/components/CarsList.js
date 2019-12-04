import React, {Component} from 'react';
import Car from "./Car";

export default class CarsList extends Component {
    render() {
      const {cars} = this.props;
        return (

            <div className="container">
                {cars.map(car => <Car key={car.sys.id} car={car}/>)}
            </div>
        )
    }
}
