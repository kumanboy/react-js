'use strict';
import {user1} from "../../index";
import './testimonials.css'

function Testimonials(){
    return(
        <div id="testimonials">
            <div className="container">
                <h1 className="title text-center">WHAT CLIENTS SAY?</h1>
                <div className="row offset-1">
                    <div className="col-md-5 mt-5 testimonials">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                            Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                        </p>
                        <img src={user1} alt="user1"/>
                            <p className="user-details"><b>Agelina</b> <br/> CO-Founder at XYZ</p>
                    </div>
                    <div className="col-md-5 mt-5 testimonials">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                            Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                        </p>
                        <img src={user1} alt="user1"/>
                            <p className="user-details"><b>John Doe</b> <br/> Director at XYZ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;