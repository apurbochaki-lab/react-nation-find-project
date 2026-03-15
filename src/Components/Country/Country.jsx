import React, { useState } from 'react';
import Language from './Language';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    // console.log(handleVisitedCountries)

    const [visited, setVisited] = useState(false)
    // visited : true --> Visited
    // visited : false --> Not Visited
    

    const handleVisit = () => {
        // Basic toggle system
        // if (visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true)
        // }

        // 2nd System
        // setVisited(visited ? false : true)

        // 3rd System
        setVisited(!visited)
        handleVisitedCountries(country)
        
    }

    const {name:{common}, flags:{flags:{png, alt}}, area:{area}, population:{population}, languages:{languages}, currencies:{currencies}} = country;
    // console.log(currencies)

    return (
        // <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
        <div className={`country ${visited && 'visited'}`}>

            <img src={png} alt={alt} />
            <h4>Name : {common} </h4>
            <h4>Population : {population}</h4>
            <h4>Area : {area} {area > 300000 ? "- Big Country" : "- Small Country"} </h4>
            <Language languages={languages}></Language>
            <h4>Currency :  </h4>

            <button onClick={handleVisit} className={`btn ${visited && 'btn-visited'}`}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;