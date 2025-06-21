import { useParams } from 'react-router-dom'
import ZustandSynch from '../pages/zoostand/synch'
import ZustandAsynch from '../pages/zoostand/asynch'

export default function ZustandById(){
	const {id}=useParams()
	return <>
	<div>
		{
			+id?<ZustandSynch/>:<ZustandAsynch/>
		}
	</div>
	
	</>
}