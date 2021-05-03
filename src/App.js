import React from 'react';
import Todoform from "./components/TodoForm";
import ChoreList from "./components/TodoList";
import './components/Todo.scss';

const chores =[
  {
    name: 'Feed the dog',
    id: 0,
    completed: false,
  },
  {
    name: 'Do the dishes',
    id: 1,
    completed: false,
  },
  {
    name: 'Find motivation',
    id: 2,
    completed: false,
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chores: chores
    }
  }

  toggleItem = (id) => {
    const newChores = this.state.chores.map(chore => {
      if (chore.id === id) {
        return {
          ...chore,
          completed: !chore.completed
        }
      } else {
        return (chore);
      }
    });

    this.setState({
      chores: newChores
    });
  }

  addItem = (title) => {
    this.setState({
      chores: [...this.state.chores, {
        name: title,
        id:this.state.chores.length,
        completed: false
      }]
    });
  }

  clearChore = () => {
    this.setState({
      chores: this.state.chores.filter(chore => (!chore.completed))
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo Chore App!</h2>
        <Todoform addItem={this.addItem} />
        <ChoreList clearChore={this.clearChore} toggleItem={this.toggleItem} chores={this.state.chores} />
      </div>
    );
  }
}

export default App;
