import React, { useEffect, useState } from 'react';
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'


const Celebrate = () => {

    const { width, height } = useWindowSize()

 
    

    const [time, setTime] = useState(true)

    useEffect(()=>{

       
        setTimeout(()=>{

            setTime(false)



        },15000)

    },[])




    return (
        <div>
                {time?<Confetti
      width={width}
      height={height}
    />:null}
            
        </div>
    );
};

export default Celebrate;