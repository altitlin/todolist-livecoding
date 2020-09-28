import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import { Filters } from './components/filters'
import { Input } from './components/input'
import { TodoContainer } from './components/todo-container'

import { getId } from './utils/getId'

let TODOS = [
  {
    id: '1',
    title: 'Купить хлеб',
    isDone: false,
  },
  {
    id: '2',
    title: 'Купить машину',
    isDone: true,
  },
  {
    id: '3',
    title: 'Купить iphone 12',
    isDone: false,
  },
  {
    id: '4',
    title: 'Купить iphone 12 Pro Max',
    isDone: false,
  },
]

export const AppContext = createContext(null)

function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = title => {
    const newTodo = {
      title,
      id: getId(todos),
      isDone: false,
    }

    setTodos(prev => ([...prev, newTodo]))
    TODOS.push(newTodo)
  }

  const filterTodos = nameFilter => {
    switch (nameFilter) {
      case 'Done':
        setTodos(() => TODOS.filter(({ isDone }) => isDone))
        break

      case 'Active':
        setTodos(() => TODOS.filter(({ isDone }) => !isDone))
        break

      default:
        setTodos(prev => ([...TODOS]));
    }
  }

  const doneTodo = id => {
    const modifiedTodos = TODOS.map(todo => todo.id === id ? ({ ...todo, isDone: true }) : todo)

    setTodos(modifiedTodos)
    TODOS = modifiedTodos
  }

  const removeTodo = id => {
    const modifiedTodos = TODOS.filter(todo => todo.id !== id)

    setTodos(modifiedTodos)
    TODOS = modifiedTodos
  }

  useEffect(() => {
    setTodos(TODOS)
  }, [])

  return (
    <div className='containter'>
      <AppContext.Provider value={{ todos, doneTodo, removeTodo, filterTodos }}>
        <Input addNewTodo={addNewTodo} />
        <TodoContainer />
        <Filters />
      </AppContext.Provider>
    </div>
  )
}

export default App;
