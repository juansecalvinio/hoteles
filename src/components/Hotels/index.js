import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hotel from '../Hotels/Hotel';

class Hotels extends Component {
    render() {
        const { data } = this.props;
        return(
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    { data.length !== 0 ?(
                        <div className="columns is-multiline">
                        { data.map(hotel => <div className="column is-one-third" key={hotel.slug} ><Hotel hotel={ hotel } /></div>) }
                        </div>
                    ) : (
                        <article className="message is-warning">
                            <div className="message-body">
                                No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                            </div>
                        </article>
                    )                    
                    }
                </div>
            </section>
        )
    }
}

Hotels.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
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
    )
}

export default Hotels;