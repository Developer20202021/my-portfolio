import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css';


const Footer = () => {


    return (
        <div    style={{
            backgroundColor:'#0B0952'
        }}>

            <div className="footer-container">


              





                  
                        <div className="button-container">

                        <div class="data-container">

	
                     <a className='a' href="https://drive.google.com/file/d/1gXXBqINJ5fNreCJ16D4wvVgvUFcHpCf_/view?usp=sharing" download target="_blank"> <span class="button">Download Resume </span></a>
                    </div>
                        <div class="data-container">

	
                    <span class="button">Projects</span>
                    </div>
                        <div class="data-container">

	
                    <span class="button">Home </span>
                    </div>
                    





                        </div>





                   

                  


                 





        

                <Grid item sx={12} md={12} lg={12}>

<div className="footer-copy">
© 2020 Mahadi Hasan. All rights reserved
</div>

</Grid>





            </div>
            
        </div>
    );
};

export default Footer;