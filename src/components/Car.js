import React, {Component} from 'react';

export default class Car extends Component {
    render() {
        const {car} = this.props;

        return (
            <div>
              <p>{car.fields.model}</p>
              <p>{car.fields.branch}</p>
              <p>{car.fields.madeIn}</p>
            </div>
        )
    }
}
