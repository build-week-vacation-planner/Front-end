import React from 'react';
import Message from './Message';

const data = [
    {
        senderId: "Julia",
        text: 'Hey, how about Tokyo?'
    },

    {
        senderId: "Thiery",
        text: '...How about Alaska? 😃'
    },

    {
        senderId: "Julia",
        text: '🤦‍.'
    }
]


const MessageList = props => {

    return (
        <div className="todo-List">
            {data.map((message, index) => {
                    return (
                        <>
                        {/* <div>{message.senderId}</div> */}
                        <div>{message.text}</div>
                        <br/>
                        </>
                    )
                })}
            {props.todos.map((item, senderId) => (
                <Message key={item.id} item={item} toggleItem={props.toggleItem} senderId = {senderId} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
             Clear Message History
      </button>
        </div>
    );
};

export default MessageList;