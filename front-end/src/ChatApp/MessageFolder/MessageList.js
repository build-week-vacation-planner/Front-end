import React from 'react';

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
                {Dummy_Data.map((message, index) => {
                    return (
                        <div key = {index} className = 'message'>
                            <div className = 'message-username'>{message.senderId}</div>
                            <div className = 'message-text'>{message.text}</div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default MessageList;