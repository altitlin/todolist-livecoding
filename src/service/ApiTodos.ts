import axios from 'axios'
import { GetTodoByIdPayloadParams } from '../store/todos/types'

export class ApiTodos {
  static async getTodos() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')

      return data
    } catch (error) {
      throw error
    }
  }

  static async getTodoById(payload: GetTodoByIdPayloadParams) {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { ...payload },
      })

      return data
    } catch (error) {
      throw error
    }
  }

  // static async deleteTodo(id) {
  //   try {
  //     // axios.de
  //   } catch (error) {

  //   }
  // }
}
