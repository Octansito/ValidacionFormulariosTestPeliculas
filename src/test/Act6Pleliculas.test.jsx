import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Peliculas from "../pages/Peliculas";

describe("Actividad 6 — Buscador de Películas (Case Insensitive)", () => {
  it('encuentra "El sexto sentido" aunque escribas "sexto" en minúsculas', async () => {
    // Arrange
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Peliculas />
      </MemoryRouter>
    );

    // El input viene del SearchBar y tiene placeholder/aria-label con este texto
    const input = screen.getByRole("textbox", {
      name: /buscar películas por nombre\.\.\./i,
    });

    // Act
    await user.type(input, "sexto");

    // Assert
    // Debe aparecer la película filtrada
    expect(screen.getByText(/el sexto sentido/i)).toBeInTheDocument();
  });
});
