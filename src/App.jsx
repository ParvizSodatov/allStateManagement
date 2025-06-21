import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './page/home'
import Redux from './page/redux'
import ReduxById from './pagebyId/reduxById'
import Zustand from './page/zustand'
import ZustandById from './pagebyId/zustandByid'
import Jotai from './page/jotai'
import JotaiById from './pagebyId/jotaiById'
import MobX from './page/mobX'
import MobXById from './pagebyId/mobXByid'

export default function App(){

	const router=createBrowserRouter([
		{
			path:'/',
			element:<Layout/>,
			children:[
				{
					path:'/',
					element:<Home/>,
					index:true
				},
				{
					path:'/redux',
					element:<Redux/>
				},
				{
					path:'/redux/:id',
					element:<ReduxById/>
				},
					{
					path:'/zustand',
					element:<Zustand/>
				},
				{
					path:'/zustand/:id',
					element:<ZustandById/>
				},
					{
					path:'/jotai',
					element:<Jotai/>
				},
				{
					path:'/jotai/:id',
					element:<JotaiById/>
				},
					{
					path:'/mobX',
					element:<MobX/>
				},
				{
					path:'/mobX/:id',
					element:<MobXById/>
				},


			]
		}
	])
	return <RouterProvider router={router}/>
}