import React from 'react';

class MessageForm extends React.Component{
    constructor(){
        super()
        this.state = {

            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }

    handleChange(e) {
        // console.log(e.target.value)
        this.setState({
            message: e.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault()
        console.log('Handle Submit', this.state.message)
        this.props.sendMessage(this.state.message)
        
    }



    render() {
        // console.log('this.state.message', this.state.message)

        return (
            <form
             onSubmit = {this.handleSubmit}
             className = 'message-form'>
                <input 
                    value = {this.state.message}
                    onChange = {this.handleChange}
                    placeholder = 'Enter Message Here'
                    type = 'text'/>
            </form>

        )
    }
}

export default MessageForm;