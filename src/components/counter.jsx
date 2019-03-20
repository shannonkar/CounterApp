import React, { Component } from 'react';

class Counter extends Component {
		state = {
		value: this.props.value,
		tags: []
	};
//arrow functions and this
	handleIncrement = product => {
		console.log(product);
		this.setState({ value: this.state.value + 1});
		
	};

	

	renderTags(){
		if(this.state.tags.length === 0) return ;

		return <ul>{this.state.tags.map(tag => <li key ={ tag }>{ tag }</li>)}</ul>; 
	}
	render() {
		return (
			<div> 
			{this.props.children}
				<span className = {  this.getBadgeClasses() }>{this.formatCount()}</span>
				<button onClick= { () => this.handleIncrement({id: 1}) } //product
				className = "btn btn-secondary btn-sm"> Increment </button>
				<button onClick = {() =>this.props.onDelete(this.props.id)} className = "btn btn-danger btn-sm-m-2">Delete</button>
				<ul>
					
						{/*this.state.tags.length === 0 && "Please create a new tag"*/ }
						{this.renderTags()}
				</ul>
					
			</div>
			


			);
	}

formatCount(){
	const { value } = this.state;
	return value === 0 ? <h1>Zero</h1>: value;
}

getBadgeClasses() {
	let classes = 'badge m-2 badge-';
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;

}
}

export default Counter;