'use strict';
import './about.css'
import {network} from "../../index";
function About(){
    return(
        <div id="about-us">
            <div className="container">
                <h1 className="title text-center">WHY CHOOSE US?</h1>
                <div className="row">
                    <div className="col-md-6 about-us">
                        <p className="about-title">Why we are different</p>
                        <ul>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                            <li>Belive in doing business with honesty</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={network} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;