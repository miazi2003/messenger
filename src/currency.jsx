import React, {  useState } from "react";
import "./currency.scss"


function Currency(){


const [value , setValue] = useState()

const [ currency , setCurrency] = useState()

const [ money , setMoney] = useState()

const [ exchange, setExchange] = useState()
function Click(){
    setCurrency(value * 120)
    setExchange(money / 120)
}


return(
    <div>
        <div className="cur">
            {/* <h4>Currency Exchange</h4>
            <p>USD</p>
            <input  type="text" onChange={(e)=>{setValue(e.target.value)}} value={exchange} />
            <p>BDT</p>
            <input type="text" onChange={(e)=>{setMoney(e.target.value)}} value={currency}/> 
            <button onClick={Click} ></button> */}
           
            
        </div>
    </div>
)
}



export default Currency;