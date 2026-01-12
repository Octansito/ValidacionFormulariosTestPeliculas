import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado";

describe("Actividad 3 — Validación 'Nombre obligatorio' (Formulario Controlado)", () => {
  it("si se envía el formulario con el nombre vacío, aparece el mensaje 'El nombre es obligatorio'", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<FormularioPeliculaControlado />);

    const botonEnviar = screen.getByRole("button", {
      name: /añadir película/i,
    });

    // Act
    await user.click(botonEnviar);

    // Assert
    expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
  });
});
