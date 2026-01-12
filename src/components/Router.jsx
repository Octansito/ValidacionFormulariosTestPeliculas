import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";
import Detail from "./Detail";

import Home from "../pages/Home";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
// import Favoritos from "../pages/Favoritos.jsx";
import Admin from "../pages/Admin";
import FormularioInterprete from "../components/FormularioInterprete";
import FormularioPeliculaControlado from "./FormularioPeliculaControlado";
import FormularioPeliculaNoControlado from "./FormularioPeliculaNoControlado";

function AppRouter() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        {/* <Route path="/favoritos" element={<Favoritos />} /> */}

        {/* Rutas de Administración (Anidadas) */}
        <Route path="/admin" element={<Admin />}>
          {/* Ruta por defecto (Redirige en Admin.jsx) o la primera sub-página */}
          <Route index element={<FormularioPeliculaControlado />} /> {/* <Route index> es la ruta por defecto en /admin */}
          
          {/* Sub-Rutas específicas */}
          <Route path="peliculaformcont" element={<FormularioPeliculaControlado />} />
          <Route path="peliculaformnocont" element={<FormularioPeliculaNoControlado />} />
          <Route path="interprete" element={<FormularioInterprete />} />
        </Route>

        <Route path="/detalle/pelicula/:idPeli" element={<Detail es="pelicula" />} />
        <Route path="/detalle/pelicula/:idPeli/interprete/:idInterprete" element={<Detail es="interprete" />} />
      </Route>

      {/* Página 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta no existe.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}
export default AppRouter;