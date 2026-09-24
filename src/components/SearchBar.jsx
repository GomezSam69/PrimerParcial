function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Buscar por título, descripción o medio"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Buscar noticias"
    />
  );
}

export default SearchBar;
