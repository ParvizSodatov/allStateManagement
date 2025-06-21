import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<>
			<div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
				<button>
					<Link
						to='/'
						style={{
							textDecoration: 'none',
						}}
					>
						Home
					</Link>
				</button>
				<button>
					<Link
						to='/redux'
						style={{
							textDecoration: 'none',
						}}
					>
						Redux
					</Link>
				</button>
				<button>
					<Link
						to='/zustand'
						style={{
							textDecoration: 'none',
						}}
					>
						Zustand
					</Link>
				</button>
				<button>
					<Link
						to='/jotai'
						style={{
							textDecoration: 'none',
						}}
					>
						Jotai
					</Link>
				</button>
				<button>
					<Link
						to='/mobX'
						style={{
							textDecoration: 'none',
						}}
					>
						mobX
					</Link>
				</button>
			</div>
			<Outlet />
		</>
	)
}
