// CONTROLADO - Formulario de Película usando useState
import { useState } from "react";

const initialMovieData = {
  nombre: "",
  director: "",
  clasificacion: "",
  recaudacion: "",
  cartelera: "",
  nota: "",
};

// Función de validación para el formulario de Película
const validateMovie = (data) => {
  const errors = {};
  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  if (!data.director.trim()) errors.director = "El director es obligatorio.";
  if (!data.clasificacion.trim())
    errors.clasificacion = "La clasificación es obligatoria.";
  if (!data.nota || Number(data.nota) < 1 || Number(data.nota) > 10)
    errors.nota = "La nota debe estar entre 1 y 10.";
  if (!data.cartelera.trim()) errors.cartelera = "La URL del cartel es obligatoria.";
  // Opcionalmente, puedes añadir una validación regex simple para la URL
  if (data.cartelera && !data.cartelera.startsWith("http")) 
    errors.cartelera = "Debe ser una URL válida.";
  return errors;
};

function FormularioPeliculaControlado() {
  const [movieData, setMovieData] = useState(initialMovieData);
  const [movieErrors, setMovieErrors] = useState({});

  /**
   * Manejador genérico para la actualización del estado agrupado de la Película.
   */
  const handleMovieChange = (e) => {
    const { id, value } = e.target;
    setMovieData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Limpiar el error en tiempo real si el campo se corrige
    if (movieErrors[id]) {
      setMovieErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  /**
   * Envío del formulario de Película.
   */
  const handleMovieSubmit = (e) => {
    e.preventDefault();
    const errors = validateMovie(movieData);
    setMovieErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Nueva Película:", movieData);
      alert(`Película: ${movieData.nombre} enviada.`);
      setMovieData(initialMovieData); // Resetear formulario
    } else {
      console.log("Errores de validación en Película:", errors);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-xl max-w-xl mx-auto w-full">
      <h3 className="text-xl font-semibold mb-6 border-b pb-2 text-blue-600">
        Añadir Nueva Película (Formulario Controlado)
      </h3>
      <form onSubmit={handleMovieSubmit} className="space-y-4" noValidate>
        {/* Nombre Película */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={movieData.nombre}
            onChange={handleMovieChange}
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.nombre ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.nombre}
            aria-describedby={movieErrors.nombre ? "error-nombre-pelicula" : undefined}
          />
          {movieErrors.nombre && (
            <p id="error-nombre-pelicula" className="mt-1 text-sm text-red-600">
              {movieErrors.nombre}
            </p>
          )}
        </div>

        {/* Director */}
        <div>
          <label htmlFor="director" className="block text-sm font-medium text-gray-700">
            Director
          </label>
          <input
            id="director"
            type="text"
            value={movieData.director}
            onChange={handleMovieChange}
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.director ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.director}
            aria-describedby={movieErrors.director ? "error-director-pelicula" : undefined}
          />
          {movieErrors.director && (
            <p id="error-director-pelicula" className="mt-1 text-sm text-red-600">
              {movieErrors.director}
            </p>
          )}
        </div>

        {/* Clasificación */}
        <div>
          <label htmlFor="clasificacion" className="block text-sm font-medium text-gray-700">
            Clasificación (Género)
          </label>
          <input
            id="clasificacion"
            type="text"
            value={movieData.clasificacion}
            onChange={handleMovieChange}
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.clasificacion ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.clasificacion}
            aria-describedby={movieErrors.clasificacion ? "error-clasificacion-pelicula" : undefined}
          />
          {movieErrors.clasificacion && (
            <p id="error-clasificacion-pelicula" className="mt-1 text-sm text-red-600">
              {movieErrors.clasificacion}
            </p>
          )}
        </div>

        {/* Recaudación */}
        <div>
          <label htmlFor="recaudacion" className="block text-sm font-medium text-gray-700">
            Recaudación (Ej: $1.2 millones)
          </label>
          <input
            id="recaudacion"
            type="text"
            value={movieData.recaudacion}
            onChange={handleMovieChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Nota */}
        <div>
          <label htmlFor="nota" className="block text-sm font-medium text-gray-700">
            Nota (1-10)
          </label>
          <input
            id="nota"
            type="number"
            value={movieData.nota}
            onChange={handleMovieChange}
            required
            min="1"
            max="10"
            className={`mt-1 block w-full p-2 border ${
              movieErrors.nota ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.nota}
            aria-describedby={movieErrors.nota ? "error-nota-pelicula" : undefined}
          />
          {movieErrors.nota && (
            <p id="error-nota-pelicula" className="mt-1 text-sm text-red-600">
              {movieErrors.nota}
            </p>
          )}
        </div>

        {/* Cartelera */}
        <div>
          <label htmlFor="cartelera" className="block text-sm font-medium text-gray-700">
            URL Cartelera
          </label>
          <input
            id="cartelera"
            type="url"
            value={movieData.cartelera}
            onChange={handleMovieChange}
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.cartelera ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.cartelera}
            aria-describedby={movieErrors.cartelera ? "error-cartelera-pelicula" : undefined}
          />
          {movieErrors.cartelera && (
            <p id="error-cartelera-pelicula" className="mt-1 text-sm text-red-600">
              {movieErrors.cartelera}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={Object.values(movieErrors).some(e => e)}
        >
          Añadir Película
        </button>
      </form>
    </section>
  );
}

export default FormularioPeliculaControlado;