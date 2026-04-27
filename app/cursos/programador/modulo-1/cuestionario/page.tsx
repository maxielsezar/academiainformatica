"use client";


import Quiz, { Pregunta } from "@/app/components/Quiz"

const preguntas: Pregunta[] = [
  { texto: "Un algoritmo es un conjunto finito de pasos ordenados para resolver un problema.", respuesta: true },
  { texto: "Una estructura de datos solo sirve para almacenar información, no para organizarla.", respuesta: false },
  { texto: "La complejidad Big-O mide cuánto espacio ocupa un algoritmo en memoria.", respuesta: false },
  { texto: "Una lista enlazada permite inserciones y eliminaciones más eficientes que un arreglo en ciertas situaciones.", respuesta: true },
  { texto: "En una pila (stack), el último elemento en entrar es el primero en salir (LIFO).", respuesta: true },
  { texto: "En una cola (queue), el último elemento en entrar es el primero en salir.", respuesta: false },
  { texto: "Un árbol binario puede tener como máximo dos hijos por nodo.", respuesta: true },
  { texto: "La búsqueda binaria solo funciona en listas ordenadas.", respuesta: true },
  { texto: "Un algoritmo con complejidad O(1) tarda el mismo tiempo sin importar el tamaño de la entrada.", respuesta: true },
  { texto: "Los grafos solo pueden representar relaciones lineales entre datos.", respuesta: false },
];


export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 1"
      preguntas={preguntas}
    />
  );
}