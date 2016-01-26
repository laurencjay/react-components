var React = require('react');
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert', //What should show up on the button to open/close
	items: [
	'Apple Pie',
	'Peach Cobbler',
	'Coconut Cream Pie'
	]
};

//Ask react to render this class
//cookie dough cutout
var element = React.createElement(Dropdown, options);

//When we ask react to render this class, we will tell it where to 
//place the rendered element in the dom
//needs to be in body tag to show up in the DOM
React.render(element, document.querySelector('.target'));