import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado";

describe("Actividad 5 — Reset de Formulario (Controlado)", () => {
  it("al enviar correctamente, el campo nombre vuelve a estar vacío", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<FormularioPeliculaControlado />);

    const inputNombre = screen.getByLabelText(/^nombre$/i);
    const inputDirector = screen.getByLabelText(/director/i);
    const inputClasificacion = screen.getByLabelText(/clasificación/i);
    const inputNota = screen.getByLabelText(/nota/i);
    const inputCartelera = screen.getByLabelText(/url cartelera/i);

    const btnEnviar = screen.getByRole("button", { name: /añadir película/i });

    // Act (rellenar todo lo obligatorio bien)
    await user.type(inputNombre, "Blade Runner");
    await user.type(inputDirector, "Ridley Scott");
    await user.type(inputClasificacion, "Ciencia ficción");
    await user.type(inputNota, "9");
    await user.type(inputCartelera, "http://example.com/cartel.jpg");

    await user.click(btnEnviar);

    // Assert (reset)
    expect(inputNombre).toHaveValue("");
  });
});
