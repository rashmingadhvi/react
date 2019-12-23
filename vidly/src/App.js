import React, { Component } from "react";
import Navbar from "./components/navbar";
import AllMovies from "./components/AllMovies";
import Notfound from "./components/common/notfound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import MovieDetail from "./components/movieDetail";
import Login from "./components/login";
import Registration from "./components/registration";
import MovieForm from "./components/movieForm";
import {ToastContainer} from "react-toastify";
class App extends Component {



    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar/>
                    <ToastContainer/>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/movies/:id" component={MovieForm}/>
                            <Route path="/movies" component={AllMovies}/>
                            <Route path="/customers" component={Customers}/>
                            <Route path="/rentals" component={Rentals}/>
                            <Route path="/movieDetail/:id" component={MovieDetail}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Registration}/>
                            <Redirect exact from = "/" to ="/movies"/>
                            <Route path="/notfound" component={Notfound}/>
                            <Redirect to="/notfound" component={Notfound}/>
                        </Switch>

                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default App;
