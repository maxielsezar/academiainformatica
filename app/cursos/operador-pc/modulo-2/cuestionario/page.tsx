"use client";
import { useState } from "react";

type Pregunta = {
  texto: string;
  respuesta: boolean;
};

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

export default function Cuestionario() {
  const [respuestas, setRespuestas] = useState<(boolean | null)[]>(Array(preguntas.length).fill(null));
  const [resultado, setResultado] = useState<number | null>(null);
  const [corregido, setCorregido] = useState(false);

  const manejarCambio = (index: number, valor: boolean) => {
    if (corregido) return;
    const nuevas = [...respuestas];
    nuevas[index] = valor;
    setRespuestas(nuevas);
  };

  const corregir = () => {
    let puntaje = 0;
    respuestas.forEach((resp, i) => {
      if (resp === preguntas[i].respuesta) {
        puntaje++;
      }
    });
    setResultado(puntaje);
    setCorregido(true);
  };

  const getColor = (i: number) => {
    if (!corregido) return "";
    if (respuestas[i] === preguntas[i].respuesta) {
      return "border-green-500 bg-green-50 dark:bg-green-900";
    } else {
      return "border-red-500 bg-red-50 dark:bg-red-900";
    }
  };

  return (
    <div className="py-8 space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Cuestionario Modulo 2</h2>

      {preguntas.map((pregunta, i) => (
        <div key={i} className={`p-5 border rounded-xl space-y-2 ${getColor(i)}`}>
          <p className="font-medium">{i + 1}. {pregunta.texto}</p>

          <div className="flex gap-4">
            <button
              onClick={() => manejarCambio(i, true)}
              className={`px-4 py-2 rounded-lg border ${
                respuestas[i] === true ? "bg-green-500 text-white" : ""
              }`}
            >
              Verdadero
            </button>

            <button
              onClick={() => manejarCambio(i, false)}
              className={`px-4 py-2 rounded-lg border ${
                respuestas[i] === false ? "bg-red-500 text-white" : ""
              }`}
            >
              Falso
            </button>
          </div>

          {/* Mostrar respuesta correcta si se equivocó */}
          {corregido && respuestas[i] !== preguntas[i].respuesta && (
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Respuesta correcta:{" "}
              <span className="font-semibold">
                {preguntas[i].respuesta ? "Verdadero" : "Falso"}
              </span>
            </p>
          )}
        </div>
      ))}

      {!corregido && (
        <button
          onClick={corregir}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Corregir
        </button>
      )}

      {resultado !== null && (
        <div className="text-center text-xl font-bold">
          Puntaje: {resultado} / {preguntas.length}
        </div>
      )}
    </div>
  );
}