import axios from 'axios'
import { atom } from 'jotai'

export const todo = atom([])
export const getCategory = atom(null, async (get, set) => {
	try {
		let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
		set(todo, data.data)
	} catch (error) {
		console.log(error)
	}
})

export const deletCategory = atom(null, async (get, set, id) => {
	try {
		await axios.delete(`http://37.27.29.18:8001/api/categories?id=${id}`)
		let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
		set(todo, data.data)
	} catch (error) {
		console.log(error)
	}
})
export const addCategory = atom(null, async (get, set, user) => {
	try {
		await axios.post('http://37.27.29.18:8001/api/categories', user)
		let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
		set(todo, data.data)
	} catch (error) {
		console.log(error)
	}
})


export const editCategory = atom(null, async (get, set, user) => {
	try {
		await axios.put('http://37.27.29.18:8001/api/categories', user)
		let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
		set(todo, data.data)
	} catch (error) {
		console.log(error)
	}
})
