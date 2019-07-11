import store	from '../store'

const ACTION_EVENT = () =>{
	store.dispatch({
		type: COMPONENT_NAMEActionTypes.ACTION_TYPE,
		//data
	})
}

const COMPONENT_NAMEActionTypes = {
	ACTION_TYPE: 'ACTION_TYPE'
}

export default {
	ACTION_EVENT,
	COMPONENT_NAMEActionTypes
}

