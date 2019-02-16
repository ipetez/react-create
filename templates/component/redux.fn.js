import React from 'react';
import { connect } from 'react-redux';

const COMPONENT_NAME = (props) => (
	<div className="component_name"></div>
)

const mapStateToProps = state => {
	//state.theReducer
}

export default connect(mapStateToProps)(COMPONENT_NAME);