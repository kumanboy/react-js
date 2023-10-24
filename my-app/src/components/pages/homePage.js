'use strict';
import Navbar from "../row/navbar";
import Banner from "../row/banner";
import Services  from "../row/services";
import About from "../row/about";
import Testimonials from "../row/testimonials";
import Social from "../row/social";
import Footer from "../row/footer";

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Services/>
            <About/>
            <Testimonials/>
            <Social/>
            <Footer/>
        </div>
    )
}

export default HomePage;