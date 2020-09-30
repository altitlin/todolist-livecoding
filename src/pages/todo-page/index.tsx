import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTodoById } from '../../store/todos/actions'
import { RootState } from '../../store/reducer'
import { Todo } from '../../store/todos/types'

type StateProps = {
  todo: Todo | null
}

type DispatchProps = {
  getTodoById: typeof getTodoById.request
}

type Props = StateProps & DispatchProps

interface ParamsType {
  id: string
}

const ConnectedTodoPage = ({
  todo,
  getTodoById,
}: Props) => {
  const { id } = useParams<ParamsType>()

  useEffect(() => {
    getTodoById({ id })
  }, [getTodoById])

  return (
    <>
      <Link to='/'>Вернуться назад</Link>
      <div>Todo page</div>
      <div>{todo && todo.title}</div>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  todo: state.todos.todo,
})

export const TodoPage = connect(mapStateToProps, { getTodoById: getTodoById.request })(ConnectedTodoPage)
