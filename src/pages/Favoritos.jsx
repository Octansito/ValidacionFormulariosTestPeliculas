import List from "../components/List";

function Favoritos({ favoritos, toggleFavorito }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No hay favoritos seleccionados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
          {favoritos.map((item, index) => (
            <List
              key={index}
              nombre={item.nombre}
              foto={item.foto}
              esFavorito={true}
              onToggleFavorito={() => toggleFavorito(item)}
            >
              {item.tipo}
            </List>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
