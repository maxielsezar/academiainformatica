"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"


const preguntas: Pregunta[] = [
  { texto: "Las imágenes en formato PNG no permiten transparencias.", respuesta: false },
  { texto: "Un archivo MP4 puede contener video y audio.", respuesta: true },
  { texto: "Photoshop es una herramienta utilizada para la edición de imágenes.", respuesta: true },
  { texto: "La resolución de una imagen no influye en su calidad visual.", respuesta: false },
  { texto: "Los efectos de transición se utilizan para cambiar suavemente entre escenas de video.", respuesta: true },
  { texto: "En edición de video, la línea de tiempo sirve para organizar clips y efectos.", respuesta: true },
  { texto: "Los filtros se utilizan para modificar el aspecto visual de imágenes y videos.", respuesta: true },
  { texto: "La edición de imágenes permite mejorar colores, brillo y contraste de una fotografía.", respuesta: true },
  { texto: "Un archivo de video no puede contener audio.", respuesta: false },
  { texto: "En la edición de video se pueden agregar títulos y subtítulos.", respuesta: true },
];




export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 6"
      preguntas={preguntas}
    />
  );
}
