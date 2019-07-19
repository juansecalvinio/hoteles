import React, { Component } from 'react';

import './index.css';
import Hero from '../Hero';
import Filters from '../Filters';
import Hotels from '../Hotels';

import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const API = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelsApi: [],
      hotelsFiltered: [],
      filters: {
        dateFrom: dayjs(),
        dateTo: dayjs().add(1, 'month'),
        country: '',
        price: 0,
        rooms: 0
      }
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(API);
      const hotels = await response.json();
      this.setState({ hotelsApi: hotels, hotelsFiltered: hotels });
    } catch(error) {
      console.error(error);
    } 
  } 
  
  handleFilterChange = (newFilters ) => {
    this.setState({ filters: newFilters }, () => {
      this.handleFilters();
    })
  };

  handleFilters = () => {
    const { filters, hotelsApi } = this.state

    const hotelsFiltered = hotelsApi
      .filter(hotel => dayjs(hotel.availabilityFrom).isAfter(filters.dateFrom))
      .filter(hotel => dayjs(hotel.availabilityTo).isBefore(filters.dateTo))
      .filter(hotel => {
        if (filters.country === '' || filters.country === 'Todos los países') return true
        if (filters.country === hotel.country) return true

        return false
      })
      .filter(hotel => {
        const filterPrice = Number(filters.price)

        if (filterPrice === 0 || filterPrice === 'Cualquier precio') return true
        if (filterPrice === hotel.price) return true

        return false
      })
      .filter(hotel => {
        if (filters.rooms === 0 || filters.rooms === 'Cualquier tamaño') return true
        if (hotel.rooms >= filters.rooms) return true

        return false
      })

    this.setState({ hotelsFiltered })
  }

  render() {
    const { hotelsFiltered, filters } = this.state;
    return (
      <div className="container">
        <Hero filters={ filters } />
        <Filters filters={ filters } onFilterChange={this.handleFilterChange} />
        <Hotels data={ hotelsFiltered }/>
      </div>
    )
  }
}

export default App;
