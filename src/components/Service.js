import React, {Component} from 'react';
import './App.css'

export default class Service extends Component {
    render() {
        const {ser} = this.props;

        return (
            <div className="card la-card">
                <div className="card-header">
                    {ser.fields.name}
                </div>
                <img src={ser.fields.photoMain.fields.file.url} className="card-img-top" alt="..." style={{}}/>
                <div className="card-body">
                    <h5 className="card-title">{ser.fields.name}</h5>
                    <p className="card-text">{ser.fields.description.content[0].content[0].value}</p>
                    <a href="#" className="btn">Tutustu palveluun!</a>
                </div>
            </div>
        )
    }
}