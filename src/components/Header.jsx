function Header() {
  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="masthead">
      <div className="masthead__inner">
        <h1 className="masthead__logo">Pulso</h1>
        <p className="masthead__tagline">Noticias y actualidad en español</p>
        <p className="masthead__date">{today}</p>
      </div>
    </header>
  );
}

export default Header;
