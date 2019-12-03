import React, {Component} from 'react';
import './App.css';

export default class Footer extends Component {
    render() {
        return (

            <footer class="page-footer font-small blue pt-4 fixed-bottom bg-dark">

                <div class="container-fluid text-center text-md-left">

                    <div class="row">

                        <div class="col-md-6 mt-md-0 mt-3">

                            <h5 class="text-uppercase">Laaja valikoima uusia autoja</h5>
                            <p>Uusi ajopeli haussa? Tutustu laajaan esittelyautojen valikoimaamme ja varaa koeajosi jo
                                tänään! Toimitamme myös tilauksesta edustamiemme automerkkien uusimmat mallit juuri
                                sellaisin varustein kuin tarvitset.</p>

                        </div>

                        <hr class="clearfix w-100 d-md-none pb-3"/>

                        <div class="col-md-3 mb-md-0 mb-3">

                            <h5 class="text-uppercase">MERKIT</h5>

                            <ul class="list-unstyled">
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
                        <div class="col-md-3 mb-md-0 mb-3">

                            <h5 class="text-uppercase">YRITYS</h5>

                            <ul class="list-unstyled">
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
                <div class="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> Capgemini.com</a>
                </div>

            </footer>
        )
    }
}

