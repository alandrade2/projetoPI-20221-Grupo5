import React, { useContext, useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';



export default function Quadro(props) {




    
    return (
            <div className="cardres">
                <div className="contentRes">
                    <h2>{props.cod}</h2>
                    <h3>{props.group}</h3>
                    <p>{props.descrip}</p>
                    {/* <p>{props.questionId}</p> */}
                    {/* <p>{props.questionId}</p> */}
                </div>
                <div className="qdbtn">
                    <form >
                       <div className="brn">
                        <button>sim</button>
                        <button>Não</button>
                        <button>Não aplicavel</button>
                        </div> 
                        <h4>Comentário:</h4>
                        <textarea type="textarea" />
                        <div className="btn">
                            <button>Voltar</button>
                            <button>Adiar Resposta</button>
                            <button>Salvar</button>
                        </div> 
                    </form>
            </div>
            </div>
)
}