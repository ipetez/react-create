import React, {Component} from 'react';
import { connect } from 'react-redux';

class COMPONENT_NAME extends Component {
	//initial state
	state = {}

	static getDerivedStateFromProps(nextProps, prevState) {
		//set and return controlled states
		return null;
	}

	render() {
		return (
			<div className="component_name">
				{ this.props.children }
			</div>
		)
	}
}

const mapStateToProps = state => {
	//state.theReducer
}

export default connect(mapStateToProps)(COMPONENT_NAME);