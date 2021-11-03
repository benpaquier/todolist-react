// App.js
//    -> Gere le state des tasks
//        - Ajouter une tache
//        - Supprimer une tache
//        - Modifier
//    -> Gere le state filter

// Form.js
//    -> Gere l'affichage du form
//    -> Gere un state description de tache
//    -> La remontée de données
//        - A la soumission du form,
//          on passe la valeur de l'input vers App.js qui va créer une nouvelle tache

// List.js
//    -> Gere l'affichage des taches
//    -> Remontée de données
//        - Suppression d'une tache
//        - Modification d'une tache
//    -> Gere son state a lui
//        - Condition pour afficher la tache ou le formulaire de modif

// Filters.js
//    -> Gere l'affichage de 4 boutons pour filtrer
//    -> Remontée de données
//         - Appliquer le filtre

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
      filter: ""
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.modifyTask = this.modifyTask.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }

  addTask(description) {
    const newTask = {
      description: description,
      status: "To do"
    }

    this.setState({ tasks: [newTask, ...this.state.tasks] })
  }

  deleteTask(index) {
    const clonedTasks = this.state.tasks.filter((task, i) => i !== index)

    this.setState({ tasks: clonedTasks })
  }

  modifyTask(index, description, status) {
    const clonedTasks = [...this.state.tasks]
    clonedTasks[index].description = description
    clonedTasks[index].status = status

    this.setState({ tasks: clonedTasks })
  }

  setFilter(status) {
    this.setState({ filter: status })
  }

  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.status === this.state.filter || this.state.filter === ""
    })

    return (
      <div className="container my-5">
        <h1 className="mb-5">Todolist React</h1>
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
