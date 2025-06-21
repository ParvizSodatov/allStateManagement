import { observer } from 'mobx-react-lite'
import todoList from '../../store/mobX-Store/todo-synch'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'
const MobXSynch = observer(() => {
	const [openAdd, setOpenAdd] = useState(false)
	const [addName, setAddName] = useState('')
	const [addStatus, setAddStatus] = useState(false)
	// edit
	const [openEdit, setOpenEdit] = useState(false)
	const [editName, setEditName] = useState('')
	const [editStatus, setEditStatus] = useState(false)
	const [idx, setIdx] = useState(null)

	const handleEditClickOpen = el => {
		setOpenEdit(true)
		setEditName(el.name)
		setIdx(el.id)
		setEditStatus(el.status)
	}

	function handleEdit() {
		let newEditUser = {
			id: idx,
			name: editName,
			status: editStatus,
		}
		todoList.edit(newEditUser)
	}
	const handleEditClose = () => {
		setOpenEdit(false)
	}

	function handleAdd() {
		let newAddUser = {
			id: Date.now(),
			name: addName,
			status: addStatus,
		}
		todoList.add(newAddUser)
	}
	const handleAddClickOpen = () => {
		setOpenAdd(true)
	}

	const handleAddClose = () => {
		setOpenAdd(false)
	}
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
						<Button variant='outlined' onClick={handleAddClickOpen}>
							Add User
						</Button>
				<h1 style={{ textAlign: 'center' }}>MobX-Synch</h1>
			</div>
			<table style={{ width: '50%', margin: 'auto', textAlign: 'center' }}>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>status</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					{todoList.data.map(el => (
						<tr key={el.id}>
							<td>{el.id}</td>
							<td>{el.name}</td>
							<td>{el.status ? 'Active' : 'Inactive'}</td>
							<td>
								<div>
									<button onClick={() => todoList.del(el.id)} style={{backgroundColor:'red'}}>delet</button>
									<button onClick={() => handleEditClickOpen(el)}>edit</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* addModal */}
			<Dialog
				open={openAdd}
				onClose={handleAddClose}
				slotProps={{
					paper: {
						component: 'form',
						onSubmit: event => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries(formData.entries())
							const email = formJson.email
							console.log(email)
							handleAddClose()
						},
					},
				}}
			>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin='dense'
						id='name'
						name='email'
						label='Add Name'
						type='text'
						fullWidth
						value={addName}
						onChange={e => setAddName(e.target.value)}
						variant='standard'
					/>
					<select
						name=''
						id=''
						value={addStatus}
						onChange={e => setAddStatus(e.target.value)}
					>
						<option value='false'>Inactive</option>
						<option value='true'>Active</option>
					</select>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleAddClose}>Cancel</Button>
					<Button type='submit' onClick={handleAdd}>
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
			{/* editModal */}
			<Dialog
				open={openEdit}
				onClose={handleEditClose}
				slotProps={{
					paper: {
						component: 'form',
						onSubmit: event => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries(formData.entries())
							const email = formJson.email
							console.log(email)
							handleEditClose()
						},
					},
				}}
			>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin='dense'
						id='name'
						name='email'
						label='Add Name'
						type='text'
						fullWidth
						value={editName}
						onChange={e => setEditName(e.target.value)}
						variant='standard'
					/>
					<select
						name=''
						id=''
						value={editStatus}
						onChange={e => setEditStatus(e.target.value)}
					>
						<option value='false'>Inactive</option>
						<option value='true'>Active</option>
					</select>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleEditClose}>Cancel</Button>
					<Button type='submit' onClick={handleEdit}>
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
})

export default MobXSynch
