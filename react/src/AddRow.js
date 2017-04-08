import React, { Component } from 'react';


export default class AddRow extends Component {
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { category: '', 
			price: '', 
			stocked: true, 
			name: ''
		};
	}
	handleCategoryChange(e) {
		this.setState({category: e.target.value});
	}

	handlePriceChange(e) {
		this.setState({price: e.target.value});
	}

	handleNameChange(e) {
		this.setState({name: e.target.value});
	}

	handleSubmit(e) {
		e.preventDafult();
		var newItem = {
			category: this.state.category,
			price: this.state.price,
			name: this.state.name,
			id: Date.now()
		};
		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			category: '',
			price: '',
			stocked: true,
			name: ''
		}));
	}


	render() {
		return(
			<div className = "AddRow">
				<form onSubmit = {this.handleSubmit}>
					<input type="text"
					placeholder="Category..."
					value={this.state.category}
					onChange={this.handleCategoryChange}/>
					<input type="text"
					placeholder="Price..."
					value={this.state.price}
					onChange={this.handlePriceChange}/>
					<input type="text"
					placeholder="Name..."
					value={this.state.name}
					onChange={this.handleNameChange}/>
					<button>{'Add new element'}</button>
				</form>
			</div>
			);
	}
}