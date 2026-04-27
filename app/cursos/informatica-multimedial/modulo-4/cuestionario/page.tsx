"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  { texto: "La multimedia es la integración de texto, imagen, audio, video y animación en un mismo entorno.", respuesta: true },
  { texto: "La multimedia solo utiliza imágenes y no incluye sonido ni video.", respuesta: false },
  { texto: "La multimedia es considerada un nuevo medio de comunicación por su capacidad de combinar distintos formatos.", respuesta: true },
  { texto: "La comunicación audiovisual utiliza únicamente palabras habladas o escritas.", respuesta: false },
  { texto: "Las producciones multimedia pueden utilizarse en ámbitos educativos, comerciales y recreativos.", respuesta: true },
  { texto: "La interactividad permite que el usuario participe activamente en una aplicación multimedia.", respuesta: true },
  { texto: "Un sistema interactivo no responde a las acciones del usuario.", respuesta: false },
  { texto: "Los íconos y carteles no forman parte de la comunicación visual.", respuesta: false },
  { texto: "Los textos instructivos ayudan a guiar al usuario dentro de una aplicación multimedia.", respuesta: true },
  { texto: "Reconocer símbolos e íconos es importante para interpretar correctamente la información visual.", respuesta: true },
];


export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 4"
      preguntas={preguntas}
    />
  );
}