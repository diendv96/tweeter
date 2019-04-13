import React, {Component} from 'react'
import '../style/SendMessage.css'
import shortid from 'shortid';
import SplitMessageService from '../service/SplitMessage';
import {MESSAGE_LENGTH_LIMIT} from "../constant/abstract";


class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxAllowedCharacter: MESSAGE_LENGTH_LIMIT
        };

        this.countChars = this.countChars.bind(this);
        this.submitMessage = this.submitMessage.bind(this);

        this.remainingRef = React.createRef();
        this.submitRef = React.createRef();
    }

    countChars(event) {
        let messageLen = event.target.value.length;
        let max_allowed = this.state.maxAllowedCharacter;
        let warnAt = 20;

        this.remainingRef.current.innerHTML = max_allowed - messageLen;
        this.remainingRef.current.className = messageLen > max_allowed - warnAt ? "warn" : "";
        this.submitRef.current.disabled = messageLen === 0;
    }

    submitMessage(event) {
        let messages = [];

        try {
            messages = SplitMessageService.splitMessage(this.messageNode.value);
        } catch (e) {
            alert("Message contains a span of non-whitespace characters longer than 50 characters í not supported!")
        } finally {
            event.preventDefault();

            messages.map(message => {
                this.props.postMessage({
                    id: shortid.generate(),
                    message: message,
                    date: new Date()
                });
            });
        }
        this.messageNode.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitMessage}>
                    <textarea id="tweet" rows="3" placeholder="Start a new message"
                              onKeyUp={this.countChars} onSubmit={this.submitMessage}
                              ref={node => (this.messageNode = node)}
                    />
                    <div className="bottom">
                        <span ref={this.remainingRef}>{this.state.maxAllowedCharacter}</span>
                        <button type="submit" tabIndex="0" ref={this.submitRef} disabled>
                            <span tabIndex="-1">Send</span>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SendMessage