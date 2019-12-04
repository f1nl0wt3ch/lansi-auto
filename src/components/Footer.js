import React, {Component} from 'react';
import './App.css';

export default class Footer extends Component {
    render() {
        return (

            <footer className="page-footer font-small blue pt-4 bg-dark">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase">Laaja valikoima uusia autoja</h5>
                            <p>Uusi ajopeli haussa? Tutustu laajaan esittelyautojen valikoimaamme ja varaa koeajosi jo
                                tänään! Toimitamme myös tilauksesta edustamiemme automerkkien uusimmat mallit juuri
                                sellaisin varustein kuin tarvitset.</p>

                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3"/>

                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">MERKIT</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Honda</a>
                                </li>
                                <li>
                                    <a href="#!">Jaguar</a>
                                </li>
                                <li>
                                    <a href="#!">Land Rover</a>
                                </li>
                                <li>
                                    <a href="#!">BMW</a>
                                </li>
                                <li>
                                    <a href="#!">Audi</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">YRITYS</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Tietoa yrityksestä</a>
                                </li>
                                <li>
                                    <a href="#!">Yhteystiedot</a>
                                </li>
                                <li>
                                    <a href="#!">Laskutustiedot</a>
                                </li>
                                <li>
                                    <a href="#!">Käyttöehdot</a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> Capgemini.com</a>
                </div>

            </footer>
        )
    }
}

