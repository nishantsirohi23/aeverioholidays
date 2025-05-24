
const reviews = [
  {
    name: 'Rohan Kapoor',
    tour: 'Machu Picchu Explorer',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'The Inca Trail was challenging but incredibly rewarding. Our guide was knowledgeable about Incan history and made sure we were safe throughout the trek. A dream come true for an adventure enthusiast from Kolkata!',
  },
  {
    name: 'Anjali Verma',
    tour: 'Magical Santorini Getaway',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'The views in Santorini were absolutely breathtaking! Our accommodation had the perfect sunset view, and the guided tours were informative and fun. Greetings from Chennai!',
  },
  {
    name: 'Vikram & Priya Sharma',
    tour: 'Bali Retreat Package',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/lego/3.jpg',
    review:
      'The Bali retreat exceeded all our expectations. The villa was stunning, and the personalized service made us feel like royalty. Aerovia made our honeymoon truly special. Will definitely book again!',
  },
  {
    name: 'Neha Patel',
    tour: 'Japan Explorer Tour',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'As a solo traveler from Mumbai, I felt completely safe and taken care of throughout my Japan tour. The itinerary perfectly balanced historical sites with modern attractions. Great value for money!',
  },
];

function TravelerReviews() {
  return (
    <section className="review-section">
      <div className="review-header">
        <h2>Traveler Reviews</h2>
        <a href="#" className="view-all">View All →</a>
      </div>
      <div className="review-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-user">
              <img src={r.image} alt={r.name} className="user-img" />
              <div>
                <h3 className="user-name">{r.name}</h3>
                <p className="user-tour">{r.tour}</p>
              </div>
            </div>
            <div className="rating">
              {'★'.repeat(r.rating)}
              {'☆'.repeat(5 - r.rating)}
            </div>
            <p className="user-review">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelerReviews;
