import { useState } from 'react';
import Popular1 from '../../assets/images/popular-1.jpg';
import Popular2 from '../../assets/images/popular-2.jpg';
import Popular3 from '../../assets/images/popular-3.jpg';
import Popular4 from '../../assets/images/popular-1.jpg';
import Popular5 from '../../assets/images/popular-2.jpg';
import Popular6 from '../../assets/images/popular-3.jpg';

const destinations = [
  {
    name: 'San Miguel',
    country: 'Italy',
    description: 'Explore the charm of coastal Italy with historic streets and Mediterranean views.',
    rating: 5,
    image: Popular1,
  },
  {
    name: 'Burj Khalifa',
    country: 'Dubai',
    description: 'Witness the world’s tallest building and the dazzling nightlife of Dubai.',
    rating: 5,
    image: Popular2,
  },
  {
    name: 'Kyoto Temple',
    country: 'Japan',
    description: 'Step into a peaceful Zen garden and ancient Japanese architecture.',
    rating: 5,
    image: Popular3,
  },
  {
    name: 'Niagara Falls',
    country: 'Canada',
    description: 'Feel the thunder of nature at one of the most famous waterfalls on Earth.',
    rating: 4,
    image: Popular4,
  },
  {
    name: 'Eiffel Tower',
    country: 'France',
    description: 'Experience the romance of Paris and enjoy breathtaking views from the top.',
    rating: 5,
    image: Popular5,
  },
  {
    name: 'Great Wall',
    country: 'China',
    description: 'Walk on the ancient stones of one of the greatest man-made wonders.',
    rating: 4,
    image: Popular6,
  },
];

function PopularDestinations() {
  const [showMore, setShowMore] = useState(false);

  const renderDestinationCard = (dest, index) => (
    <li key={index}>
      <div className="popular-card">
        <figure className="card-img">
          <img src={dest.image} alt={`${dest.name}, ${dest.country}`} loading="lazy" />
        </figure>
        <div className="card-content">
          <div className="card-rating">
            {[...Array(dest.rating)].map((_, i) => (
              <ion-icon name="star" key={i}></ion-icon>
            ))}
          </div>
          <p className="card-subtitle"><a href="#">{dest.country}</a></p>
          <h3 className="h3 card-title"><a href="#">{dest.name}</a></h3>
          <p className="card-text">{dest.description}</p>
        </div>
      </div>
    </li>
  );

  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destinations</h2>
        <p className="section-text">
          Discover our hand-picked list of must-visit places across the world – from ancient architecture to modern marvels.
        </p>

        {/* First row (always visible) */}
        <ul className="popular-list">
          {destinations.slice(0, 3).map(renderDestinationCard)}
        </ul>

        {/* Second row (conditionally shown) */}
        {showMore && (
          <ul className="popular-list">
            {destinations.slice(3, 6).map(renderDestinationCard)}
          </ul>
        )}

        <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show less' : 'More destinations'}
        </button>
      </div>
    </section>
  );
}

export default PopularDestinations;
