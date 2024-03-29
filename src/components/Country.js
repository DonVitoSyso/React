import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/select.css";


function Country(props){
    const [selected, setSelected] = useState(false);

    const GetSelected = () => {
        setSelected(true);
    }

    return(
        <tr className={selected ? "selected-country" : ""}>
            <td>{ props.name }</td>
            <td>{ props.capital }</td>
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