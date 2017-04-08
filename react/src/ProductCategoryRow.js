import React, { Component } from 'react';

export default class FilterableProdductTable extends Component {
	constructor() {
		super()
	}

	render() {
		return(
				<h4 className="productCategoryRow">
					{this.props.category}
				</h4>
			)
	}
}