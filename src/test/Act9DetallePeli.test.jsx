import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Router from "../components/Router";

describe("Actividad 9 — Parámetros de Ruta en Detail.jsx", () => {
  it('si entramos en /detalle/pelicula/4, muestra "El silencio de los corderos"', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/detalle/pelicula/4"]}>
        <Router />
      </MemoryRouter>
    );

    // Assert
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /el silencio de los corderos/i,
      })
    ).toBeInTheDocument();
  });
});
