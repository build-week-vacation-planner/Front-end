import React from 'react';

class MessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            //senderId: "",
            item: "",
            
        };
    }

    newSubmit = element => {
        element.preventDefault();
        this.props.addTodo(this.state.item)
        //this.props.addSenderId(this.state.senderId)
    }

    handleChange = element => {
        this.setState({
            [element.target.name]: element.target.value
        });
    };

    render() {
        return (
            <form onSubmit={this.newSubmit} onChange = {this.handleChange}>

                <input
                    placeholder='Enter Message Here'
                    type='text'
                    value={this.state.item}
                    name='item'
                    // onChange={this.handleChange}
                />
                
                <button>Send</button>
            </form>
        );
    }
}

export default MessageForm;