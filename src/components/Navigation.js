import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {GiRaceCar} from "react-icons/gi"

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark higher">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        AutoDillers <GiRaceCar style={{height: 30, width: 30, margin: 0, padding: 0}}/>
                    </Link>
                    <div className="navbar-nav ml-auto">
                       <Link className="nav-item nav-link" to="/">
                           Ajankohtaista
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Vaihtoautot
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Uudet autot
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Vuokraus
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Huolto
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Renkaat
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Yritysmyynti
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Rahoitus
                        </Link>
                        <Link className="nav-item nav-link" to="/services">
                            Lisäpalvelut
                        </Link>
                        <Link className="nav-item nav-link" to="/">
                            Yhteystiedot
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}