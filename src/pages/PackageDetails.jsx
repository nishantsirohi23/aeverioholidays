import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TravelerReviews from "../Components/Section/TravelerReviews";
function PackageDetails() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // Mock destination parameter - replace with actual routing logic
  const destination = "bali-indonesia";
  
  // Sample data - replace with actual data from API/database
  const packageData = {
    name: destination?.replaceAll('-', ' ') || "Amazing Destination",
    address: "123 Paradise Street, Beautiful City, Country 12345",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80"
    ],
    description: "Experience the ultimate adventure in this breathtaking destination. This package offers a perfect blend of culture, adventure, and relaxation. Discover hidden gems, taste local cuisine, and create memories that will last a lifetime.",
    price: 129900,
    duration: "7 Days / 6 Nights",
    groupSize: "2-15 People",
    includes: ["Accommodation", "Meals", "Transportation", "Guide", "Activities"],
    itinerary: [
      {
        day: 1,
        morning: "Arrival and check-in at hotel. Welcome drink and orientation session.",
        evening: "City walking tour and visit to local markets.",
        night: "Welcome dinner at traditional restaurant."
      },
      {
        day: 2,
        morning: "Visit to famous landmarks and historical sites.",
        evening: "Sunset viewing at scenic viewpoint.",
        night: "Free time for shopping or relaxation."
      },
      {
        day: 3,
        morning: "Adventure activity - hiking or water sports.",
        evening: "Cultural performance and local dance show.",
        night: "Traditional cooking class."
      },
      {
        day: 4,
        morning: "Day trip to nearby attractions.",
        evening: "Beach/mountain relaxation time.",
        night: "Bonfire and storytelling session."
      },
      {
        day: 5,
        morning: "Wildlife sanctuary or nature reserve visit.",
        evening: "Photography workshop and scenic drive.",
        night: "Local festival participation (if available)."
      },
      {
        day: 6,
        morning: "Free time for personal exploration.",
        evening: "Farewell dinner cruise or special dining experience.",
        night: "Packing and preparation for departure."
      },
      {
        day: 7,
        morning: "Check-out and departure transfers.",
        evening: "Safe journey home with beautiful memories.",
        night: "End of tour."
      }
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment: "Absolutely amazing experience! The itinerary was well-planned and our guide was fantastic. Would definitely recommend this package to anyone looking for adventure."
      },
      {
        name: "Mike Chen",
        rating: 4,
        comment: "Great value for money. The accommodations were comfortable and the activities were exciting. Only minor issue was some transportation delays."
      },
      {
        name: "Emma Wilson",
        rating: 5,
        comment: "Perfect trip for families! My kids loved every moment, and the cultural experiences were truly enriching. Thank you for an unforgettable vacation!"
      }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#ffd700' : '#ddd' }}>★</span>
    ));
  };

  return (
    <section className="package-details">
      <div className="container">
        <div className="package-header">
          <h1 className="package-title">{packageData.name}</h1>
          <p className="package-address">{packageData.address}</p>
        </div>

        <div className="image-gallery">
          <div className="main-image">
            <img src={packageData.images[selectedImage]} alt={packageData.name} />
          </div>
          <div className="thumbnail-images">
            {packageData.images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${packageData.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="content-wrapper">
          <div className="main-content">
            <div className="description-section">
              <h2>About This Package</h2>
              <p>{packageData.description}</p>
            </div>

            <div className="itinerary-section">
              <h2>Day-wise Itinerary</h2>
              {packageData.itinerary.map((day) => (
                <div key={day.day} className="day-item">
                  <h3>Day {day.day}</h3>
                  <div className="day-schedule">
                    <div className="schedule-item">
                      <span className="time-label">Morning:</span>
                      <span className="activity">{day.morning}</span>
                    </div>
                    <div className="schedule-item">
                      <span className="time-label">Evening:</span>
                      <span className="activity">{day.evening}</span>
                    </div>
                    <div className="schedule-item">
                      <span className="time-label">Night:</span>
                      <span className="activity">{day.night}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-scroll">
              {packageData.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <span className="reviewer-name">{review.name}</span>
                    <div className="rating">{renderStars(review.rating)}</div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <TravelerReviews/>

          </div>
         

          <div className="sidebar">
            <div className="price-card">
              <div className="price-header">
                <span className="price">₹{packageData.price}</span>
                <span className="per-person">per person</span>
              </div>
              
              <div className="package-details-list">
                <div className="detail-item">
                  <span className="label">Duration:</span>
                  <span className="value">{packageData.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Group Size:</span>
                  <span className="value">{packageData.groupSize}</span>
                </div>
              </div>

              <div className="includes-section">
                <h4>Package Includes:</h4>
                <ul>
                  {packageData.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <button className="book-now-btn">Book Now</button>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .package-details {
          padding: 20px 0;
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .package-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .package-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
          text-transform: capitalize;
        }

        .package-address {
          font-size: 1.1rem;
          color: #7f8c8d;
          margin-bottom: 0;
        }

        .image-gallery {
          margin-bottom: 40px;
        }

        .main-image {
          width: 95%;
          height: 400px;
          margin: 0 auto 20px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-image img:hover {
          transform: scale(1.02);
        }

        .thumbnail-images {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .thumbnail {
          width: 100px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .thumbnail:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .thumbnail.active {
          border-color: #3498db;
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content-wrapper {
          display: flex;
          gap: 30px;
          margin-top: 40px;
        }

        .main-content {
          flex: 1;
        }

        .sidebar {
          width: 30%;
          min-width: 300px;
        }

        .description-section,
        .itinerary-section,
        

        .description-section h2,
        .itinerary-section h2,
        

        .description-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        .day-item {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 4px solid #3498db;
        }

        .day-item h3 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        .schedule-item {
          display: flex;
          margin-bottom: 10px;
          align-items: flex-start;
        }

        .time-label {
          font-weight: bold;
          color: #3498db;
          min-width: 80px;
          margin-right: 10px;
        }

        .activity {
          flex: 1;
          color: #555;
        }

      
        .reviews-section {
          margin-bottom: 40px;
          overflow: hidden;
        }

        .reviews-section h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 20px;
          border-bottom: 3px solid #3498db;
          padding-bottom: 10px;
        }

        .reviews-scroll {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
        }

        .review-item {
          flex: 0 0 auto;
          scroll-snap-align: start;
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
          width: 300px;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .reviewer-name {
          font-weight: bold;
          color: #2c3e50;
        }

        .rating {
          font-size: 1.2rem;
        }

        .review-comment {
          color: #555;
          font-style: italic;
        }

        /* Scrollbar styling (optional) */
        .reviews-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .reviews-scroll::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }


        .price-card {
          background: #fff;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
          position: sticky;
          top: 20px;
        }

        .price-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e9ecef;
        }

        .price {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: #27ae60;
        }

        .per-person {
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .package-details-list {
          margin-bottom: 25px;
        }

        @media (max-width: 768px) {
        .review-item {
          width: 80%;
        }
      }

      @media (min-width: 769px) and (max-width: 1024px) {
        .review-item {
          width: 45%;
        }
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        .review-item {
          width: 30%;
        }
      }

      @media (min-width: 1441px) {
        .review-item {
          width: 25%;
        }
      }


        .detail-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #f1f2f6;
        }

        .detail-item .label {
          font-weight: bold;
          color: #2c3e50;
        }

        .detail-item .value {
          color: #555;
        }

        .includes-section {
          margin-bottom: 25px;
        }

        .includes-section h4 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        .includes-section ul {
          list-style: none;
          padding: 0;
        }

        .includes-section li {
          padding: 5px 0;
          color: #555;
          position: relative;
          padding-left: 20px;
        }

        .includes-section li:before {
          content: "✓";
          color: #27ae60;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .book-now-btn,
        .contact-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 10px;
        }

        .book-now-btn {
          background: #3498db;
          color: white;
        }

        .book-now-btn:hover {
          background: #2980b9;
          transform: translateY(-2px);
        }

        .contact-btn {
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
        }

        .contact-btn:hover {
          background: #3498db;
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            min-width: auto;
          }
          
          .price-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .package-title {
            font-size: 2rem;
          }
          
          .main-image {
            height: 300px;
            width: 100%;
          }
          
          .thumbnail {
            width: 80px;
            height: 60px;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .schedule-item {
            flex-direction: column;
          }
          
          .time-label {
            margin-bottom: 5px;
          }
        }

        @media (max-width: 480px) {
          .package-details {
            padding: 10px 0;
          }
          
          .package-title {
            font-size: 1.8rem;
          }
          
          .main-image {
            height: 250px;
          }
          
          .thumbnail-images {
            gap: 8px;
          }
          
          .thumbnail {
            width: 60px;
            height: 45px;
          }
          
          .day-item {
            padding: 15px;
          }
          
          .price-card {
            padding: 20px;
          }
          
          .price {
            font-size: 2rem;
          }
        }

        @media (min-width: 1440px) {
          .container {
            max-width: 1400px;
          }
          
          .main-image {
            height: 500px;
          }
        }
      `}</style>

      
    </section>
  );
}

export default PackageDetails;