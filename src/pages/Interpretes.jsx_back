import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

function Interpretes() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
        <p className="text-gray-700 mb-6">
            Estos son los intérpretes disponibles de nuestras películas:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) =>
                pelicula.actores.map((actor, idInterprete) => (
                    <Link 
                        key={`${pelicula.id}-${idInterprete}`} 
                        to={`/detalle/pelicula/${pelicula.id}/interprete/${idInterprete}`}
                        aria-label={`Ver detalles del intérprete ${actor.nombre}`}>
                        <List
                            // key={idInterprete} // No es necesario aquí porque el key está en el Link
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {actor.biografia}
                        </List>
                    </Link>
                ))
            )}
        </div>
    </>
  );
}
export default Interpretes;