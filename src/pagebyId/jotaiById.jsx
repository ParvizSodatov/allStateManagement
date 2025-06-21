import { useParams } from 'react-router-dom'

import JotaiSynch from '../pages/jotai/synch'
import JotaiAsynch from '../pages/jotai/asynch'

export default function JotaiById(){
	const {id}=useParams()
	return <>
	<div>
		{
			+id?<JotaiSynch/>:<JotaiAsynch/>
		}
	</div>
	
	</>
}