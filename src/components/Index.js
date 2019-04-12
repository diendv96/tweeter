import React, {Component} from 'react';
import {connect} from "react-redux";
import {addMessage, fetchMessages, postMessage} from "../actions/ActionCreators";

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
    fetchMessages: () => dispatch(fetchMessages()),
    postMessage: (message) => dispatch(postMessage(message))
});

class Index extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        return (
            <div className="container">
                <h1>Tweeter App</h1>
                <SendMessage addMessage={this.props.addMessage} postMessage={this.props.postMessage}/>
                <ShowMessage messages={this.props.tweetMessages.messages}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
