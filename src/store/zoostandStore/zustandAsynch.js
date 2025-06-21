import axios from 'axios'
import { create } from 'zustand'

export const UseTodoAsynch = create((set, get) => ({
	data: [],
	getCategory: async () => {
		try {
			let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
			set(() => ({ data: data.data }))
		} catch (error) {
			console.log(error)
		}
	},
	deletCategory: async id => {
		try {
			await axios.delete(`http://37.27.29.18:8001/api/categories?id=${id}`)
			get().getCategory()
		} catch (error) {
			console.log(error)
		}
	},
	addCategory: async user => {
		try {
			await axios.post('http://37.27.29.18:8001/api/categories', user)
			get().getCategory()
		} catch (error) {
			console.log(error)
		}
	},
	editCategory: async user => {
		try {
			await axios.put('http://37.27.29.18:8001/api/categories', user)
			get().getCategory()
		} catch (error) {
			console.log(error)
		}
	},
}))
