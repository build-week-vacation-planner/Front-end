import React from 'react';
import Message from './Message';
//DummyData

const Dummy_Data = [
    //Similar data from Chatkit??
    {
        senderId: 'DStrange',
        text: 'Hey, How about Tokyo',
    },

    {
        senderId: 'AOne',
        text: 'Works for me!',
    },

    {
        senderId: 'DStrange',
        text: 'Great!',
    },
]

class MessageList extends React.Component{
    render() {
        return (
            <div className = 'message-list'>
                {/* <div className = 'message-list-text'>MessageList</div> */}
                {this.props.messages.map((message, index) => {
                    return (
                        
                        <Message key = {index} username = {message.senderId} text = {message.text}/>
                
                    )
                })}
            </div>

        )
    }
}

export default MessageList;