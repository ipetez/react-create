import {todoActionTypes} from '../actions/todo.actions'

const {TODO_ADD} = todoActionTypes;

const initialState = {
}

const todo = (state = initialState, action) => {
	switch(action.type){
		case TODO_ADD:
			
			break;
	}
	return state;
}

export default todo;