// List.js
//    -> Gere l'affichage des taches
//    -> Remontée de données
//        - Suppression d'une tache
//        - Modification d'une tache
//    -> Gere son state a lui
//        - Condition pour afficher la tache ou le formulaire de modif

import React, { Component } from 'react'

import Task from './Task'
import EditTaskForm from './EditTaskForm'

class List extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      editIndex: null,
      editDescription: '',
      editStatus: ''
    }
  }

  setEditIndex = index => {
    this.setState({
      editIndex: index,
      editDescription: this.props.tasks[index].description,
      editStatus: this.props.tasks[index].status
    })
  }

  handleTaskDescriptionChange = e => {
    this.setState({ editDescription: e.target.value })
  }

  handleStatusChange = e => {
    this.setState({ editStatus: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { editIndex, editDescription, editStatus } = this.state

    this.props.modifyTask(editIndex, editDescription, editStatus)
    this.reset()
  }

  reset = () => {
    this.setState({
      editIndex: null,
      editDescription: '',
      editStatus: ''
    })
  }

  render() {
    return (
      <div className='mt-5'>
        <h3>List</h3>
        <ul className='list-group'>
          {this.props.tasks.length === 0 && <p>No tasks yet</p>}
          {this.props.tasks.map((task, index) => (
            <li key={index} className='list-group-item'>
              {this.state.editIndex !== index ? (
                <Task
                  task={task}
                  index={index}
                  deleteTask={this.props.deleteTask}
                  setEditIndex={this.setEditIndex}
                />
              ) : (
                <EditTaskForm
                  editDescription={this.state.editDescription}
                  handleTaskDescriptionChange={this.handleTaskDescriptionChange}
                  handleStatusChange={this.handleStatusChange}
                  handleSubmit={this.handleSubmit}
                  reset={this.reset}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List
