import { useParams, useNavigate, Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

function Detail() {
  const { idPeli, idInterprete } = useParams();
  const navigate = useNavigate();

  const pelicula = peliculas.find(p => p.id === Number(idPeli));
  if (!pelicula) {
    return <p className="text-center text-red-600 mt-8">No se ha encontrado la película solicitada.</p>;
  }

  // Detalle de actores si es un Intérprete
  if (idInterprete !== undefined) {
    const actor = pelicula.actores[idInterprete];
    if (!actor) {
      return <p className="text-center text-red-600 mt-8">No se ha encontrado el intérprete solicitado.</p>;
    }

    return (
      <article className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        <figure className="w-full md:w-64 shrink-0">
          <img
            src={actor.imagen}
            alt={actor.nombre}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </figure>
        <section className="flex-1 flex flex-col gap-4">
          <header className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{actor.nombre}</h1>
            <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
            Volver
            </button>
          </header>
          <p className="text-lg leading-relaxed">{actor.biografia}</p>
        </section>
      </article>
    );
  }

  // Si no es un Intérprete, muestra el Detalle de la película y sus actores
  return (
    <article className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{pelicula.nombre}</h1>
        <button
          onClick={() => navigate("/peliculas")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Volver
        </button>
      </header>

    <figure className="flex justify-center mb-4">
    <img
        src={pelicula.cartelera}
        alt={pelicula.nombre}
        className="w-full max-w-md rounded-lg shadow-md object-cover"
    />
    </figure>

      <section className="flex-1 flex flex-col gap-4">
        <p className="text-lg leading-relaxed">{pelicula.resumen}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Actores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pelicula.actores.map((actor, index) => (
            <Link
            key={index}
            to={`/detalle/pelicula/${pelicula.id}/interprete/${index}`}
            aria-label={`Ver detalles del intérprete ${actor.nombre}`}
            >
            <List
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}
            >
                {actor.biografia}
            </List>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
export default Detail;