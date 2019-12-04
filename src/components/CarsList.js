import React, {Component} from 'react';
import Car from "./Car";

export default class CarsList extends Component {

    render() {
        const {cars} = this.props;
        return (
          <div className="container mt-5 mb-5">
              <div className="row">
                  { cars.map( (car,index) => <Car key={car.sys.id}  num={index} car={car} /> )}
              </div>
        </div>
       )
    }
}
