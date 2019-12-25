import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import authSvc from '../../services/authService';

class ProtectedRoute extends Component {
    render() {
        const {render, component:GivenComponent, isExact, ...rest} = this.props;
        return (

            authSvc.getLoggedInUser()?
                <Route
                    {...rest}
                    exact
                    render={(props)=> GivenComponent? <GivenComponent {...props}/>: render(props)}

                />
                :
            <Redirect to="/logout"/>

        );
    }
}

export default ProtectedRoute;