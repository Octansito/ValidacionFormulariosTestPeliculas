import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Router from "../components/Router";

describe("Actividad 8 — Navegación al Detalle", () => {
  it("al hacer clic en una película del listado, navega a su detalle", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/peliculas"]}>
        <Router />
      </MemoryRouter>
    );

    // Elegimos una peli del listado
    const pelicula = screen.getByText(/el sexto sentido/i);

    // Act
    await user.click(pelicula);

    // Assert
    expect(
      screen.getByRole("heading", { level: 1, name: /el sexto sentido/i })
    ).toBeInTheDocument();
  });
});
