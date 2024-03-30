import * as React from "react";
import { Button } from "react-bootstrap";
import "../styles/select.css";


function Country({name, capital}){
    const [selected, setSelected] = React.useState(false);

    const GetSelected = () => {
        setSelected(true);
    }

    return(
        <tr className={selected ? "selected-country" : ""}>
            <td>{ name }</td>
            <td>{ capital }</td>
            <td>
                {selected ?
                    <Button variant="danger" onClick={() => setSelected(false)}> Remove </Button>
                    : 
                    <Button variant="success" onClick={GetSelected}> Add </Button>
                }
                </td>
        </tr>
    )
}

Country.defaultProps = {
    capital: "NOT AVAILABLE! ! !"
}

export default Country;