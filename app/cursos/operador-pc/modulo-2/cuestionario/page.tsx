"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  { texto: "Microsoft Word es un programa utilizado para crear y editar documentos de texto.", respuesta: true },
  { texto: "En Word no se pueden insertar imágenes.", respuesta: false },
  { texto: "Se puede cambiar el tamaño y tipo de letra desde la pestaña 'Inicio'.", respuesta: true },
  { texto: "Word no permite guardar documentos en diferentes formatos.", respuesta: false },
  { texto: "Es posible aplicar negrita, cursiva y subrayado al texto.", respuesta: true },
  { texto: "Los párrafos no se pueden alinear en Word.", respuesta: false },
  { texto: "Se pueden crear listas con viñetas o números.", respuesta: true },
  { texto: "Word no permite insertar tablas.", respuesta: false },
  { texto: "Se puede guardar un documento usando 'Guardar' o 'Guardar como'.", respuesta: true },
  { texto: "No es posible revisar la ortografía en Word.", respuesta: false },
];


export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 2"
      preguntas={preguntas}
    />
  );
}