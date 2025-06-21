import { useParams } from 'react-router-dom'

import JotaiSynch from '../pages/jotai/synch'
import JotaiAsynch from '../pages/jotai/asynch'
import MobXSynch from '../pages/mobX/synch'
import MobXAsynch from '../pages/mobX/asynch'

export default function JotaiById(){
	const {id}=useParams()
	return <>
	<div>
		{
			+id?<MobXSynch/>:<MobXAsynch/>
		}
	</div>
	
	</>
}