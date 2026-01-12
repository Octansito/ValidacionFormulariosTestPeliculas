import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import List from "../components/List";

describe("Actividad 1 — Componente List", () => {
  it("muestra el nombre correctamente pasado por props", () => {
    const nombre = "Penélope Cruz";
    //Arrange
    render(
      <List foto="fotoPenelope.jpg" nombre={nombre} esNota10={false}>
        Reparto
      </List>
    );
    //Act
    const titulo = screen.getByRole("heading", {
      name: new RegExp(nombre, "i"),
    });
    //Assert
    expect(titulo).toBeInTheDocument();
  });

  it("muestra el título en rojo si esNota10 es true", () => {
    const nombre = "Keanu Reeves";

    render(
      <List foto="fotoKeanuR.jpg" nombre={nombre} esNota10={true}>
        Protagonista
      </List>
    );

    const titulo = screen.getByRole("heading", {
      name: new RegExp(nombre, "i"),
    });
    expect(titulo).toHaveClass("text-red-600");
  });

  it("NO muestra el título en rojo si esNota10 es false", () => {
    const nombre = "Sigourney Weaver";

    render(
      <List foto="fotoSihourneyW.jpg" nombre={nombre} esNota10={false}>
        Secundaria
      </List>
    );

    const titulo = screen.getByRole("heading", {
      name: new RegExp(nombre, "i"),
    });
    expect(titulo).not.toHaveClass("text-red-600");
  });
});
