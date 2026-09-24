import { useState } from "react";

function NewsCard({ article }) {
  const [open, setOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const date = new Date(article.publishedAt).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="card">
      {article.urlToImage && !imgFailed ? (
        <img
          className="card__img"
          src={article.urlToImage}
          alt={article.title}
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="card__img card__img--empty">Sin imagen</div>
      )}

      <div className="card__body">
        <p className="card__meta">
          <span className="card__source">{article.source?.name}</span>
          <time dateTime={article.publishedAt}>{date}</time>
        </p>
        <h2 className="card__title">{article.title}</h2>
        {article.description && <p className="card__desc">{article.description}</p>}

        {open && (
          <div className="card__details">
            <p>
              <strong>Autor:</strong> {article.author || "No especificado"}
            </p>
            {article.content && <p>{article.content}</p>}
            <a href={article.url} target="_blank" rel="noreferrer">
              Leer la nota completa
            </a>
          </div>
        )}

        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? "Ocultar detalles" : "Ver detalles"}
        </button>
      </div>
    </article>
  );
}

export default NewsCard;
