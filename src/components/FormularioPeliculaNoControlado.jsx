// NO CONTROLADO - Formulario de Película usando useRef
import { useState, useRef } from "react"; 

// Función de validación (se mantiene igual, ya que solo necesita los datos)
const validateMovie = (data) => {
  const errors = {};
  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  if (!data.director.trim()) errors.director = "El director es obligatorio.";
  if (!data.clasificacion.trim())
    errors.clasificacion = "La clasificación es obligatoria.";
  
  // Convertimos la nota a número antes de validar
  const notaNum = Number(data.nota);
  if (isNaN(notaNum) || notaNum < 1 || notaNum > 10)
    errors.nota = "La nota debe estar entre 1 y 10.";
  
  if (!data.cartelera.trim()) errors.cartelera = "La URL del cartel es obligatoria.";
  if (data.cartelera && !data.cartelera.startsWith("http")) 
    errors.cartelera = "Debe ser una URL válida.";
  return errors;
};

function FormularioPeliculaNoControlado() {
  // Solo necesitamos estado para los errores (para mostrar el feedback)
  const [movieErrors, setMovieErrors] = useState({});
  
  // Creamos referencias para cada input
  const nombreRef = useRef(null);
  const directorRef = useRef(null);
  const clasificacionRef = useRef(null);
  const recaudacionRef = useRef(null);
  const carteleraRef = useRef(null);
  const notaRef = useRef(null);

  // handleMovieChange, ya no se usa.
  
  /**
   * Envío del formulario de Película.
   */
  const handleMovieSubmit = (e) => {
    e.preventDefault();
    
    // Construimos el objeto de datos leyendo el valor actual de cada referencia
    const movieData = {
      nombre: nombreRef.current.value,
      director: directorRef.current.value,
      clasificacion: clasificacionRef.current.value,
      recaudacion: recaudacionRef.current.value,
      cartelera: carteleraRef.current.value,
      nota: notaRef.current.value,
    };
    
    const errors = validateMovie(movieData);
    setMovieErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Nueva Película:", movieData);
      alert(`Película: ${movieData.nombre} enviada.`);
      
      // Para resetear, debemos acceder al elemento DOM vía ref
      e.target.reset(); // Opcionalmente, se puede usar el método nativo reset del formulario
      setMovieErrors({});
    } else {
      console.log("Errores de validación en Película:", errors);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-xl max-w-xl mx-auto w-full">
      <h3 className="text-xl font-semibold mb-6 border-b pb-2 text-blue-600">
        Añadir Nueva Película (Formulario NO Controlado)
      </h3>
      <form onSubmit={handleMovieSubmit} className="space-y-4" noValidate>
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          {/* Usamos ref en lugar de value y onChange */}
          <input
            id="nombre"
            type="text"
            ref={nombreRef} // Referencia
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.nombre ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.nombre}
            aria-describedby={movieErrors.nombre ? "error-nombre-pelicula" : undefined}
          />
          {movieErrors.nombre && (
            <p id="error-nombre-pelicula" className="mt-1 text-sm text-red-600">{movieErrors.nombre}</p>
          )}
        </div>

        {/* Director */}
        <div>
          <label htmlFor="director" className="block text-sm font-medium text-gray-700">Director</label>
          <input
            id="director"
            type="text"
            ref={directorRef} // Referencia
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.director ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.director}
            aria-describedby={movieErrors.director ? "error-director-pelicula" : undefined}
          />
          {movieErrors.director && (
            <p id="error-director-pelicula" className="mt-1 text-sm text-red-600">{movieErrors.director}</p>
          )}
        </div>

        {/* Clasificación */}
        <div>
          <label htmlFor="clasificacion" className="block text-sm font-medium text-gray-700">Clasificación (Género)</label>
          <input
            id="clasificacion"
            type="text"
            ref={clasificacionRef} // Referencia
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.clasificacion ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.clasificacion}
            aria-describedby={movieErrors.clasificacion ? "error-clasificacion-pelicula" : undefined}
          />
          {movieErrors.clasificacion && (
            <p id="error-clasificacion-pelicula" className="mt-1 text-sm text-red-600">{movieErrors.clasificacion}</p>
          )}
        </div>

        {/* Recaudación */}
        <div>
          <label htmlFor="recaudacion" className="block text-sm font-medium text-gray-700">Recaudación (Ej: $1.2 millones)</label>
          <input
            id="recaudacion"
            type="text"
            ref={recaudacionRef} // Referencia
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Nota */}
        <div>
          <label htmlFor="nota" className="block text-sm font-medium text-gray-700">Nota (1-10)</label>
          <input
            id="nota"
            type="number"
            ref={notaRef} // Referencia
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
            <p id="error-nota-pelicula" className="mt-1 text-sm text-red-600">{movieErrors.nota}</p>
          )}
        </div>

        {/* Cartelera */}
        <div>
          <label htmlFor="cartelera" className="block text-sm font-medium text-gray-700">URL Cartelera</label>
          <input
            id="cartelera"
            type="url"
            ref={carteleraRef} // Referencia
            required
            className={`mt-1 block w-full p-2 border ${
              movieErrors.cartelera ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            aria-invalid={!!movieErrors.cartelera}
            aria-describedby={movieErrors.cartelera ? "error-cartelera-pelicula" : undefined}
          />
          {movieErrors.cartelera && (
            <p id="error-cartelera-pelicula" className="mt-1 text-sm text-red-600">{movieErrors.cartelera}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Añadir Película
        </button>
      </form>
    </section>
  );
}

export default FormularioPeliculaNoControlado;
