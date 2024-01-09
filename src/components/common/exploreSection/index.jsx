import React from 'react';
import './exploreSection.css';
import PropTypes from 'prop-types';
import ExploreCard from './exploreCard';

const ExploreSection = ({collectionTitle, datas, isShowGoldenOffer}) => {
    return (
        <div className='max-width explore-section'>
            <div className='header-title'>{collectionTitle}</div>
            <div className="explore-section-container">
                {
                    datas.map((data, index) => {
                        return <ExploreCard key={index} data={data} isShowGoldenOffer={isShowGoldenOffer}></ExploreCard>
                    })
                }
            </div>
        </div>
    );
};

ExploreSection.propTypes = {
    collectionTitle: PropTypes.string,
    datas: PropTypes.array,
    isShowGoldenOffer: PropTypes.bool
}

export default ExploreSection;