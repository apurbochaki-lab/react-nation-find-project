import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log("Clicked", country)
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited);
    }

    
    console.log(visitedCountries);


    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Total Countries : {countries.length} </h3>
            <h3>Visited Countries : {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(visitedCountry => <li key={visitedCountry.cca3.cca3}>{visitedCountry.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;