import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormularioPeliculaNoControlado from "../components/FormularioPeliculaNoControlado";

describe("Actividad 10 — Formulario NO controlado", () => {
  it("valida solo al enviar (no mientras escribes)", async () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    const user = userEvent.setup();
    render(<FormularioPeliculaNoControlado />);

    const nombreInput = screen.getByLabelText(/^nombre$/i);

    // Escribo algo (dato distinto)
    await user.type(nombreInput, "Interstellar");

    // Antes de enviar NO deben aparecer errores
    expect(
      screen.queryByText(/la url del cartel es obligatoria/i)
    ).not.toBeInTheDocument();

    // Enviar
    await user.click(screen.getByRole("button", { name: /añadir película/i }));

    // Ahora sí aparece el error (porque no rellené cartelera)
    expect(
      screen.getByText(/la url del cartel es obligatoria/i)
    ).toBeInTheDocument();

    alertSpy.mockRestore();
  });
});
