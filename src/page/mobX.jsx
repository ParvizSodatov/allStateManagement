import { Link } from 'react-router-dom'

export default function Jotai() {
	return (
		<>
			<h1>MobX</h1>
			<button>

			<Link to='1'>synch</Link>
			</button>
			<button>
			<Link to='0'>Async</Link>

			</button>
		</>
	)
}