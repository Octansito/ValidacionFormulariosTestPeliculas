import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import peliculas from "../data/peliculas"; 
import List from "../components/List"; 
import SearchBar from "../components/SearchBar"; 

function Peliculas() {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredPeliculas = useMemo(() => {
    if (!searchTerm) {
      return peliculas; // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return peliculas.filter((pelicula) =>
      // Filtra por el nombre de la película
      pelicula.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de películas</h2>
        <p className="text-gray-700 mb-6">
            Estas son los películas disponibles:
        </p>

        {/* Componente de búsqueda añadido */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar películas por nombre..."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {filteredPeliculas.length > 0 ? (
                filteredPeliculas.map((pelicula) => (
                    <Link key={pelicula.id} to={`/detalle/pelicula/${pelicula.id}`}>
                        <List
                            nombre={pelicula.nombre}
                            foto={pelicula.cartelera}
                            esNota10={pelicula.nota===10}
                        >
                            {pelicula.clasificacion}
                        </List>
                    </Link>
                    ))
            ) : (
                // Mensaje si no hay resultados
                <p className="col-span-full text-center text-gray-500 p-4">
                  No se encontraron películas con el término `{searchTerm}`.
                </p>
            )
            }
        </div>
    </>
  );
}
export default Peliculas;