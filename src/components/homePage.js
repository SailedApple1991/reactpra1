/**
 * Created by ewang on 7/5/17.
 */
"use strict";

var React = require('react');

// var Home = React.createClass({
//     render: function () {
//         return (
//             <div className="jumbotron">
//                 <h1>eric administration</h1>
//                 <p>React, React Router and Flux for ultra responsive apps.</p>
//             </div>
//         );
//     }
// });
class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>eric administration</h1>
                <p>React, React Router and Flux for ultra responsive apps.</p>
            </div>
        );
    }

}

module.exports = Home;