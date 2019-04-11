import React, {Component} from 'react';
import {connect} from "react-redux";
import {addMessage} from "../actions/ActionCreators";

import SendMessage from "./SendMessage";
import '../style/Index.css';

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
};

const mapDispatchToProps = dispatch => ({
    addMessage: (message) => dispatch(addMessage(message))
});

class Index extends Component {
    render() {
        return (
            <div className="container">
                <h1>Tweeter App</h1>
                <SendMessage addMessage={this.props.addMessage}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
