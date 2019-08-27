import React from 'react';
import Message from './Message';

const MessageList = props => {

    return (
        <div className="todo-List">
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