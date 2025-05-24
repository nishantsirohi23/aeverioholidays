import { useState, useEffect } from "react";

const trips = [
  {
    title: "Discover Iceland",
    subtitle: "Featured Destination",
    description:
      "Chase the magical Aurora Borealis while exploring Iceland's stunning landscapes, hot springs, waterfalls, and volcanic terrain.",
    tags: ["Winter", "Nature", "Photography", "100% Match"],
    background: "src/assets/images/packsege-1.jpg",
  },
  {
    title: "Adventure in Patagonia",
    subtitle: "Top Trekking Spot",
    description:
      "Explore the breathtaking peaks of Patagonia, hike glacier trails, and experience true wilderness at the end of the world.",
    tags: ["Hiking", "Adventure", "Wildlife", "85% Match"],
    background: "/images/patagonia.jpg",
  },
  {
    title: "Colors of Morocco",
    subtitle: "Cultural Getaway",
    description:
      "Wander the vibrant souks of Marrakech, ride camels in the Sahara, and experience the rich culture of Morocco.",
    tags: ["Culture", "Desert", "Markets", "90% Match"],
    background: "/images/morocco.jpg",
  },
];

function IcelandSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, description, tags, background } = trips[current];

  return (
    <section
      className="slider-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider-content">
        <p className="subtitle">{subtitle}</p>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        <div className="tags">
          {tags.map((tag, idx) => (
            <span className="tag" key={idx}>
              {tag}
            </span>
          ))}
        </div>

        <div className="buttons">
          <button className="primary-btn">📍 Explore Package</button>
          <button className="secondary-btn">➕ Add to Wishlist</button>
        </div>
      </div>
    </section>
  );
}

export default IcelandSection;
