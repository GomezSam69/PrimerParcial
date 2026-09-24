function CategoryTabs({ categories, active, onSelect }) {
  return (
    <nav className="tabs" aria-label="Secciones">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`tabs__btn ${active === cat.id ? "tabs__btn--active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}

export default CategoryTabs;
