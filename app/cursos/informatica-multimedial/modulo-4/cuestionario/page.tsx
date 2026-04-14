"use client";
import { useState } from "react";

type Pregunta = {
  texto: string;
  respuesta: boolean;
};

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
      <h2 className="text-2xl font-bold text-blue-900">Cuestionario Modulo 4</h2>

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