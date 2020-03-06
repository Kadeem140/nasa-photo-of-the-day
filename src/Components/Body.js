import React from 'react';


function Body ({ nasaData }){
    console.log('Body Component', nasaData);
        return (
            <div>
                <p>{nasaData.title}</p>
                <img src= {nasaData.url} alt ="NASA POTD" />

                <p>{nasaData.explanation}</p>
            </div>
        )

}

export default Body;