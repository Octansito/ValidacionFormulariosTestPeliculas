import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado";

describe("Actividad 3 — Validación 'Nombre obligatorio' (Formulario Controlado)", () => {
  it("si se envía con el nombre vacío, muestra el error y marca el input como inválido", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<FormularioPeliculaControlado />);

    const btnEnviar = screen.getByRole("button", { name: /añadir película/i });
    const inputNombre = screen.getByLabelText(/nombre/i);

    // Act
    await user.click(btnEnviar);

    // Assert
    expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();

    // Extra accesibilidad (según tu JSX)
    expect(inputNombre).toHaveAttribute("aria-invalid", "true");
    expect(inputNombre).toHaveAttribute(
      "aria-describedby",
      "error-nombre-pelicula"
    );
  });
});
