import React from "react";
import ReactCountryFlag from 'react-country-flag';
import Countrydata from "./Countrydata";

function Country() {
    return (
        <>
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {Countrydata.map((country) => (
                    <ReactCountryFlag
                        key={country.id}
                        className={country.cName}
                        aria-label={country.countrys}
                    />
                ))}
            </div>

            <h1>SVG's</h1>
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {Countrydata.map((country) => (
                    <ReactCountryFlag
                        key={country.id}
                        className={country.cName}
                        aria-label={country.countrys}
                        svg
                        style={{
                            width: '3em',
                            height: '3em'
                        }}
                    />
                ))}
            </div>

        </>
    )
}

export default Country;