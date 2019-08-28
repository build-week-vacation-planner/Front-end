import React from 'react';

function Message(props) {

    return (
        <>
            <div>{props.username}</div>
            <div>{props.text}</div>
            <br />
        </>

    )

}

export default Message;