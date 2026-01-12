import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import List from "../components/List";

describe("Actividad 2 — Texto dinámico y accesibilidad (List)", () => {
  it("renderiza correctamente el contenido pasado por children", () => {
    // Arrange
    const nombre = "Robert De Niro";
    const texto = "Biografía / clasificación de prueba";

    render(
      <List foto="foto.jpg" nombre={nombre} esNota10={false}>
        {texto}
      </List>
    );

    // Act
    const children = screen.getAllByText(texto);

    // Assert
    expect(children.length).toBeGreaterThan(0);
  });

  it("la imagen tiene el atributo alt correcto basado en el nombre", () => {
    // Arrange
    const nombre = "Meryl Streep";
    render(
      <List foto="foto.jpg" nombre={nombre} esNota10={false}>
        Texto cualquiera
      </List>
    );

    // Act
    const img = screen.getByAltText(`Foto de ${nombre}`);

    // Assert
    expect(img).toBeInTheDocument();
  });
});
