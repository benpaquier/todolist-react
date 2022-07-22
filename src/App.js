import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import List from './components/List'
import Filters from './components/Filters'

class App extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      tasks: [],
      filter: ''
    }
  }

  addTask = description => {
    const newTask = {
      description: description,
      status: 'To do'
    }

    this.setState({ tasks: [newTask, ...this.state.tasks] })
  }

  deleteTask = index => {
    const clonedTasks = this.state.tasks.filter((task, i) => i !== index)

    this.setState({ tasks: clonedTasks })
  }

  modifyTask = (index, description, status) => {
    const clonedTasks = [...this.state.tasks]
    clonedTasks[index].description = description
    clonedTasks[index].status = status

    this.setState({ tasks: clonedTasks })
  }

  setFilter = status => {
    this.setState({ filter: status })
  }

  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.status === this.state.filter || this.state.filter === ''
    })

    return (
      <div className='container my-5'>
        <h1 className='mb-5'>Todolist React</h1>
        <Form addTask={this.addTask} />
        <Filters setFilter={this.setFilter} />
        <List
          tasks={filteredTasks}
          deleteTask={this.deleteTask}
          modifyTask={this.modifyTask}
        />
      </div>
    )
  }
}

export default App
