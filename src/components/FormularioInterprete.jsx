// Formulario controlado para añadir un nuevo intérprete a una película existente
import { useState } from "react";
// Importar el array de películas directamente para obtener los nombres
import peliculas from "../data/peliculas"; 

// Definir el estado inicial del formulario con el campo 'pelicula'
const initialActorData = {
  pelicula: "", // Campo requerido para el selector con la película
  nombre: "",
  fechaNacimiento: "",
  biografia: "",
  imagen: "",
};

// Función de validación para el formulario de Intérprete
const validateActor = (data) => {
  const errors = {};

  if (!data.pelicula.trim()) errors.pelicula = "Debes seleccionar una película.";

  if (!data.nombre.trim()) errors.nombre = "El nombre del intérprete es obligatorio.";
  if (data.biografia.trim().length < 50) 
    errors.biografia = "La biografía debe tener al menos 50 caracteres (mínimo 50).";
  if (!data.imagen.trim()) errors.imagen = "La URL de la imagen es obligatoria.";
  if (data.imagen && !data.imagen.startsWith("http")) 
    errors.imagen = "Debe ser una URL válida.";
  return errors;
};

function FormularioInterprete() {
  const [actorData, setActorData] = useState(initialActorData);
  const [actorErrors, setActorErrors] = useState({});

  /**
   * Manejador genérico para la actualización del estado agrupado del Intérprete.
  */
  const handleActorChange = (e) => {
    const { id, value } = e.target;
    setActorData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Limpiar el error en tiempo real si el campo se corrige
    if (actorErrors[id]) {
      setActorErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  /**
  * Envío del formulario de Intérprete.
  */
  const handleActorSubmit = (e) => {
    e.preventDefault();
    const errors = validateActor(actorData);
    setActorErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Se usa 'pelicula' para saber dónde se guardaría el actor
      console.log(`Nuevo Intérprete para la película "${actorData.pelicula}". Datos Intérprete:`, actorData);
      alert(`Intérprete: ${actorData.nombre} enviado para ${actorData.pelicula}.`);
      setActorData(initialActorData); // Resetear formulario
    } else {
      console.log("Errores de validación en Intérprete:", errors);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-xl max-w-xl mx-auto w-full">
      <h3 className="text-xl font-semibold mb-6 border-b pb-2 text-green-600">
        Añadir Nuevo Intérprete
      </h3>
      <form onSubmit={handleActorSubmit} className="space-y-4" noValidate>
        {/* Selector de Película */}
        <div>
          <label htmlFor="pelicula" className="block text-sm font-medium text-gray-700">
            Película
          </label>
          <select
            id="pelicula"
            value={actorData.pelicula}
            onChange={handleActorChange}
            required
            className={`mt-1 block w-full p-2 border ${
              actorErrors.pelicula ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500`}
            aria-invalid={!!actorErrors.pelicula}
            aria-describedby={actorErrors.pelicula ? "error-pelicula-actor" : undefined}
          >
            <option value="" disabled>Selecciona una película</option>
            {peliculas.map((p) => ( // Rellena con los nombres de peliculas.js
              <option key={p.id} value={p.nombre}>
                {p.nombre}
              </option>
            ))}
          </select>
          {actorErrors.pelicula && (
            <p id="error-pelicula-actor" className="mt-1 text-sm text-red-600">
              {actorErrors.pelicula}
            </p>
          )}
        </div>

        {/* Nombre Intérprete */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={actorData.nombre}
            onChange={handleActorChange}
            required
            className={`mt-1 block w-full p-2 border ${
              actorErrors.nombre ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500`}
            aria-invalid={!!actorErrors.nombre}
            aria-describedby={actorErrors.nombre ? "error-nombre-actor" : undefined}
          />
          {actorErrors.nombre && (
            <p id="error-nombre-actor" className="mt-1 text-sm text-red-600">
              {actorErrors.nombre}
            </p>
          )}
        </div>

        {/* Fecha de Nacimiento */}
        <div>
          <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">
            Fecha de Nacimiento
          </label>
          <input
            id="fechaNacimiento"
            type="date"
            value={actorData.fechaNacimiento}
            onChange={handleActorChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Biografía */}
        <div>
          <label htmlFor="biografia" className="block text-sm font-medium text-gray-700">
            Biografía
          </label>
          <textarea
            id="biografia"
            value={actorData.biografia}
            onChange={handleActorChange}
            required
            rows="4"
            minLength={50}
            className={`mt-1 block w-full p-2 border ${
              actorErrors.biografia ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500`}
            aria-invalid={!!actorErrors.biografia}
            aria-describedby={actorErrors.biografia ? "error-biografia-actor" : undefined}
          />
          {actorErrors.biografia && (
            <p id="error-biografia-actor" className="mt-1 text-sm text-red-600">
              {actorErrors.biografia}
            </p>
          )}
        </div>

        {/* Imagen URL */}
        <div>
          <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
            URL Imagen
          </label>
          <input
            id="imagen"
            type="url"
            value={actorData.imagen}
            onChange={handleActorChange}
            required
            className={`mt-1 block w-full p-2 border ${
              actorErrors.imagen ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500`}
            aria-invalid={!!actorErrors.imagen}
            aria-describedby={actorErrors.imagen ? "error-imagen-actor" : undefined}
          />
          {actorErrors.imagen && (
            <p id="error-imagen-actor" className="mt-1 text-sm text-red-600">
              {actorErrors.imagen}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          disabled={Object.values(actorErrors).some(e => e)}
        >
          Añadir Intérprete
        </button>
      </form>
    </section>
  );
}

export default FormularioInterprete;
