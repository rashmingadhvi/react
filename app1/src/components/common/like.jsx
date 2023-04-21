import React, {Component} from 'react';

class Like extends Component {


    render() {
        let classes = "fa-heart";
        if(!this.props.liked)
            classes="far "+classes;
        else
            classes="fas "+classes;

        return (
            <i className={classes} onClick={this.props.onLike}/>
        );
    }

}

export default Like;
