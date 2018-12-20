import React from 'react';
import './timer.css';



const Timer =() =>{
    return( <div className="static">
        <div className='timer' >
    <span >00</span>
    <span>:</span>
    <span>30</span>
    <span>:</span>
    <span >00</span>
     </div>
     <div className="hour">
     <span  style={{marginRight: '7%' }}>Hour</span>
     <span  style={{marginRight:'2%' }}>Minute</span>
     <span>Second</span>
     
     </div>
        </div>
    )
}



export default Timer ;