import React from 'react';
import { useState } from 'react/cjs/react.development';
import "../styles/log.css"

function Log() {

  const [logButton, setLogButton] = useState(true);
  
    return (
      





        
        <div className="col-lg-5 offset-lg-1 cold-md-6 col-12">
                         <div className="circle">
                             <div className="center">
                                 <p>Last Headache
                                     <br/>
                                     41 DAYS
                                     <br />
                                     ago

                                 </p>
                             </div>
                            
                         </div>
                         <button type="button" class="btn btn-info buttonlog">LOG HEADACHE</button>
                          
                        </div>
    )
}

export default Log;

{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="5" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</> */}

