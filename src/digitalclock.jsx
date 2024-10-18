import React, { useEffect, useState } from "react";
import "./digitalclock.scss"



function DigitalClock(){

    const time = new Date().toLocaleTimeString()
const [current , setCurrent] = useState(time)
useEffect(
    ()=>{
        setInterval(()=>{
            const time = new Date().toLocaleTimeString()
            setCurrent(time)
        },1000)
    },[])

    


    return(
<div className="digitalclock">
<h1>{current}</h1>
</div>
    )
}


export default DigitalClock;