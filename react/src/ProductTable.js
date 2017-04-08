import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
	render() {
		let rows = []
		let last_category = null;
		if(this.props.products != null) {
			this.props.products.forEach((product) =>{
				if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
					return;
				}
				if(product.category !== last_category) {
					rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
				}
				rows.push(<ProductRow product = {product} key={product.name}/>);
				last_category = product.category;
			});
		} else {
			rows.push(<h1>CARGANDO!!!</h1>);
		}
		return(
				<table  className="table"  >
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			);
	}
}
