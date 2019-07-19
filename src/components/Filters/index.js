import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

const options = {
    country: [
        {value: '', name: 'Todos los países'}, 
        {value: 'Argentina', name: 'Argentina'}, 
        {value: 'Brasil', name: 'Brasil'}, 
        {value: 'Chile', name: 'Chile'}, 
        {value: 'Uruguay', name: 'Uruguay'}
    ],
    price: [
        {value: 0, name: 'Cualquier precio'}, 
        {value: 1, name: '$'}, 
        {value: 2, name: '$$'}, 
        {value: 3, name: '$$$'}, 
        {value: 4, name: '$$$$'}
    ],
    rooms: [
        {value: 0, name: 'Cualquier tamaño'},
        {value: 10, name: 'Hotel pequeño'},
        {value: 20, name: 'Hotel mediano'},
        {value: 30, name: 'Hotel grande'}
    ]
}

class Filters extends Component {

    handleOptionChange = ({ name, value }) => {
        const { filters, onFilterChange } = this.props;
        const newFilters = { ...filters, [name]: value };
        onFilterChange(newFilters, name);
    }

    render() {

        const { filters } = this.props;

        return (
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                    name='dateFrom'
                    date={ filters.dateFrom }
                    icon="sign-in-alt"
                    onDateChange={this.handleOptionChange} />
                </div>
                <div className="navbar-item">
                    <DateFilter
                    name="dateTo"
                    date={ filters.dateTo }
                    icon="sign-out-alt"
                    onDateChange={this.handleOptionChange} />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ options.country }
                    selected={ filters.country }
                    icon="globe"
                    name="country"
                    onOptionChange={this.handleOptionChange} />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ options.price }
                    selected={ filters.price }
                    icon="dollar-sign"
                    name="price"
                    onOptionChange={this.handleOptionChange} />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ options.rooms }
                    selected={ filters.rooms }
                    icon="bed"
                    name="rooms"
                    onOptionChange={this.handleOptionChange} />
                </div>
            </nav>
        );
    }
};

Filters.propTypes = {
    filters: PropTypes.shape({
        dateFrom: PropTypes.instanceOf(dayjs),
        dateTo: PropTypes.instanceOf(dayjs),
        coutry: PropTypes.string,
        price: PropTypes.string,
        rooms: PropTypes.string
    }),
    onFilterChange: PropTypes.func,
}

export default Filters;