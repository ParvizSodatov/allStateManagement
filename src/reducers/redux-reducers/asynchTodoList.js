import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const getCategory = createAsyncThunk('todos/getCategory', async () => {
	try {
		let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
		return data.data
	} catch (error) {
		console.log(error)
	}
})
export const deletCategory = createAsyncThunk(
	'todos/deletCategory',
	async (id, { dispatch }) => {
		try {
			await axios.delete(`http://37.27.29.18:8001/api/categories?id=${id}`)
			dispatch(getCategory())
		} catch (error) {
			console.log(error)
		}
	}
)
export const addCategory = createAsyncThunk(
	'todos/addCategory',
	async (user, { dispatch }) => {
		try {
			await axios.post(`http://37.27.29.18:8001/api/categories`, user)
			dispatch(getCategory())
		} catch (error) {
			console.log(error)
		}
	}
)

export const editCategory = createAsyncThunk(
	'todos/addCategory',
	async (user, { dispatch }) => {
		try {
			await axios.put(`http://37.27.29.18:8001/api/categories`, user)
			dispatch(getCategory())
		} catch (error) {
			console.log(error)
		}
	}
)

export const todoAsynch = createSlice({
	name: 'todos',
	initialState: {
		data: [],
	},
	extraReducers: builder => {
		builder.addCase(getCategory.fulfilled, (state, action) => {
			state.data = action.payload
		})
	},
})
export default todoAsynch.reducer
