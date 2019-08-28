import React from 'react';

class MessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            //userId: "",
            item: "",
            
        };
    }

    newSubmit = element => {
        element.preventDefault();
        this.props.addTodo(this.state.item)
        //this.props.addTodo(this.state.userId)
    }

    handleChange = element => {
        this.setState({
            [element.target.name]: element.target.value
        });
    };

    render() {
        return (
            <form onSubmit={this.newSubmit}>
                {/* <input 
                    placeholder = 'Name'
                    type = 'text'
                    value = {this.state.userId}
                    name = 'username'
                    onChange = {this.handleChange}
                /> */}

                <input
                    placeholder='Enter Message Here'
                    type='text'
                    value={this.state.item}
                    name='item'
                    onChange={this.handleChange}
                />
                <button>Send</button>
            </form>
        );
    }
}

export default MessageForm;