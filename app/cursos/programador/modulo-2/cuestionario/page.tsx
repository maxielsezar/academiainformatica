"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  { texto: "La programación orientada a objetos organiza el software mediante clases y objetos.", respuesta: true },

  { texto: "La herencia permite reutilizar código entre clases.", respuesta: true },

  { texto: "El encapsulamiento consiste en hacer todos los atributos públicos.", respuesta: false },

  { texto: "El polimorfismo permite que un mismo método tenga diferentes comportamientos.", respuesta: true },

  { texto: "Una clase es una instancia concreta creada en memoria.", respuesta: false },

  { texto: "Un objeto puede tener atributos y métodos.", respuesta: true },

  { texto: "La abstracción permite ocultar detalles internos y mostrar solo lo necesario.", respuesta: true },

  { texto: "La cohesión alta es recomendable porque las clases tienen responsabilidades relacionadas.", respuesta: true },

  { texto: "El acoplamiento alto entre clases facilita el mantenimiento del sistema.", respuesta: false },

  { texto: "La sobreescritura de métodos ocurre cuando una clase hija redefine un método de la clase padre.", respuesta: true },

];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Programación Orientada a Objetos"
      preguntas={preguntas}
    />
  );
}