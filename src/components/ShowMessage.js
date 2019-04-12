import React from 'react'
import '../style/ShowMessage.css'

const RenderMessage = ({message}) => (
    <li className="message">{message.message}</li>
);

const ShowMessage = ({messages}) => {
    return (
        <div className="messageBox">
            <ul className="messages">
                {
                    messages.map(message => (
                        <RenderMessage key={message.id} message={message}/>
                    ))
                }
            </ul>
        </div>
    )
};


export default ShowMessage