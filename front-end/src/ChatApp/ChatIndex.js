///Basically the App.js for the ChatApp.
///I will be the Chatkit Api.

import React from 'react';

import MessageList from './MessageFolder/MessageList';
import MessageForm from './MessageFolder/MessageForm';
import RoomList from './RoomFolder/RoomList';
import RoomForm from './RoomFolder/RoomForm';
import Chatkit from '@pusher/chatkit-client';

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'DStrange',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                currentUser.subscribeToRoom({
                    roomId: "fe9596b3-abfb-4512-be33-5dae130e3938",
                    messageLimit: 25,
                    hooks: {
                        onNewMessage: message => {
                             console.log('message.text', message.text)
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
    }
    render() {
         console.log('this.state.messages', this.state.messages)
        return (
            <div className = "chatapp-app">
                <RoomList/>
                <MessageList messages = {this.state.messages}/>
                <MessageForm/>
                <RoomForm/>
            </div>
        )
    }
}

export default App;