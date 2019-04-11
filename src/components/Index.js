import React, {Component} from 'react';
import SendMessage from "./SendMessage";
import '../style/Index.css';

class Index extends Component {
    render() {
        return (
            <div className="container">
                <h1>Tweeter App</h1>
                <SendMessage/>
            </div>
        );
    }
}

export default Index;
