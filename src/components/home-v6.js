import React from 'react';
import Navbar from './global-components/navbar-v3';
import SliderV3 from './section-components/slider-v3';
import ServiceV4 from './section-components/services-v4';
import About from './section-components/about';
import SoftBoxAbout from './section-components/soft-box-about';
import FooterV2 from './global-components/footer-v2';
import SoftBoxManage from './section-components/soft-box-manage';


const Home_v6 = () => {
    return <div>
        <Navbar />
        <SliderV3 />
        <ServiceV4 />
        <About />
        <SoftBoxManage />
        <SoftBoxAbout />
        <FooterV2 />
    </div>
}

export default Home_v6

