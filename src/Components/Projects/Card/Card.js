import { lineHeight } from '@mui/system';
import React from 'react';
import './Card.css'


const CardItem = (props) => {


    const {name, serverLink, clientLink, shortDesc, live, imgLink} = props?.data;






    return (
        // <div class="card">




        <div class="card-item">
              <div class="card-front"
              style={{
                  backgroundImage:`url(${imgLink})`
              }}
              
              ></div>
              <div class="card-back">
                  <p className='card-name'>{name}<br/><span style={{
                      fontSize:'10px',
                     
                  }}>{shortDesc}</span>
                  
                  <div class="social-icons">

                    <a href={live} class="draw"><button class="draw">Live</button></a>
                    <a href={clientLink} class="draw"><button class="draw">Client </button></a>
                    <a href={serverLink} class="draw"><button class="draw">Server</button></a>
                   
               
                    </div>
                  </p>
               
              </div>
          </div>
      
      
            
      
      
            
        //  </div>
    );
};

export default CardItem;