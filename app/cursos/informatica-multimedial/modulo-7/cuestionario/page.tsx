"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"


const preguntas: Pregunta[] = [
  { texto: "Audacity permite grabar audio utilizando un micrófono conectado a la computadora.", respuesta: true },
  { texto: "La herramienta de selección sirve para elegir partes específicas de una pista de audio.", respuesta: true },
  { texto: "La reducción de ruido permite eliminar sonidos de fondo no deseados.", respuesta: true },
  { texto: "Una pista de audio no puede moverse dentro de la línea de tiempo.", respuesta: false },
  { texto: "El formato MP3 es uno de los formatos más utilizados para exportar audio.", respuesta: true },
  { texto: "El botón rojo de Audacity se utiliza para iniciar una grabación.", respuesta: true },
  { texto: "Es recomendable grabar audio en ambientes con mucho ruido de fondo.", respuesta: false },
  { texto: "Una producción audiovisual combina imagen, video y sonido para comunicar un mensaje.", respuesta: true },
  { texto: "Los proyectos de Audacity solo pueden contener una única pista de audio.", respuesta: false },
  { texto: "La calidad del audio no influye en el resultado final de una producción audiovisual.", respuesta: false },
];



export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 7"
      preguntas={preguntas}
    />
  );
}
