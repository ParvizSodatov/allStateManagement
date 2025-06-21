import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store/reduxStore/reduxStore'
import { add, del, edit } from '../../reducers/redux-reducers/todolist'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'
export default function Synch() {
	const { data } = useSelector(store => store.todo)
	// add
	const [openAdd, setOpenAdd] = useState(false)
	const [addName, setAddName] = useState('')
	const [addStatus, setAddStatus] = useState('')


	// edit
	const [openEdit, setOpenEdit] = useState(false)
	const [editName, setEditName] = useState('')
	const [editStatus, setEditStatus] = useState('')
const[idx,setIdx]=useState('')
	const dispatch = useDispatch()

const handleEditClickOpen = (el) => {
		setOpenEdit(true)
		setEditName(el.name)
		setEditStatus(el.status)
		setIdx(el.id)

	}
	const handleEdit=()=>{
let newEditUser={
	id:idx,
	name:editName,
	status:editStatus
}
dispatch(edit(newEditUser))
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
		dispatch(add(newAddUser))
	}
	const handleAddClickOpen = () => {
		setOpenAdd(true)
	}

	const handleAddClose = () => {
		setOpenAdd(false)
	}
	return (
		<>
		<h2>SynchRedux</h2>
		<div style={{display:'flex',justifyContent:'space-around'}}>
			<Button variant='outlined' onClick={handleAddClickOpen}>
			+AddModal
			</Button>
		</div>
			<table style={{width:'60%',margin:'auto',textAlign:'center',fontSize:'23px'}}>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>status</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					{data.map(el => (
						<tr key={el.id}>
							<td>{el.id}</td>
							<td>{el.name}</td>
							<td>{el.status ? 'Active' : 'Inactive'}</td>
							<td>
								<div>
									<button style={{backgroundColor:'red',color:'white'}} onClick={() => dispatch(del(el.id))} >delet</button>
									<button style={{background:'violet',color:'white'}} onClick={()=>handleEditClickOpen(el)}>edit</button>
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
					<select
						name=''
						id=''
						onChange={e => setAddStatus(e.target.value === 'true')}
						value={addStatus}
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
						value={editName}
						onChange={e => setEditName(e.target.value)}
						fullWidth
						variant='standard'
					/>
					<select
						name=''
						id=''
						onChange={e => setEditStatus(e.target.value === 'true')}
						value={editStatus}
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
}
