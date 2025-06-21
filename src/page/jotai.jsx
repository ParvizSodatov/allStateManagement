import { Link } from 'react-router-dom'

export default function Jotai() {
	return (
		<>
			<div>
				<h1>Jotai</h1>
				<button>
					<Link to='1'>synch</Link>
				</button>
				<button>
					<Link to='0'>Async</Link>
				</button>
			</div>
		</>
	)
}
