import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import peliculas from "../data/peliculas"; 
import List from "../components/List"; 
import SearchBar from "../components/SearchBar"; 

function Interpretes() {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Usamos useMemo para generar y filtrar la lista aplanada de intérpretes.
  const filteredInterpretes = useMemo(() => {
    // 1. Aplanar la lista de actores y agregar información necesaria para el enlace
    const allInterpretes = peliculas.flatMap((pelicula) =>
      
      pelicula.actores.map((actor, idInterprete) => ({
        ...actor,
        idPelicula: pelicula.id, // Necesario para el Link
        idInterprete: idInterprete, // Necesario para el Link
        esNota10: pelicula.nota === 10, // Ejemplo de dato adicional
      }))
    );

    if (!searchTerm) {
      return allInterpretes; // Si no hay término, devuelve la lista completa
    }

    // 2. Filtrar por el nombre del actor
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allInterpretes.filter((actor) =>
      actor.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]); // Se recalcula cuando searchTerm cambia

  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
        <p className="text-gray-700 mb-6">
            Estos son los intérpretes disponibles de nuestras películas:
        </p>

        {/* Componente de búsqueda añadido */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar intérpretes por nombre..."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {filteredInterpretes.length > 0 ? (
                filteredInterpretes.map((actor) => (
                    <Link
                        key={`${actor.idPelicula}-${actor.idInterprete}`}
                        to={`/detalle/pelicula/${actor.idPelicula}/interprete/${actor.idInterprete}`}
                        aria-label={`Ver detalles del intérprete ${actor.nombre}`}
                    >
                        <List
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={actor.esNota10}
                        >
                            {actor.biografia}
                        </List>
                    </Link>
                ))
            ) : (
              // Mensaje si no hay resultados
              <p className="col-span-full text-center text-gray-500 p-4">
                No se encontraron intérpretes con el término `{searchTerm}`.
              </p>
            )
            }
        </div>
    </>
  );
}
export default Interpretes;