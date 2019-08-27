import React from 'react';

class MessageForm extends React.Component{
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    newSubmit = element => {
        element.preventDefault();
        this.props.addTodo(this.state.item)
    }

    handleChange = element => {
        this.setState({
            [element.target.name]:element.target.value
        });
    };

    render() {
        return(
            <form onSubmit={this.newSubmit}> 
                <input 
                placeholder = 'Enter Message Here'
                type = 'text'
                value = {this.state.item}
                name = 'item'
                onChange = {this.handleChange}
                />
                <button>Send</button>
            </form>
        );
    }
}

export default MessageForm;