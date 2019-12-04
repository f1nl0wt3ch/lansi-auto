import React, {Component} from 'react';
var styledCard = {
   width: "13rem",
   height: "25rem"
}

var styledCardText = {
   height: "5rem"
}

var styledImage = {
   height: "137.2px",
   width: "206px"

}
export default class Car extends Component {
    render () {
      const {car} = this.props;
      const num = this.props.num;
      {
        return (
           <div className="col-sm mr-auto px-2">
             <div className="card" style={styledCard}>
                <img src={car.fields.imageObj.fields.file.url} className="card-img-top" alt="..." style={styledImage}/>
                <div className="card-body">
                  <h5 className="card-title">{car.fields.branch}</h5>
                  <p className="card-text">{car.fields.model}</p>
                  <a href="#" className="btn btn-primary" style={styledCardText}>{car.fields.model}</a>
                </div>
            </div>
          </div>
       )
      }
    }
}
