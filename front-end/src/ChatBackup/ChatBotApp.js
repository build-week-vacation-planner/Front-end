import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

// import "./components/TodoComponents/Todo.css"

const todosData = [
  {
    task: '',
    id: Date.now(),
    completed: false
  },

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }


  toggleItem = id => {
  console.log('working', id);

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


addTodo = todoName => {
  const newTodo = {
    task: todoName,
    id: Date.now(),
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
}

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

export default App;