import { create } from 'zustand'
import { edit } from '../../reducers/redux-reducers/todolist'

export const UseTodoSynch = create(set => ({
	data: [
		{
			id: '1',
			name: 'asd',
			status: false,
		},
		{
			id: '2',
			name: 'daff',
			status: true,
		},
		{
			id: '3',
			name: 'dfaf',
			status: false,
		},
	],
	del: id => set(state => ({ data: state.data.filter(el => el.id != id) })),
	add: user => set(state => ({ data: [...state.data, user] })),
	edit: user =>
		set(state => ({
			data: state.data.map(el => (el.id == user.id ? user : el)),
		})),
}))
