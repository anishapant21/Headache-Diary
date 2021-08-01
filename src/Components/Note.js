import React, {useState} from 'react';
import "../styles/note.css";
import {FiFilePlus} from "react-icons/fi"

function Note() {
    const [note, setNote] = useState("DRINK PLENTY OF WATER YOU’LL FEEL BETTER")
    return (
        <div className="col-lg-5 offset-lg-1 col-md-6 col-10 offset-1">
            <div className="card mt-3 pb-5 writeme">
                
            <div className="written">
            {note}
            
            </div>
            <button type="button" class="btn btn-success buttonnote"> <FiFilePlus className="iconplus" /> ADD NOTE</button>

            </div>
                            
                        </div>
    )
}

export default Note;
