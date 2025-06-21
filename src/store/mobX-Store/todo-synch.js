import { makeAutoObservable } from 'mobx'

class TodoList{
	data=[{
		id:'1',
		name:'parviz',
		status:false
	},
	{
		id:'2',
		name:'amin',
		status:true
	}
]
	constructor(){
		makeAutoObservable(this)
	}
	del(id){
this.data=this.data.filter((el)=>el.id!=id)
	}
	add(user){
this.data=[...this.data,user]
	}
	edit(user){
		this.data=this.data.map((el)=>el.id==user.id?user:el)
	}
}

const todoList=new TodoList()
export default todoList