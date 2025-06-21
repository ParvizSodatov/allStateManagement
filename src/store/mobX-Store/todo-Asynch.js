import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

class TodoAsynch {
	data = []
	constructor() {
		makeAutoObservable(this)
	}
	async getCategory() {
  try {
    let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
    runInAction(() => {
      this.data = data.data
    })
  } catch (error) {
    console.log(error)
  }
}
async deletCategory(id){
	try {
		await axios.delete(`http://37.27.29.18:8001/api/categories?id=${id}`)
		let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
    runInAction(() => {
      this.data = data.data
    })
	} catch (error) {
		console.log(error);
		
	}
}


async addCategory(user){
try {
	await axios.post('http://37.27.29.18:8001/api/categories',user)
	 let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
    runInAction(() => {
      this.data = data.data
    })
} catch (error) {
	console.log(error);
	
}
}

async editCategory(user){
try {
	await axios.put('http://37.27.29.18:8001/api/categories',user)
	 let { data } = await axios.get('http://37.27.29.18:8001/api/categories')
    runInAction(() => {
      this.data = data.data
    })
} catch (error) {
	console.log(error);
	
}
}
}
const todoAsynch=new TodoAsynch()
export default todoAsynch