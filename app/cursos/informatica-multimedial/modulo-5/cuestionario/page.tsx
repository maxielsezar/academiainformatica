"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  { texto: "Un texto es un conjunto de palabras organizadas que transmiten un mensaje con sentido.", respuesta: true },
  { texto: "El hipertexto permite una lectura lineal obligatoria sin posibilidad de elegir el recorrido.", respuesta: false },
  { texto: "Los hipervínculos permiten conectar distintas partes de un documento o páginas web.", respuesta: true },
  { texto: "En el hipertexto, el usuario puede decidir qué camino seguir al leer la información.", respuesta: true },
  { texto: "Un texto digital no puede contener enlaces ni elementos interactivos.", respuesta: false },
  { texto: "El hipertexto es la base de la navegación en Internet.", respuesta: true },
  { texto: "Los enlaces solo pueden dirigir a páginas externas y no a partes del mismo documento.", respuesta: false },
  { texto: "Un texto tradicional se lee generalmente de forma lineal, de principio a fin.", respuesta: true },
  { texto: "Los hipervínculos pueden estar en textos, imágenes o botones.", respuesta: true },
  { texto: "El hipertexto no mejora la organización ni el acceso a la información.", respuesta: false },
];


export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 5"
      preguntas={preguntas}
    />
  );
}
