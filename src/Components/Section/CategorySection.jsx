// src/components/CategorySection.jsx

const categories = [
  { title: 'Luxury', subtitle: 'Premium experiences' },
  { title: 'Adventure', subtitle: 'Thrilling activities' },
  { title: 'Family', subtitle: 'Kid-friendly trips' },
  { title: 'Romantic', subtitle: 'Couples getaways' },
  { title: 'Islands', subtitle: 'Beach paradises' },
  { title: 'Culinary', subtitle: 'Food experiences' },
];

function CategorySection() {
  return (
    <section className="category-section">
      <h2 className="category-heading">Browse by Category</h2>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div className="category-card" key={idx}>
            <h3 className="category-title">{cat.title}</h3>
            <p className="category-subtitle">{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
