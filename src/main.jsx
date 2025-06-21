import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Provider } from 'react-redux'
import Synch from './pages/redux/synch.jsx'
import { store } from './store/reduxStore/reduxStore.js'
import JotaiSynch from './pages/jotai/synch.jsx'
import JotaiAsynch from './pages/jotai/asynch.jsx'
import Asynch from './pages/redux/Asynch.jsx'
import ZustandSynch from './pages/zoostand/synch.jsx'
import ZustandAsynch from './pages/zoostand/asynch.jsx'
import MobXSynch from './pages/mobX/synch.jsx'
import MobXAsynch from './pages/mobX/asynch.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App/>
			{/* <Synch />
			<Asynch/>
			<ZustandSynch/>
			<ZustandAsynch/>
			<MobXSynch/>
			<MobXAsynch/>
			<JotaiSynch/>
			<JotaiAsynch/> */}
		</Provider>
	</StrictMode>
)
