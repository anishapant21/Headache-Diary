import React from 'react';
import "../styles/header.css"
import Weather from './Weather';
import Note from './Note';
import Log from './Log';

function Header() {
    return (
        <div className="header-wrapper container-fluid">
            <div className="col-lg-7 offset-lg-2 col-12 mt-5 ml-2 mr-2">
            <div className="card">
                
                <div className="card-body">
                    <div className="col-lg-12">
                    <Weather />

                    </div>
                    <div className="row">
                        <Note />
                        <Log />
                       
                        
                    </div>
                

                </div>
                
            </div>

            </div>
           
            
            
        </div>
    )
}

export default Header
