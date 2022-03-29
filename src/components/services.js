import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import BusinessManage from './section-components/business-manage';
import ServiceV2 from './section-components/services-v2';
import FooterV2 from './global-components/footer-v2';

const Service = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Solutions" />
        <BusinessManage />
        <ServiceV2 />
        <FooterV2 />
    </div>
}

export default Service

