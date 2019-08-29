import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

// import "./components/TodoComponents/Todo.css"

const todosData = [
  {
    senderId: '',
    task: '',
    id: Date.now(),
    completed: false
  },

];

class ChatBotApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }


  toggleItem = id => {
  console.log('working', id);
//What is the item
   this.setState({
      todos: this.state.todos.map(item => {
       if (item.id === id) {
         return {
            ...item,
           completed: !item.completed
         };
       } else {
         return item;
       }
      })
   });
  };


addTodo = (todoName, userName )=> {
  const newTodo = {
    senderId: userName,
    task: todoName,
    id: Date.now(),
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
}

// addSenderId = userName => {
//   const newUser = {
//     senderId: userName,
//   }

//   this.setState({
//     todos: [...this.setState.todos, newUser]
//   })
// }



clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter(item => !item.completed),
  });
}
  
  render() {
    return (
      <div class = 'app'>
        <h2>Name of Chat Room Here</h2>
        <MessageList
          clearCompleted = {this.clearCompleted}
          todos = {this.state.todos}
          toggleItem = {this.toggleItem}
        />
        <MessageForm addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default ChatBotApp;
