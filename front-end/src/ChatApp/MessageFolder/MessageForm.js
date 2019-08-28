import React from 'react';

class MessageForm extends React.Component{
    constructor(){
        super()
        this.state = {

            message: '',
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault()
        //console.log('Handle Submit', this.state.message)
        this.props.sendSimpleMessage(this.state.message)
        
    }



    render() {
        return (
            <form
              //onSubmit = {this.handleSubmit}
             className = 'message-form'>
                <input 
                    value = {this.state.message}
                    onChange = {this.handleChange}
                    placeholder = 'Enter Message Here'
                    type = 'text'
                    id = 'message-text'/>
                <button type = 'submit' onSubmit ={this.handleSubmit}>Submit</button>
            </form>

        )
    }
}

export default MessageForm;