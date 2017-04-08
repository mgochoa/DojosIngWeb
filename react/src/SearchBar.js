import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
				this.change= this.change.bind(this);
				this.stockChange= this.stockChange.bind(this);
    }
		change(e){
			this.props.handleChange(e.target.value)
		}
		stockChange(e){
			let value= e.target.type === 'checkbox' ?  e.target.checked : e.target.value
			this.props.handleStock(value)
		}
    render() {
        return (

          <form className="form-horizontal">
          <div className="form-group">
   <label  className="col-sm-2 control-label">Filtrar</label>
   <div className="col-sm-10">
<input type="text" className="form-controle" onChange={this.change} value={this.props.text}/>
   </div>
 </div>
 <div className="form-group">
  <div className="col-sm-offset-2 col-sm-10">
    <div className="checkbox">
      <label>
      <input type="checkbox" value={this.props.check} onClick={this.stockChange}/> In Stock Only
      </label>
    </div>
  </div>
</div>
</form>
							)
    }

}
