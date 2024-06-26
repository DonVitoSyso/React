import * as React from "react";
import "../styles/Header.css"

// let someButton = "My button";
// const headerClick = () => {
//     console.log("Hello!");
// }

// class Header extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <header>
//                     Header JSX in Component
//                     <button className="some-button" onClick={headerClick}>{ someButton }</button>
//                 </header>
//             </Fragment>
//         );
//     }
// }

function Header(props) {
    // let someButton = "My button";
    // let count = 0;
    const [count, SetNewCount] = React.useState(0);

    const headerClick = () => {
        SetNewCount(count + 1);
        // console.log("Hello!"); 
    }

    return (
        <>
            <header>
                Header JSX in Component
                <button className="some-button" onClick={headerClick}>
                    { props.buttonName } clicked { count } times
                    </button>
            </header>
        </>
    );
}

export default Header; 