// Form.js
//    -> Gere l'affichage du form
//    -> Gere un state description de tache
//    -> La remontée de données
//        - A la soumission du form,
//          on passe la valeur de l'input vers App.js qui va créer une nouvelle tache

import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      task: ''
    }
  }

  handleTaskDescriptionChange = e => {
    this.setState({ task: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.task)
    this.setState({ task: '' })
  }

  render() {
    return (
      <form className='row mb-5' onSubmit={this.handleSubmit}>
        <div className='col-11'>
          <input
            type='text'
            className='form-control col-8'
            placeholder='Task description'
            onChange={this.handleTaskDescriptionChange}
            value={this.state.task}
          />
        </div>
        <div className='col-1 d-flex justify-content-end'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default Form
