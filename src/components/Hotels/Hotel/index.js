import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Hotel extends Component {
    render() {

        const { hotel } = this.props;

        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={hotel.photo} alt={hotel.name} />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{hotel.name}</p>
                    <p>{hotel.description}</p>
                    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                    <div className="control">
                        <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                        <span className="tag is-medium">{`${hotel.city}, ${hotel.country}`}</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                        <span className="tag is-medium">{`${hotel.rooms} Habitaciones`}</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags">
                        <span className="tag is-medium is-info">
                            {Array.from({ length: 4 }, (_, index) => (
                                <i className="fas fa-dollar-sign" key={index}
                                style={{margin: '0 .125em', opacity: `${index + 1 <= hotel.price ? '1' : '.25'}`}}
                                />
                            ))}
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#0" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        )
    }
}

Hotel.propTypes = {
    hotel: PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string,
        photo: PropTypes.string,
        description: PropTypes.string,
        availabilityFrom: PropTypes.number,
        availabilityTo: PropTypes.number,
        rooms: PropTypes.number,
        city: PropTypes.string,
        country: PropTypes.string,
        price: PropTypes.number
    })
}

export default Hotel;