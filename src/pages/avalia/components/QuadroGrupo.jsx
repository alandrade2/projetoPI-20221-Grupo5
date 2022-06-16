import React, { useContext, useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

// import { AuthContext } from '../../../contexts/AuthContext';



export default function Quadro(props) {
    
    return (


            <div className="boxQues">
                <div className="imgQues">
                </div>
                <div className="contentQues">
                    <h3>{props.title}</h3>                    
                  <p>{props.descrip}</p>
                  <Link to={"/avalia/questions"} 
                 onClick={props.click} 
                 > Avaliar </Link>                    
                </div>
            </div>
             

    // <div className="QdroForm">
    //     <div className="cardQuestion">
    //         <div className="frontQuest">
    //         <h6>
    //             <Link to={"/avalia/questions"} 
    //             onClick={props.click} 
    //             > {props.title} </Link>                
    //             </h6>
    //             <p>{props.res} / {props.tot }</p>
    //         </div>
    //         <div className="backQuest">
    //             <p>{props.descrip}</p>                
    //         </div>
    //     </div>
    //  </div>

    )
}