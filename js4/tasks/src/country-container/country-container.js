import React, {Component} from 'react';

import Country from '../country/country'
import './country-container.css'

export default class CountryContainer extends Component {
    state = {
        data : []
    }

    componentWillMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(result => this.setState({ data : result }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <ul className ="country-list">
                {this.state.data.map((item,index) => <Country
                    key={index}
                    data={item} 
                 />)}
            </ul>
        )
    }
}