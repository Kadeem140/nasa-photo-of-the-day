import React from 'react';


function Body ({ nasaData }){
    // console.log(nasaData);
        return (
            <div>
                <img src= {nasaData.url} alt ="NASA POTD" />
            </div>
        )

}

export default Body;