import React from 'react';
import "../styles.css";
import {API} from "../backend";
import Base from "./Base";

export default function Home(){

    console.log("API IS", API);
    return (
       <Base title="Home Page" description="Welcome to the T-SHIRT store">
           <div className="row">
               <div className="col-4">
               <div className="btn btn-success">TEST</div>
               </div>
               <div className="col-4">
               <div className="btn btn-success">TEST</div>
               </div>
               <div className="col-4">
               <div className="btn btn-success">TEST</div>
               </div>
           </div>
       </Base>
    )
}
