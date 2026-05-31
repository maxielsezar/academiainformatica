"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  { texto: "La función SUMA se utiliza para multiplicar números.", respuesta: false },
  { texto: "Excel no permite crear gráficos.", respuesta: false },
  { texto: "Las tablas dinámicas sirven para analizar y resumir datos.", respuesta: true },
  { texto: "La función SI permite realizar decisiones lógicas.", respuesta: true },
  { texto: "La función CONTAR.SI permite contar celdas que cumplen una condición.", respuesta: true },
  { texto: "La función CONCATENAR sirve para unir textos.", respuesta: true },
  { texto: "La función HOY() devuelve la fecha actual del sistema.", respuesta: true },
  { texto: "Los filtros permiten mostrar únicamente los datos que cumplen ciertos criterios.", respuesta: true },
  { texto: "El formato condicional solo puede cambiar el color de una celda manualmente.", respuesta: false },
  { texto: "Los gráficos dinámicos pueden vincularse a tablas dinámicas.", respuesta: true },
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 3 - Excel"
      preguntas={preguntas}
    />
  );
}