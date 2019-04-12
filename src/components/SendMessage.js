import React, {Component} from 'react'
import '../style/SendMessage.css'


class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxAllowedCharacter: 50
        };

        this.countChars = this.countChars.bind(this);
        this.submitMessage = this.submitMessage.bind(this);

        this.remainingRef = React.createRef();
        this.submitRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchMessages();
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
        event.preventDefault();
        let message = {
            id: 10,
            message: this.messageNode.value,
            date: new Date()
        };

        this.props.addMessage(message);
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