import React from 'react';
import Message from './Message';


class MessageList extends React.Component {
    render() {
        return (
            <div className='message-list'>
                {/* <div className = 'message-list-text'>MessageList</div> */}
                {this.props.messages.map((message, index) => {
                    return (
                        <li key = {message}>

                        <div className='message'>
                            <div className='message-username'>{message.senderId}</div>
                            <div className='message-text'>{message.text}</div>
                        </div>

                        </li>
                        // <Message key={index} username={message.senderId} text={message} />
                
                    )
                })}
            </div>

        )
    }
}

export default MessageList;