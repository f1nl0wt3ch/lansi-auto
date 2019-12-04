import React, {Component} from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import ServiceListPage from "./ServiceListPage";
import MainPage from "./MainPage";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router path="/">
                <Navigation/>
                <Route path="/" exact component={() => <MainPage />}/>
                <Route path="/services" component={() => <ServiceListPage/>}/>
                <Footer/>
            </Router>
        )
    }
}
