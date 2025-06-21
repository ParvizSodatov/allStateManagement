import { atom } from 'jotai'

export const data = atom([
	{ id: '1', name: 'asda', status: false },
	{ id: '2', name: 'qwdqwd', status: true },
	{ id: '3', name: 'addf', status: false },
])
export const deletUser = atom(null, (get, set, id) =>
	set(
		data,
		get(data).filter(el => el.id != id)
	)
)
export const editUser = atom(null, (get, set, user) =>
	set(
		data,
		get(data).map(el => (el.id == user.id ? user : el))
	)
)

export const addUser = atom(null, (get, set, user) =>
	set(data, [...get(data), user])
)
