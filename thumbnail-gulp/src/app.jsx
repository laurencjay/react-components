var React = require('react');
var Thumbnaillist = require('./thumbnail-list');
var ReactDOM = require('react-dom');

var options = {
	thumbnailData: [{	
		title: 'See Tutorials',
		number: 32,
		header: 'Learn React',
		description: 'React is super cool',
		imageUrl: 'http://formatjs.io/img/react.svg'
	},{	
		title: 'See Tutorials',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gulp will speed up dev workflow',
		imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
	}]
};
//All classes must implement render method

//Ask react to render this class
//cookie dough cutout
var element = React.createElement(Thumbnaillist, options);

//When we ask react to render this class, we will tell it where to 
//place the rendered element in the dom
//needs to be in body tag to show up in the DOM
ReactDOM.render(element, document.querySelector('.target'));