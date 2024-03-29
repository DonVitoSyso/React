import * as React from "react";
import axios from "axios";
import "../styles/country.css";
import { Button, Table} from "react-bootstrap";
import Country from "./Country";

function Countries() {
    const [country, setCountry] = React.useState([]);

    if(!country.length) {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
        console.log(res);
        setCountry(res.data);
        })
    }
    

    return(
        <>
            <Table striped bordered hover className="country">
                <thead>
                    <tr><th>Country</th><th>Capital</th><th>Sub</th></tr>
                </thead>
                <tbody>
                {
                    country.map(country => <Country key={ country.cca3 } name={ country.translations.rus.official } capital={country.capital} />)
                }
                </tbody>
            </Table>
        </>
    )
}

export default Countries;