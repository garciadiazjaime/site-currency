import React from 'react'

const AirbnbRate = ({ title, bathrooms, bedrooms, city, lat, lng, pictures, rating, userId, price, currency, rateType }) => (
  <div>
    title: {title} <br />
    bathrooms: {bathrooms} <br />
    bedrooms: {bedrooms} <br />
    city: {city} <br />
    lat: {lat} <br />
    lng: {lng} <br />
    title: {title} <br />
    pictures: <br />
    {
      pictures.map((picture, index) => (
        <div key={picture}>
          <a href={picture} target="_blank" rel="noopener noreferrer">Img{index + 1 }</a>
        </div>)
      )
    }
    <br />
    rating: {rating} <br />
    userId: {userId} <br />
    price: {price} <br />
    currency: {currency} <br />
    rateType: {rateType} <br />
    <hr />
  </div>
)

export default AirbnbRate
