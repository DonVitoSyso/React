 //import React from "react";
//import { Component } from "react";
import * as React from "react";
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
        <>
            <Header buttonName={ someButton } />
            <Main />
        </>
    ); 
}

 export default App;