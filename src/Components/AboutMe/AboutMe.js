import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './AboutMe.css'
import Skill from './Skill';

const AboutMe = () => {


    const [num, setNum] = useState(1);


    const about = (num) =>{

        setNum(num)



    }

    // const skill = ()=>{

    //     setNum(2)
    // }

    // const services = ()=>{

    //     setNum(3)
    // }




    return (
        <div>

            <div className="about-container">


               <div className="title-box">
                   <h2  style={{
                        color:'white',
                        fontSize:'70px'
                    }}>About Me</h2>
               </div>


               <div className="about-header">
                   <div className={num===1?'active':"list"} onClick={()=>about(1)}>About</div>
                   <div className={num===2?'active':"list"} 
                   onClick={()=>about(2)}
                   >Skills</div>
                 
                   
               </div>


               <div className="about-all-box">

                {num === 1?   <Grid container spacing={9}>


<Grid item xs={12} md={6} lg={6}>

    <div className="my-image">
        <img  className='my-photo'
                            src="https://i.ibb.co/cFcLMV0/about.png" alt=""  />
    </div>





</Grid>

<Grid item xs={12} md={6} lg={6}>

    <div className="about-image">
    <h2  style={{
     color:'white',
     fontSize:'50px'
 }}> I create products not just art</h2>
 
 <p style={{
     color:'white',
     fontSize:'20px'
 }}>Obviously I'm a Full Stack Web Developer with 1 year of experience. Experienced with all stages of the development

 </p>

 <button class="bubbly-button">Let's Talk</button>
      
    </div>





</Grid>

</Grid>:null}



        {num===2?
        <Skill></Skill>:null
    
    }



               </div>








            </div>


            
        </div>
    );
};

export default AboutMe;