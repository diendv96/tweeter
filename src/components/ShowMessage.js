import React from 'react'
import '../style/ShowMessage.css'

const RenderMessage = ({message}) => (
    <li className="message" key={message.id}>{message.message}</li>
);

const ShowMessage = ({messages}) => {
    return (
        <div className="messageBox">
            <ul className="messages">
                {
                    messages.map(message => (
                        <RenderMessage message={message}/>
                    ))
                }
            </ul>
        </div>
    )
};


export default ShowMessage