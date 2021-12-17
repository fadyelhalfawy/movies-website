import React from "react";
import {Component} from "react";
import Movies from "../components/movies";
import Route from "react-router-dom/Route";
import CustomersForm from "../components/forms/customersForm";
import RentalsForm from "../components/forms/rentalsForm";
import {Redirect, Switch} from "react-router-dom";
import NavBar from "../components/navBar";
import MoviesForm from "../components/forms/moviesForm";
import NotFoundForm from "../components/forms/notFoundForm";
import LoginForm from "../components/forms/loginForm";
import SignupForm from "../components/forms/signupForm";

export class App extends Component {
    render() {
        return (
            <React.Fragment>

            <NavBar />

            <main className={"container"}>

                <Switch>
                    <Route path={"/notfound"} to={NotFoundForm} />
                    <Route path={"/movies/:id/:title?"} component={MoviesForm} />
                    <Route path={"/movies"} component={Movies} />
                    <Route path={"/login"} component={LoginForm} />
                    <Route path={"/signup"} component={SignupForm} />
                    <Route path={"/customers"} component={CustomersForm} />
                    <Route path={"/rentals"} component={RentalsForm} />
                    <Redirect from={"/"} exact to={"/movies"} />
                    <Redirect to={"/notfound"} />
                </Switch>

            </main>

            </React.Fragment>
        );
    }
}