import {Component} from 'react';
import * as authsvc from '../../services/authService';

class Logout extends Component {
    render() {
        return null;
    }

    componentDidMount() {
        authsvc.logout();
    }
}

export default Logout;