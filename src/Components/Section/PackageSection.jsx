import Package1 from '../../assets/images/packege-1.jpg';
import Package2 from '../../assets/images/packege-2.jpg';
import Package3 from '../../assets/images/packege-3.jpg';
import { Link } from "react-router-dom";

function PackageSection() {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Checkout Our Packages</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare mollitia tenetur, aptent.
        </p>

        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={Package1} alt="Experience The Great Holiday On Beach" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Experience The Great Holiday On Beach</h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                  cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Malaysia</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">$750 <span>/ per person</span></p>
                <Link to="/Santorini" className="btn btn-secondary">Book Now</Link>
                </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={Package2} alt="Summer Holiday To The Oxolotan River" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Summer Holiday To The Oxolotan River</h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                  cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Malaysia</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(20 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">$520 <span>/ per person</span></p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={Package3} alt="Santorini Island's Weekend Vacation" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Santorini Island&apos;s Weekend Vacation</h3>
                <p className="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                  cras, aspernatur.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Malaysia</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(40 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">$660 <span>/ per person</span></p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
        </ul>
        
        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
}

export default PackageSection;