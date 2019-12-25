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
import Logout from "./components/common/logout";
import authSvc from './services/authService';
import ProtectedRoute from "./components/common/protectedRoute";
class App extends Component {

    state = {
    }

    componentDidMount() {
          this.setState({currentUser:authSvc.getLoggedInUser()});
    }

    render() {
        const {currentUser} = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar appName={"RMK App"} currentUser={currentUser}/>
                    <ToastContainer/>
                    <div className="container-fluid">
                        <Switch>
                            <ProtectedRoute path="/movies/:id" component={MovieForm}/>
                            <ProtectedRoute path="/movies" render={(props)=><AllMovies {...props} currentUser={currentUser}/>}/>
                            <ProtectedRoute path="/customers" component={Customers}/>
                            <ProtectedRoute path="/rentals" component={Rentals}/>
                            <ProtectedRoute path="/movieDetail/:id" component={MovieDetail}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Registration}/>
                            <Route path="/logout" component={Logout}/>
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
