import store	from '../store'

const add = () =>{
	store.dispatch({
		type: todoActionTypes.TODO_ADD,
		//data
	})
}

const todoActionTypes = {
	TODO_ADD: 'TODO_ADD'
}

export default {
	add,
	todoActionTypes
}

