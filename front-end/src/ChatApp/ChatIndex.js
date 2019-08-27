///Basically the App.js for the ChatApp.
///I will be the Chatkit Api.

import React from 'react';

import MessageList from './MessageFolder/MessageList';
import MessageForm from './MessageFolder/MessageForm';
import RoomList from './RoomFolder/RoomList';
import RoomForm from './RoomFolder/RoomForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

import { tokenUrl, instanceLocator, roomId } from './config'


const DUMMY_DATA = [
    //Similar data from Chatkit??
    {
        senderId: 'DStrange',
        text: 'Hey, How about Tokyo?',
    },

    {
        senderId: 'AOne',
        text: 'Works for me!',
    },

    {
        senderId: 'DStrange',
        text: 'Great!',
    },
]

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            messages: DUMMY_DATA
        }
        //this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: 'DStrange',
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                console.log('Successful Connection', currentUser)
                this.currentUser = currentUser
                this.currentUser.subscribeToRoomMultipart({
                    roomId: roomId,
                    //messageLimit: 25,
                    hooks: {
                        onMessage: message => {
                             console.log('recieved message', message)
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })

            .catch(error => {
                console.log('Error with Connection', error)
            })
    }

    // sendMessage(message){
    //     this.currentUser.sendMultipartMessage({
    //         message,
    //         roomId:"fe9596b3-abfb-4512-be33-5dae130e3938",
    //     })
    // }



    render() {
         //console.log('Messages', this.state.messages)
        return (
            <div className = "chatapp-app">
                <RoomList/>
                <MessageList messages = {this.state.messages} />
                <MessageForm  />
                <RoomForm/>
            </div>
        )
    }
}

export default App;