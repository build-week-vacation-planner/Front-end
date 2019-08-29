import React from 'react';

const Message = props => {
    return (
        <>
      <div
        className={`item${props.item.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
      >

        <p>{props.item.task}</p>
      </div>
      </>
    );
  };
  
  export default Message;