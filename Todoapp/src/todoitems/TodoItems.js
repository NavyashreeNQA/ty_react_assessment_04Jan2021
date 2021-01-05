import React, { Component } from 'react';

class TodoItems extends Component {
  // constructor(props, context) {
  //   super(props, context);

  

  //   this.createTasks = this.createTasks.bind(this);
  // }

  // createTasks(item) {
  //   return <li key={item.key}>{item.text}</li>;
  // }
  constructor(props) {
    super(props);
   
    this.state = {
      items: []
    };
   
   
  }
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

export default TodoItems;