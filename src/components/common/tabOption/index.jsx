import React from 'react';
import PropTypes from 'prop-types';

import './tabOption.css';

const TabOption = ({activeTab, setActiveTab}) => {
    const tabs = [
        {
            id: 1,
            name: "Delivery",
            active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            backdrop_color: "#fceec0"
        },
        {
            id: 2,
            name: "Dining Out",
            active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            backdrop_color: "#e5f3f3"
        },
        {
            id: 3,
            name: "Nightlife",
            active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            backdrop_color: "#edf4ff"
        }
    ]
    return (
        <section className='tab-option'>
            <div className="max-width tab-option-wrapper">
                {
                    tabs.map((tab) => {
                        return (
                        <div 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.name)}
                        className={`tab-item absolute-center cursor-pointer ${activeTab === tab.name && "active-tab"}`}  
                        >
                            <div 
                            className='tab-image-container absolute-center'
                            style={{background: `${activeTab === tab.name ? tab.backdrop_color : ""}`}}
                            >
                                <img className='tab-image' src={activeTab === tab.name ? tab.active_img : tab.inactive_img} alt={tab.name} />
                            </div>
                            <div className='tab-name absolute-center'>
                                {tab.name}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

TabOption.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func,
}
export default TabOption;