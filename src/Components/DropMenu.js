import React from 'react';


export default function DropMenu(props) {

    
        function changeHandler(e){
                    props.setDate(e.target.value)
        };

        return (
                <div>
                    <button className="dropbtn"> Choose new photo </button>
                    <div className="nasa-drop-content">
                        <input onChange={changeHandler} type="date" value={props.date}/>

                    </div>

                </div>

        )


};

