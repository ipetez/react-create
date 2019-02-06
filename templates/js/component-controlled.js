import React, {Component} from 'react';

class COMPONENT_NAME extends Component {
	//initial state
	state = {}

	static getDerivedStateFromProps(nextProps, prevState) {
		//set and return controlled states
	}

	render() {
		return (
			<div className="component_name">
				{ this.props.children }
			</div>
		)
	}
}

export default COMPONENT_NAME;