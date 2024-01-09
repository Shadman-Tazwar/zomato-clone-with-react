import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './filterItem';

import './filters.css'

const Filters = ({filters}) => {
    return (
        <div className='filter'>
            {
                filters && filters.map((filter) => {
                    return <FilterItem filter={filter} key={filter.id}></FilterItem>
                })
            }
        </div>
    );
};

Filters.propTypes = {
    filters: PropTypes.array
}

export default Filters;