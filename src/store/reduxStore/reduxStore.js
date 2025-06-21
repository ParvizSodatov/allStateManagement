import { configureStore } from '@reduxjs/toolkit'
import todoListSynchSlice from '../../reducers/redux-reducers/todolist'
import todoAsynch from '../../reducers/redux-reducers/asynchTodoList'

export const store = configureStore({
	reducer: {
		todo: todoListSynchSlice,
		todos: todoAsynch,
	},
})
