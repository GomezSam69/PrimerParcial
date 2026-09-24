function Toolbar({ shown, total, sort, onSortChange, onClear }) {
  return (
    <div className="toolbar">
      <p className="toolbar__count">
        Mostrando <strong>{shown}</strong> de {total} noticias
      </p>
      <div className="toolbar__controls">
        <label>
          Ordenar por{" "}
          <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
            <option value="recientes">Más recientes</option>
            <option value="antiguas">Más antiguas</option>
            <option value="fuente">Medio (A–Z)</option>
          </select>
        </label>
        <button className="btn btn--ghost" onClick={onClear}>
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
