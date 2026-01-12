import List from "../components/List";
import { Link } from "react-router-dom";

function Favoritos({ favoritos, toggleFavorito }) {
  if (!favoritos.length) {
    return <p className="text-center mt-8 text-gray-700">No hay favoritos aún.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {favoritos.map((item) => (
        <Link
          key={`${item.tipo}-${item.id}`}
          to={item.tipo === "pelicula" ? `/detalle/pelicula/${item.id}` : `/detalle/pelicula/${item.idPelicula}/interprete/${item.id}`}
        >
          <List
            nombre={item.nombre}
            foto={item.foto}
            esFavorito={true}
            onToggleFavorito={() => toggleFavorito(item)}
          />
        </Link>
      ))}
    </div>
  );
}

export default Favoritos;
