import Backbone from 'backbone'


var STORE = Object.assign({}, Backbone.Events, {
	data: {
		pushUpsTot: 0,
		booksTot: 0,
		dishesTot: 0,
		veggiesTot: 0,
		choresTot: 0
	},
	set: function(obj) {
		this.data[obj] += 1
		this.data.choresTot += 1
		this.data = Object.assign(this.data, this.data[obj], this.data.choresTot)
		this.trigger('dataUpdated')
	}
})


export default STORE