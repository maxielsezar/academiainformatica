"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  {
    texto: "Internet permite compartir e intercambiar información entre dispositivos conectados.",
    respuesta: true,
  },

  {
    texto: "Un navegador web y un motor de búsqueda son exactamente lo mismo.",
    respuesta: false,
  },

  {
    texto: "Google Chrome, Microsoft Edge y Firefox son navegadores web.",
    respuesta: true,
  },

  {
    texto: "El correo electrónico solo permite enviar mensajes de texto y no archivos.",
    respuesta: false,
  },

  {
    texto: "Google Drive permite almacenar archivos en la nube.",
    respuesta: true,
  },

  {
    texto: "Los formularios web pueden utilizarse para recopilar información de usuarios.",
    respuesta: true,
  },

  {
    texto: "El cable Ethernet se utiliza para conectar dispositivos a una red.",
    respuesta: true,
  },

  {
    texto: "La topología de red describe únicamente la velocidad de Internet.",
    respuesta: false,
  },

  {
    texto: "Una red LAN generalmente se utiliza dentro de hogares, oficinas o escuelas.",
    respuesta: true,
  },

  {
    texto: "Los Plugins sirven para agregar funciones nuevas a un navegador.",
    respuesta: true,
  },
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 4 - Internet y Recursos de la Web"
      preguntas={preguntas}
    />
  );

}