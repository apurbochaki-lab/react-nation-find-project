import React from 'react';

const Language = ({ languages }) => {
    // console.log(languages) // This is object coming by looping through map()

    // Object to Array
    const LanguageList = Object.values(languages)
    // console.log(LanguageList.join(", "))

    return (
        <div>
            <h4>Languages : {LanguageList.join(", ")} </h4>
        </div>
    );
};

export default Language;