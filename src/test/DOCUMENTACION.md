Documentación hecha para la actividad de Test en Películas - Rafael Reina Ferrández

## Actividad 1

Reto:
Comprueba que el componente List muestra correctamente el nombre pasado por props y que, si la película tiene una nota de 10, el título aparece en color rojo (clase text-red-600).

Prompt IA:
Actúa como profesor de testing en React. Quiero aprender a diseñar un test unitario con Vitest + React Testing Library para un componente List que recibe props y aplica una clase CSS condicional.
Explícame cómo identificar en el JSX qué parte cambia según esNota10 y qué selector accesible debo usar para localizar el título.
Dame un esqueleto de test siguiendo AAA (Arrange/Act/Assert) y dime qué debo comprobar en cada fase.

Explicación de los test:
Arrange:
Renderizo el componente <List /> pasando props (foto, nombre, esNota10) y un texto por children. Hago 3 casos:
-renderiza el nombre,
-si esNota10=true el título va en rojo,
-si esNota10=false el título NO va en rojo.
Act:
-Localizo el título usando un selector accesible: screen.getByRole("heading", { name: /.../i })
-No hay interacción del usuario en esta actividad.

Assert:
-Compruebo que el título existe en el DOM (toBeInTheDocument).
-Compruebo que tiene la clase text-red-600 cuando esNota10 es true.
-Compruebo que no tiene text-red-600 cuando esNota10 es false (con .not.toHaveClass(...)).

![alt text](image.png)

## Actividad 2

## Actividad 3

## Actividad 4

## Actividad 5

## Actividad 6

## Actividad 7

## Actividad 8

## Actividad 9

## Actividad 10
