import { useEffect, useState } from "react";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import SearchBar from "./components/SearchBar";
import Toolbar from "./components/Toolbar";
import NewsCard from "./components/NewsCard";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

const CATEGORIES = [
  { id: "actualidad", label: "Actualidad" },
  { id: "tecnología", label: "Tecnología" },
  { id: "deportes", label: "Deportes" },
  { id: "economía", label: "Economía" },
  { id: "salud", label: "Salud" },
  { id: "ciencia", label: "Ciencia" },
  { id: "cultura", label: "Cultura" },
];

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recientes");

  // Petición a la API: se ejecuta al cargar y cada vez que cambia la categoría
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");

    const url = `${BASE_URL}?q=${encodeURIComponent(category)}&language=es&sortBy=publishedAt&pageSize=30&apiKey=${API_KEY}`;

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok") {
          throw new Error(data.message || "No se pudo consultar la API.");
        }
        const valid = data.articles.filter(
          (a) => a.title && a.title !== "[Removed]"
        );
        setArticles(valid);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [category]);

  // Búsqueda + orden (se calcula a partir del estado, sin tocar los datos originales)
  const term = search.trim().toLowerCase();
  const visible = articles
    .filter((a) =>
      `${a.title} ${a.description ?? ""} ${a.source?.name ?? ""}`
        .toLowerCase()
        .includes(term)
    )
    .sort((a, b) => {
      if (sort === "antiguas") return new Date(a.publishedAt) - new Date(b.publishedAt);
      if (sort === "fuente") return (a.source?.name ?? "").localeCompare(b.source?.name ?? "");
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

  const clearFilters = () => {
    setSearch("");
    setSort("recientes");
    setCategory(CATEGORIES[0].id);
  };

  return (
    <>
      <Header />
      <main className="page">
        <CategoryTabs categories={CATEGORIES} active={category} onSelect={setCategory} />
        <SearchBar value={search} onChange={setSearch} />
        <Toolbar
          shown={visible.length}
          total={articles.length}
          sort={sort}
          onSortChange={setSort}
          onClear={clearFilters}
        />

        {loading && <Loader />}
        {error && <p className="notice notice--error">Error: {error}</p>}
        {!loading && !error && visible.length === 0 && (
          <p className="notice">No hay noticias que coincidan. Prueba con otra palabra o limpia los filtros.</p>
        )}

        {!loading && !error && (
          <section className="grid">
            {visible.map((article) => (
              <NewsCard key={article.url} article={article} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
