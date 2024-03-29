import * as React from "react";
import "../styles/Main.css"
import Countries from "./Countries";

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
    return (
        <>
            <main>
                <Countries />
            </main>
        </>
    )
}

export default Main;