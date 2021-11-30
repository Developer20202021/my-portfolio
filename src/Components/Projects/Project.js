import React, { useEffect, useState } from 'react';
import CardItem from './Card/Card';
import './Project.css'

const Project = () => {


    const [getInfo, setInfo] = useState([]);



    useEffect(()=>{


        const projects = [

            {
                name:'BikePoint',
                serverLink:'https://github.com/Developer20202021/bike-point-server',
               clientLink:'https://github.com/Developer20202021/bike-point-client',
               shortDesc:`This is a Database based website.Here everything from buying a bike to giving buyer information,
               tracking after buying a product, submitting that information to the admin, sorting them, everything
               has been made database-based.Which has been used - MongoDB, React.js, Node.js, Firebase, MUI, CSS.`,
               live:'- https://bikepoint-13d4c.web.app',
               imgLink:'https://i.ibb.co/FHd50X6/bikepoint-home.png'

            },
            {
                name:'BDSchool',
                serverLink:'https://github.com/Developer20202021/nawtika-school-big-projects',
               clientLink:'https://github.com/Developer20202021/nawtika-school-big-projects',
               shortDesc:`Submitting all the information of all the schools of a country such as a teacher, student, and all staff
               attendance information.Which contains - MongoDB, Mongoose, express.js, React.js, JavaScript, Node.js, Firebase, MUI,
               CSS.`,
               live:'#',
               imgLink:'https://i.ibb.co/khJ6hRN/localhost-3001-dashboard-dc-all-school-info-6195f49df78e2800403c1ecc.png'

            },
            {
                name:'DailyCourier',
                serverLink:'https://daily-courier-ce545.web.app',
               clientLink:'https://daily-courier-ce545.web.app',
               shortDesc:`The service charge is based on the weight of the product and all the delivery information of the
               client is stored in the admin panel. Besides, a web application to process them.
                Which has been used - MongoDB, mongoose, React.js, Node.js, Firebase, CSS.`,
               live:'https://daily-courier-ce545.web.app',
               imgLink:'https://i.ibb.co/0G9v5Zj/daily-courier-ce545-web-app.png'

            },
            {
                name:'DoctoromaHospital',
                serverLink:'https://github.com/Developer20202021/doctoroma-hospital-ass',
               clientLink:'https://github.com/Developer20202021/doctoroma-hospital-ass',
               shortDesc:'',
               live:'https://doctoroma-hospital.web.app/',
               imgLink:'https://i.ibb.co/DGmkhkL/doctoroma-hospital-web-app-home.png'

            },
         





        ]






            setInfo(projects)


    },[])













    return (
        <div className='card-main-box'>

<div class="cards">


    {getInfo?.map(data=><CardItem data={data}></CardItem>)}




   {/* <CardItem></CardItem>
   <CardItem></CardItem>
   <CardItem></CardItem>
   <CardItem></CardItem>
   <CardItem></CardItem>
   <CardItem></CardItem>
   <CardItem></CardItem> */}

  
</div>



            
        </div>
    );
};

export default Project;