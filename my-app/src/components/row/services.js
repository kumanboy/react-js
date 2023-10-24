'use strict';
import {service1, service2, service3} from "../../index";
import './services.css';
function Services(){
    return(
        <div id="services">
            <div className="container">
                <h1 className="title text-center">WHY CHOOSE US?</h1>
                <div className="row text-center">
                    <div className="col-md-4 services">
                        <img src={service1} className="service-img"/>
                            <h4>Growth Marketing</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                                Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                            </p>
                    </div>
                    <div className="col-md-4 services">
                        <img src={service2}  className="service-img"/>
                            <h4>Online Branding</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                                Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                            </p>
                    </div>
                    <div className="col-md-4 services">
                        <img src={service3} className="service-img"/>
                            <h4>Animated Ads</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                                Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                            </p>
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-primary">All Services</button>
                </div>
            </div>
        </div>
)
}

export default Services