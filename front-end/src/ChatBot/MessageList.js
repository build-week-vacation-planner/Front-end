import React from 'react';
import Message from './Message';

const data = [
    {
        senderId: "Julia",
        text: 'Hey, how about Tokyo?'
    },

    {
        senderId: "Thiery",
        text: '... how about going home 😊.'
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
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                        <br/>
                        </>
                    )
                })}
            {props.todos.map(item => (
                <Message key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
             Clear Messages
      </button>
        </div>
    );
};

export default MessageList;