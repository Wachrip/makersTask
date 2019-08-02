import React from 'react';

function Country({ data }) {

    return (
        <li>
            Country name: {data.name}
            <img src = {data.flag} alt = {data.name}/>
            Capital: {data.capital}
        </li>
    );
}

export default Country;