import React, {Component} from 'react';
import {connect} from "react-redux";
import {addMessage, fetchMessages} from "../actions/ActionCreators";

import SendMessage from "./SendMessage";
import '../style/Index.css';
import ShowMessage from "./ShowMessage";

const mapStateToProps = state => {
    return {
        tweetMessages: state.tweetMessages
    }
};

const mapDispatchToProps = dispatch => ({
    addMessage: (message) => dispatch(addMessage(message)),
    fetchMessages: () => dispatch(fetchMessages())
});

class Index extends Component {
    render() {
        return (
            <div className="container">
                <h1>Tweeter App</h1>
                <SendMessage addMessage={this.props.addMessage} fetchMessages={this.props.fetchMessages}/>
                <ShowMessage messages={this.props.tweetMessages.messages}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
