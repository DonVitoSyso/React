 //import React from "react";
//import { Component } from "react";
import React, {Component, Fragment} from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

//  class App extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <Header />
//                 <Main />
//             </Fragment>
//         ); 
//     }
//  }

function App() {
    let someButton = "My button";

    return (
        <Fragment>
            <Header buttonName={ someButton } />
            <Main />
        </Fragment>
    ); 
}

 export default App;