"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"


const preguntas: Pregunta[] = [
  { texto: "Un portfolio profesional sirve para mostrar proyectos, habilidades y trabajos realizados.", respuesta: true },
  { texto: "Antes de comenzar un proyecto multimedia es recomendable investigar y reunir información.", respuesta: true },
  { texto: "Canva puede utilizarse para diseñar noticias, afiches y otros recursos visuales.", respuesta: true },
  { texto: "Una noticia digital debe tener un título claro y una organización adecuada de la información.", respuesta: true },
  { texto: "Google Sites permite insertar imágenes, videos, documentos y otros recursos multimedia.", respuesta: true },
  { texto: "Un portfolio profesional solo debe contener texto, sin imágenes ni recursos multimedia.", respuesta: false },
  { texto: "Un sitio web creado con Google Sites puede publicarse y compartirse mediante un enlace.", respuesta: true },
  { texto: "Trabajar en grupo implica distribuir tareas y colaborar para alcanzar un objetivo común.", respuesta: true },
  { texto: "Las imágenes y videos pueden enriquecer la presentación de un proyecto multimedia.", respuesta: true },
  { texto: "Una vez publicado un sitio web en Google Sites ya no puede modificarse.", respuesta: false },
];



export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 8"
      preguntas={preguntas}
    />
  );
}
