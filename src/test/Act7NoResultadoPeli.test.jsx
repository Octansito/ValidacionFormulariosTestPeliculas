import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Peliculas from "../pages/Peliculas";

describe('Actividad 7 — Mensaje "No resultados"', () => {
  it("película inexistente (Iron Man):", async () => {
    // Arrange
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Peliculas />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox", {
      name: /buscar películas por nombre\.\.\./i,
    });

    // Act
    await user.type(input, "Iron Man");

    // Assert
    // Tu JSX incluye el término entre backticks: `Iron Man`
    expect(
      screen.getByText("No se encontraron películas con el término `Iron Man`.")
    ).toBeInTheDocument();
  });
});
