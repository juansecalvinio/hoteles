import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

class Hero extends Component {
  
  parseDate = date => date.format('dddd[,] D [de] MMMM [de] YYYY');

  render() {
    const { dateFrom, dateTo, country, price, rooms } = this.props.filters;

    const countryText = country ? `en ${country}` : '';
    const priceText = Number(price) ? `por $${Number(price)}` : '';
    const roomsText = Number(rooms) ? `de hasta ${Number(rooms)} habitaciones` : '';

    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
            Desde el <strong>{this.parseDate(dateFrom)}</strong> hasta el <strong>{this.parseDate(dateTo)}</strong>
            {' '}{countryText}{' '}{priceText}{' '}{roomsText}.
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

Hero.propTypes = {
  filters: PropTypes.shape({
    dateFrom: PropTypes.instanceOf(dayjs),
    dateTo: PropTypes.instanceOf(dayjs),
    country: PropTypes.string,
    price: PropTypes.number,
    rooms: PropTypes.number,
  }),
}

export default Hero;
