import React from 'react';

class MessageForm extends React.Component{
    constructor(props){
        super(props)
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

    handleSubmit(ef){
        ef.preventDefault()
        console.log('Handle Submit', ef)
        this.props.onSubmit(this.state.message)
        this.setState({
            message: '',
        })
        
        
    }



    render() {
        //console.log('this is message', this.state.message)
        return (
            <form
              onSubmit = {this.handleSubmit}
             className = 'message-form'>
                <input 
                    value = {this.state.message}
                    onChange = {this.handleChange}
                    placeholder = 'Enter Message Here'
                    type = 'text'
                    id = {this.input}
                    />
                <button type = 'submit'>Submit</button>
            </form>

        )
    }
}

export default MessageForm;