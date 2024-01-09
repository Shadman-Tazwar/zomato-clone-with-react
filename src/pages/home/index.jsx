import React, { useState } from 'react';

import Header from './../../components/common/header';
import TabOption from '../../components/common/tabOption';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import Nightlife from '../../components/nightlife';
// import Footer from './../../components/common/footer';

const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery");

    const getCorrectScreen = (tab) => {
        switch (tab) {
            case "Delivery":
                return <Delivery></Delivery>
            case "Dining Out":
                return <DiningOut></DiningOut>
            case "Nightlife":
                return <Nightlife></Nightlife>
            default:
                return <Delivery></Delivery>
        }
    }
    return (
        <div>
            <Header></Header>
            <TabOption activeTab={activeTab} setActiveTab={setActiveTab}></TabOption>
            {
                getCorrectScreen(activeTab)
            }
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;