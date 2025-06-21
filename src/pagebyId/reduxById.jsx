import {  useParams } from 'react-router-dom'
import Synch from '../pages/redux/synch'
import Asynch from '../pages/redux/Asynch'

export default function ReduxById(){
	const {id}=useParams()
	return <>
	<div>
		{
			+id?<Synch/>:<Asynch/>
		}
	</div>
	
	</>
}