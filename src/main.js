/**
 * Created by ewang on 7/5/17.
 */


$ = jQuery = require('jquery');
var React = require('react')
var ReactDOM = require('react-dom');
var Home = require('./components/homePage')
var About = require('./components/about/aboutPage');


class App extends React.Component{
    render(){
            var Child;
            switch(this.props.route){
                case 'about': Child =About;
                                break;
                default: Child = Home;
            }
            return(
                <div>
                    <Child />
                </div>
            );
    }
}


function render(){
        var route = window.location.hash.substr(1);
        ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render); //hashchange on url when switch
// var App =console.log('Hellp world from browserfy');
//
//
// module.exports = App;
render();
ReactDOM.render(<Home />, document.getElementById('app'));