import React from 'react';
import './filterItem.css';
import PropTypes from 'prop-types';

const FilterItem = ({filter}) => {
    return (
        <div className='filter-item'>
            {filter.icon && typeof filter.icon == "string" ? <img className='absolute-center gold-icon' src={filter.icon} alt="" /> : <span className={`absolute-center filter-icon ${filter.position && filter.position.toLowerCase() == 'left' ? 'order-1' : 'order-2'}`}>{filter.icon}</span>}
            <span className={`filter-name ${filter.position && filter.position.toLowerCase() == 'left' ? 'order-2' : 'order-1'}`}>{filter.title}</span>
        </div>
    );
};

FilterItem.propTypes = {
    filter: PropTypes.object
}

export default FilterItem;