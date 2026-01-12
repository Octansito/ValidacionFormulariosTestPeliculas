function List({ foto, nombre, esNota10, esFavorito, onToggleFavorito, children }) {
  return (
    <article
      tabIndex="0"
      className="flex flex-col items-start gap-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
      aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
    >
      <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden relative">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <figcaption className="sr-only">{children}</figcaption>

{/* Botón de favorito */}
      {onToggleFavorito && (
        <button
          onClick={(e) => { e.stopPropagation(); onToggleFavorito(); }}
          className="absolute top-2 right-2 text-2xl"
          aria-label={esFavorito ? "Quitar de favoritos" : "Marcar como favorito"}
        >
          {esFavorito ? "★" : "☆"}
        </button>
      )}
      </figure>

      <header>
        <h2 className={`${esNota10 ? "text-red-600" : "text-gray-800"} font-bold`}>
          {nombre} {esNota10 && <em>– Intérprete en película destacada</em>}
        </h2>
      </header>
      <p>{children}</p>
    </article>
  );
}

export default List;
