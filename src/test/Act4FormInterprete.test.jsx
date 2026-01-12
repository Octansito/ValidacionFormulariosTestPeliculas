import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioInterprete from "../components/FormularioInterprete";

describe("Actividad 4 — Longitud de Biografía en Intérpretes", () => {
  it("muestra el error si la biografía tiene menos de 50 caracteres", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<FormularioInterprete />);

    const selectPelicula = screen.getByLabelText(/película/i);
    const inputNombre = screen.getByLabelText(/^nombre$/i);
    const textareaBio = screen.getByLabelText(/biografía/i);
    const inputImagen = screen.getByLabelText(/url imagen/i);
    const btnEnviar = screen.getByRole("button", {
      name: /añadir intérprete/i,
    });

    // Act
    // Seleccionamos una película (cogemos la 2ª opción, porque la 1ª está disabled)
    await user.selectOptions(
      selectPelicula,
      selectPelicula.querySelectorAll("option")[1].value
    );

    await user.type(inputNombre, "Antonio Banderas");
    await user.type(textareaBio, "Biografía demasiado corta para validar."); // < 50
    await user.type(inputImagen, "http://BanderasAntonio.com/foto.jpg");

    await user.click(btnEnviar);

    // Assert
    expect(
      screen.getByText(/la biografía debe tener al menos 50 caracteres/i)
    ).toBeInTheDocument();

    // Extra (por tu JSX)
    expect(textareaBio).toHaveAttribute("aria-invalid", "true");
    expect(textareaBio).toHaveAttribute(
      "aria-describedby",
      "error-biografia-actor"
    );
  });
});
