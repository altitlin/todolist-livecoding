import React, { useState, useMemo, useEffect, ChangeEvent, KeyboardEvent } from 'react'
import { connect } from 'react-redux'
import { Input } from '../components/input'
import { Todos } from '../components/todo-container'
import { Filters } from '../components/filters'
import { Lodaer } from '../components/loader'

import { RootState } from '../store/reducer'
import { addNewTodo, doneTodo, removeTodo, changeFilter, requestTodos } from '../store/todos/actions'
import { Todo as TTodo } from '../store/todos/types'

import { getId } from '../utils/getId'

type StateProps = {
  todos: Array<TTodo>
  activeFilter: string
  loading: boolean
}

type DispatchProps = {
  addNewTodo: typeof addNewTodo
  doneTodo: typeof doneTodo
  removeTodo: typeof removeTodo
  changeFilter: typeof changeFilter
  requestTodos: typeof requestTodos.request
}

type Props = StateProps & DispatchProps

const ConnectedTodo = ({
  todos,
  activeFilter,
  loading,
  addNewTodo,
  doneTodo,
  removeTodo,
  changeFilter,
  requestTodos,
}: Props) => {
  const [inputText, setInputText] = useState<string>('')

  const filterTodos = (todos: Array<TTodo>, nameFilter: string): Array<TTodo> => {
    switch (nameFilter) {
      case 'Done':
        return todos.filter(({ completed }) => completed)

      case 'Active':
        return todos.filter(({ completed }) => !completed)

      default:
        return todos
    }
  }

  const filteredTodos: Array<TTodo> = useMemo(
    () => filterTodos(todos, activeFilter),
    [todos, activeFilter]
  )

  const countActiveTodos: number = useMemo(
    () => filteredTodos.filter(({ completed }) => !completed).length,
    [filteredTodos]
  )

  const addTodo = ({ key }: KeyboardEvent<HTMLInputElement>): void => {
    const newTodo = {
      title: inputText,
      id: getId(todos),
      completed: false,
    }

    if (key === 'Enter' && inputText !== '' && inputText.length >= 3) {
      addNewTodo(newTodo)
      setInputText('')
    }
  }

  const removeTask = (id: number) => removeTodo(id)

  const completeTodo = (id: number) => doneTodo(id)

  const inputChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => setInputText(value)

  useEffect(() => {
    requestTodos(null)
  }, [requestTodos])

  return (
    <>
      <Input value={inputText} onChange={inputChangeHandler} onKeyPress={addTodo} />
      {loading && <Lodaer />}
      {todos.length !== 0 && <Todos todos={filteredTodos} removeTodo={removeTask} doneTodo={completeTodo} />}
      {todos.length !== 0 && <Filters count={countActiveTodos} onChangeFilter={changeFilter} />}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos,
  activeFilter: state.todos.activeFilter,
  loading: state.todos.loading,
})

export const Todo = connect(mapStateToProps, {
  addNewTodo,
  doneTodo,
  removeTodo,
  changeFilter,
  requestTodos: requestTodos.request,
})(ConnectedTodo)
