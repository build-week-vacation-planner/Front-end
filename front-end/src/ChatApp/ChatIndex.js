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
                currentUser: [],
            }

      // this.addMessage = this.addMessage.bind(this)
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
                this.setState({currentUser : currentUser})
                this.state.currentUser.subscribeToRoomMultipart({
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

                    // anything(input){
                    //     this.currentUser.sendSimpleMessage({
                    //         text: input,
                    //         roomId: currentUser.rooms[0].id
                    //     })
                    // }

                    this.state.currentUser.sendSimpleMessage({
                        text: "message",
                        roomId: currentUser.rooms[0].id
                    })
                    

                    .catch(error => {
                        console.log('Error with Connection', error)
                    });

            })
    }

    // addMessage(input) {
    //     console.log('input',input)
    //     this.state.currentUser.sendSimpleMessage({
    //         text : message,
    //         roomId: this.state.currentUser.rooms[0].id,
    //     })
    // }


    render() {
        //console.log('Messages', this.state.messages)
        return (
            <div className="chatapp-app" >
                {/* <RoomList/> */}
                < MessageList messages={this.state.messages} messagetext={this.state.texts} text = {this.text} />
                <MessageForm addMessage={this.addMessage} />
                {/* <RoomForm/> */}
            </div>
        )
    }
}

export default ChatApp;