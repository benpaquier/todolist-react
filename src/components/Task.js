import React, { Component } from 'react'

class Task extends Component {
  render() {
    const { task, index, deleteTask, setEditIndex } = this.props

    return (
      <div className="row py-2">
        <div className="col-6 d-flex align-items-center">
          <span>{task.description}</span>
        </div>
        <div className="col-2 d-flex align-items-center">
          <span>{task.status}</span>
        </div>
        <div className="col-2 d-flex align-items-center">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setEditIndex(index)}
          >
            Modifier
          </button>
        </div>
        <div className="col-2 d-flex align-items-center">
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTask(index)}
          >
            Supprimer
          </button>
        </div>
      </div>
    )
  }
}

export default Task
