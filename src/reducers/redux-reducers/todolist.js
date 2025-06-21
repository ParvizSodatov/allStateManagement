import { createSlice } from '@reduxjs/toolkit'

export const todoListSynchSlice = createSlice({
	name: 'todo',
	initialState: {
		data: [
			{
				id: '1',
				name: 'asdf',
				status: false,
			},
			{
				id: '2',
				name: 'aziz',
				status: true,
			},
			{
				id: '3',
				name: 'sadaf',
				status: false,
			},
		],
	},
	reducers: {
		del: (state, action) => {
			state.data = state.data.filter(el => el.id != action.payload)
		},
		add:(state,action)=>{
			state.data=[...state.data,action.payload]
		},
		edit:(state,action)=>{
			state.data=state.data.map((el)=>el.id==action.payload.id?action.payload:el)
		}
	},
})

export default todoListSynchSlice.reducer
export const {del,add,edit}=todoListSynchSlice.actions
