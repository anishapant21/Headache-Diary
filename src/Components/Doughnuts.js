import React from 'react';
import {Doughnut} from "react-chartjs-2"

function Doughnuts({typesVal, typesCount}) {
    //console.log(props)
    // if (typesVal !=undefined){
    //     console.log(typesVal)

    // }
    console.log(typesVal)
    console.log(typesCount)
    const data = {
        labels: typesVal,
        datasets: [{
          label: 'Types',
          data: typesCount,
          backgroundColor: [
            '#EFE6DD',
            '#7EBDC2',
            '#F3DFA2',
            '#BB4430',
            '#55917F',
    
          ],
          hoverOffset: 4
          
        }],
        
      };

      
    
    
    return (
        <div>
            <Doughnut data={data} >
             
            </Doughnut>
            
        </div>
    )
}

export default Doughnuts


