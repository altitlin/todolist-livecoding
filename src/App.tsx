import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/home-page'
import { TodoPage } from './pages/todo-page'
import { NotFound } from './pages/not-found'

function App() {
  return (
    <div className='containter'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:id' component={TodoPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App;
