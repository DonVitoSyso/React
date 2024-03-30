import * as React from "react";
import "../styles/Main.css"
import Countries from "./Countries";
import Children from "./Children";
import { Alert } from "react-bootstrap";

// class Main extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <main>
//                     <h1>  Hello world </h1>
//                 </main>
//             </Fragment>
//         )
//     }
// }

function Main() {
    let Data = <Alert> Data </Alert>;

    return (
        <>
            <main>
                <Children> { Data } </Children>
                <Countries />
            </main>
        </>
    )
}

export default Main;