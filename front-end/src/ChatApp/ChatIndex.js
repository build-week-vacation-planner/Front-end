// App.js for the ChatApp.
///Using the Chatkit Api.

import React from 'react';

import MessageList from './MessageFolder/MessageList';
import MessageForm from './MessageFolder/MessageForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator, userId } from './config';

class ChatApp extends React.Component {
    constructor() {
        super()
        this.state =
            {
                messages: [],
                texts: [],
            }

       // this.sendSimpleMessage = this.sendSimpleMessage.bind(this)
    }


    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: userId,
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                console.log('Successful Connection', currentUser)
                this.currentUser = currentUser
                this.currentUser.subscribeToRoomMultipart({
                    roomId: currentUser.rooms[0].id,
                    hooks: {
                        onMessage: message => {
                            console.log('received message:', message)
                            this.setState({
                                messages: [...this.state.messages, message],
                                texts: [...this.state.texts, message.parts[0].payload.content]
                            })
                        }
                    }
                })

                    // sendSimpleMessage(text){
                    //     this.currentUser.sendSimpleMessage({
                    //         text,
                    //         roomId: currentUser.rooms[0].id
                    //     })
                    // }

                    currentUser.sendSimpleMessage({
                        text: 'Lets take a vote.',
                        roomId: currentUser.rooms[0].id
                    })
                    

                    .catch(error => {
                        console.log('Error with Connection', error)
                    });

            })
    }

    // sendSimpleMessage(text) {
    //     this.currentUser.sendSimpleMessage({
    //         text,
    //         roomId: this.currentUser.rooms[0].id,
    //     })
    // }


    render() {
        console.log('Messages', this.state.messages)
        return (
            <div className="chatapp-app" >
                {/* <RoomList/> */}
                < MessageList messages={this.state.messages} messagetext={this.state.texts} text = {this.text} />
                <MessageForm sendSimpleMessage={this.sendSimpleMessage} />
                {/* <RoomForm/> */}
            </div>
        )
    }
}

export default ChatApp;