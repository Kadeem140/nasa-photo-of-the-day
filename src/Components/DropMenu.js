import React from 'react';


export default function DropMenu(props) {

    console.log('testing', props.setDate);
        function changeHandler(){
                    // props.setDate
        };

        return (
                <div>
                    <button className="dropbtn"> Choose new photo </button>
                    <div className="nasa-drop-content">
                        <input type="date" value=""/>

                    </div>

                </div>

        )


};

