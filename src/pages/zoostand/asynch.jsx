import { useEffect } from 'react'
import { UseTodoAsynch } from '../../store/zoostandStore/zustandAsynch'
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'
export default function ZustandAsynch() {
	const { data, getCategory, deletCategory, addCategory,editCategory } = UseTodoAsynch()
	const [openAdd, setOpenAdd] = useState(false)
	const [addName, setAddName,] = useState('')


	// edit
	const [openEdit, setOpenEdit] = useState(false)
	const [editName, setEditName] = useState('')
	const [idx,setIdx]=useState(null)


const handleEditClickOpen = (el) => {
		setOpenEdit(true)
		setEditName(el.name)
		setIdx(el.id)
	}

	const handleEditClose = () => {
		setOpenEdit(false)
	}


function handleEdit(){
	let newEditUser={
		id:idx,
		name:editName,
	}
	editCategory(newEditUser)

}


	function handleAdd() {
		let newAddUser = {
			id: Date.now(),
			name: addName,
		}
		addCategory(newAddUser)
	}
	const handleAddClickOpen = () => {
		setOpenAdd(true)
	}

	const handleAddClose = () => {
		setOpenAdd(false)
	}
	useEffect(() => {
		getCategory()
	}, [])
	return (
		<>
		<h1 style={{textAlign:'center'}}>ASynch-Zustand</h1>
		<div style={{display:'flex',justifyContent:'space-around'}}> <Button variant='outlined' onClick={handleAddClickOpen}>
			Add User
			</Button></div>
			<table
				style={{ width: '50%', margin: '100px auto', textAlign: 'center' }}
			>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					{data.map(el => (
						<tr key={el.id}>
							<td>{el.id}</td>
							<td>{el.name}</td>
							<td>
								<div>
									<button onClick={() => deletCategory(el.id)} style={{backgroundColor:'red'}}>delet</button>
									<button onClick={()=>handleEditClickOpen(el)}>edit</button>
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
						value={addName}
						onChange={e => setAddName(e.target.value)}
						fullWidth
						variant='standard'
					/>
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
						value={editName}
						onChange={e => setEditName(e.target.value)}
						fullWidth
						variant='standard'
					/>
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
}
