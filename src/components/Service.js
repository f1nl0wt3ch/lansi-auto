import React, {Component} from 'react';

export default class Service extends Component {
    render() {
        const {dealer, price } = this.props;
        return (
            <div>
                <p>{dealer}</p>
                <p>{price}</p>
            </div>
        )
    }
}
