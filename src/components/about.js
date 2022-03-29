import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import VideoV2 from "./section-components/video-v2";
import FooterV2 from "./global-components/footer-v2";
import SoftwareStore from "./section-components/software-store";

const About = () => {
    return (
        <div>
            <Navbar />
            <PageHeader headertitle="About" />
            <VideoV2 customclass="pd-top-120 bg-none" />
            <SoftwareStore />
            <FooterV2 />
        </div>
    );
};

export default About;
