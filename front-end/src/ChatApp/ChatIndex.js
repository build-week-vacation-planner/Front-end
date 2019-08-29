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

        this.addMessage = this.addMessage.bind(this)
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
            })

            .catch(error => {
                console.log('Error with Connection', error)
            })
            
    }
    addMessage(text) {
        this.state.currentUser.sendSimpleMessage({
            text,
            roomId: this.currentUser.rooms[0].id,
        })
        .catch(error => console.error('error', error));
    }

    render() {
        console.log('Messages', this.state.messages)
        return (
            <div className="chatapp-app" >

                < MessageList messages={this.state.messages} messagetext={this.state.texts} />
                <MessageForm onSubmit={this.addMessage} />

            </div>
        )
    };
}

export default ChatApp;