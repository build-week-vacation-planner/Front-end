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


class MessageList extends React.Component {

    render() {
        console.log('message-text', this.props.messagetext)
        return (
            <div className='message-list'>
                
                {data.map((message, index) => {
                    return (
                        <Message key={message.content} username = {message.senderId} text = {message.text}/>
                       
                    )
                })}

                {/* {this.props.messages.map((message, index) => {
                    return (
                        <Message key = {message.id} username = {
                            message.senderId} text = {message.text}/>
                    )
                })}

                {this.props.messagetext.map((message, index)=> {
                    return (
                        <Message key = {message.hello} text = {message}/>
                    )
                })} */}

                {this.props.messages.map((message, index) => {
                    const linkedContent = this.props.messagetext[index]
                    return (
                        <Message key = {message.hi} username = {message.senderId} text = {linkedContent}/>
                    )
                })}

            </div>

        )
    }
}

export default MessageList;