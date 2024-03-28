import React, { Fragment, useState } from "react";
import axios from "axios";
import "../styles/country.css"; 
import { Button, Table} from "react-bootstrap";

function Countries() {
    const [country, setCountry] = useState([]);

    if(!country.length) {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
        console.log(res);
        setCountry(res.data);
        })
    }
    

    return(
        <Fragment>
            <Table striped bordered hover country>
                <thead>
                    <tr><th>Country</th><th>Capital</th><th>Sub</th></tr>
                </thead>
                <tbody>
                {
                    country.map(country => 
                        <tr key={country.cca3}>
                            <td>{country.translations.rus.official}</td>
                            <td>{country.capital}</td>
                            <td>
                                <Button variant="success"> Add </Button>
                            </td>
                        </tr>
                        )
                }
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Countries;