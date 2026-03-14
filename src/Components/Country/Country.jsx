import React from 'react';
import Language from './Language';
import './Country.css'

const Country = ({country}) => {
    console.log(country)

    const {name:{common}, flags:{flags:{png, alt}}, area:{area}, population:{population}, languages:{languages}, currencies:{currencies}} = country;
    // console.log(languages)

    return (
        <div className='country'>
            <img src={png} alt={alt} />
            <h4>Name : {common} </h4>
            <h4>Population : {population}</h4>
            <h4>Area : {area} {area > 300000 ? "- Big Country" : "- Small Country"} </h4>
            <Language languages={languages}></Language>
        </div>
    );
};

export default Country;