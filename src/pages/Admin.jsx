import { NavLink, Outlet, useLocation, Navigate } from "react-router-dom";

function Admin() {
  const location = useLocation();

  // Si la ruta actual es exactamente /admin, redirige a /admin/pelicula por defecto
  if (location.pathname === "/admin") {
    return <Navigate to="/admin/peliculaformcont" replace />;
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-center">
        Panel de Administración
      </h2>

      {/* Navegación de Administración */}
      <nav className="flex justify-center gap-4 border-b pb-2 mb-4">
        <NavLink
          to="peliculaformcont"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
              isActive ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Añadir Película (Controlado)
        </NavLink>
                <NavLink
          to="peliculaformnocont"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
              isActive ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Añadir Película (No Controlado)
        </NavLink>
        <NavLink
          to="interprete"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
              isActive ? "bg-green-100 text-green-800 border-b-2 border-green-600" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Añadir Intérprete
        </NavLink>
      </nav>

      {/* Contenido de la Sub-Ruta (Formulario) */}
      <div className="mt-4">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Admin;