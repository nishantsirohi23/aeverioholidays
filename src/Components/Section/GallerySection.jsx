import Gallery1 from '../../assets/images/gallery-1.jpg';
import Gallery2 from '../../assets/images/gallery-2.jpg';
import Gallery3 from '../../assets/images/gallery-3.jpg';
import Gallery4 from '../../assets/images/gallery-4.jpg';
import Gallery5 from '../../assets/images/gallery-5.jpg';


function GallerySection() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photo&apos;s From Travellers</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare mollitia tenetur, aptent.
        </p>

        <ul className="gallery-list">
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={Gallery1} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={Gallery2} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={Gallery3} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={Gallery4} alt="Gallery image" />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={Gallery5} alt="Gallery image" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;