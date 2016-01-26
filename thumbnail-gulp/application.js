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
var Badge = React.createClass ({displayName: "Badge",
	render: function() {

		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
  			this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
			)
	 }
	});
var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps){
		return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		}); 

		return React.createElement("div", null, 
			list
		)
	}
})

var Thumbnail = React.createClass ({displayName: "Thumbnail",
	render: function(){
		return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
        	React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
	}
});