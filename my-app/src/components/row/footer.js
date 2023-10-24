'use strict';
import {logo, wave2} from "../../index";
import './footer.css'

function Footer(){
    return(
        <div id="footer">
            <img src={wave2} alt="wave2" className="footer-img"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-box">
                            <img src={logo} alt="demo-logo"/>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                                    Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                                </p>
                        </div>
                        <div className="col-md-4 footer-info">
                            <p><b>CONTACT US</b></p>
                            <p><i className="fa-solid fa-location-dot"></i>TexnoPark Building, Navoiy</p>
                            <p><i className="fa-solid fa-phone"></i>+998 123456789</p>
                            <p><i className="fa-solid fa-envelope"></i>infotexno@mail.com</p>
                        </div>
                        <div className="col-md-4 footer-box">
                            <p><b>SUUBSCRIBE NEWSLETTER</b></p>
                            <input type="email" className="form-control" placeholder="Your Email"/>
                                <button type="button" className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                    <hr/>
                        <p className="copyright text-center">Website created by <a href="https://t.me/coder_davronov">Kumanboy</a></p>
                </div>
        </div>
)
}

export default Footer;