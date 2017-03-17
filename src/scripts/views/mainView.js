import React from 'react'
import Backbone from 'backbone'
import STORE from '../store'

var MainView = React.createClass({
	componentWillMount: function() {
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	render: function() {
		return(
			<div className='mainBody'>
				<LeftSide />
				<RightSide stats={STORE.data}/>
			</div>
		)
	}
})

var RightSide = React.createClass({
	render: function() {
		return(
			<div className='rightSide'>
				<p className='strenthTally'>STRENGTH: {this.props.stats.pushUpsTot}</p>
				<p className='knowledgeTally'>KNOWLEDGE: {this.props.stats.booksTot}</p>
				<p className='dishesTally'>DISHES CLEANED: {this.props.stats.dishesTot}</p>
				<p className='healtinessTally'>HEALTHINESS: {this.props.stats.veggiesTot}</p>
				<p className='choresTally'>CHORES DONE: {this.props.stats.choresTot}</p>
			</div>
		)
	}
})

var LeftSide = React.createClass({
	render: function() {
		return(
			<div className='leftSide'>
				<DoPushUp />
				<ReadBook />
				<CleanDishes />
				<EatVeggies />
			</div>
		)
	}
})

var DoPushUp = React.createClass({
	handleClick: function() {
		STORE.set('pushUpsTot')
	},
	render: function() {
		return(
			<button 
			className='pushUpButton' 
			onClick={this.handleClick}>
			Do Push Ups</button>
		)
	}
})

var ReadBook = React.createClass({
	handleClick: function() {
		STORE.set('booksTot')
	},
	render: function() {
		return(
			<button
			className='readBookButton'
			onClick={this.handleClick}
			>Read a Book</button>
		)
	}
})

var CleanDishes = React.createClass({
	handleClick: function() {
		STORE.set('dishesTot')
	},
	render: function() {
		return(
			<button
			className='cleanDishesButton'
			onClick={this.handleClick}
			>Clean Some Dishes</button>
		)
	}
})

var EatVeggies = React.createClass({
	handleClick: function() {
		STORE.set('veggiesTot')
	},
	render: function() {
		return(
			<button
			className='eatVeggiesButton'
			onClick={this.handleClick}
			>Eat Vegetables</button>
		)
	}
})

export default MainView