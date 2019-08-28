import React from 'react';

function Message(props) {

    return (
        <>
            <div>{props.username}</div>
            <div className = 'text'>{props.text}</div>
            <br />
        </>

    )

}

export default Message;