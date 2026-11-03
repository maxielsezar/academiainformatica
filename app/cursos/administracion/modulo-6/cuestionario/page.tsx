"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz";

const preguntas: Pregunta[] = [
  // Introducción a las presentaciones digitales

  {
    texto:
      "Las presentaciones digitales permiten organizar información en diapositivas para comunicar ideas frente a un público.",
    respuesta: true,
  },
  {
    texto:
      "Una presentación digital solamente puede contener texto y no permite incorporar imágenes, gráficos o videos.",
    respuesta: false,
  },
  {
    texto:
      "Las presentaciones pueden utilizarse en reuniones, capacitaciones, charlas y exposiciones institucionales.",
    respuesta: true,
  },
  {
    texto:
      "Una presentación efectiva debe incluir la mayor cantidad posible de información en cada diapositiva.",
    respuesta: false,
  },

  // Interfaz y herramientas del editor

  {
    texto:
      "La barra de título permite identificar el nombre de la presentación y la aplicación utilizada.",
    respuesta: true,
  },
  {
    texto:
      "El panel de diapositivas permite visualizar y seleccionar las diferentes diapositivas de una presentación.",
    respuesta: true,
  },
  {
    texto:
      "La barra de estado puede mostrar información como el número de diapositiva y el nivel de zoom.",
    respuesta: true,
  },
  {
    texto:
      "El área de trabajo es el espacio donde se editan los elementos de la diapositiva seleccionada.",
    respuesta: true,
  },
  {
    texto:
      "Las notas del presentador están destinadas exclusivamente a modificar los colores de las diapositivas.",
    respuesta: false,
  },

  // Diseño y estructura de diapositivas

  {
    texto:
      "Una presentación debe organizar sus diapositivas siguiendo una secuencia lógica relacionada con el tema.",
    respuesta: true,
  },
  {
    texto:
      "Los diseños predeterminados permiten organizar títulos, textos, imágenes y otros elementos dentro de una diapositiva.",
    respuesta: true,
  },
  {
    texto:
      "Utilizar diferentes tamaños y tipos de letra sin ningún criterio mejora siempre la presentación.",
    respuesta: false,
  },
  {
    texto:
      "Los fondos, colores y rellenos deben seleccionarse procurando que el contenido pueda leerse correctamente.",
    respuesta: true,
  },
  {
    texto:
      "Mantener una identidad visual coherente permite que las diapositivas tengan una apariencia uniforme.",
    respuesta: true,
  },
  {
    texto:
      "La orientación y el tamaño de las diapositivas pueden configurarse según las necesidades de la presentación.",
    respuesta: true,
  },

  // Textos, imágenes y gráficos

  {
    texto:
      "Los cuadros de texto permiten incorporar títulos, explicaciones y otros contenidos escritos en una diapositiva.",
    respuesta: true,
  },
  {
    texto:
      "Las imágenes deben seleccionarse teniendo en cuenta su relación con el contenido de la presentación.",
    respuesta: true,
  },
  {
    texto:
      "Modificar el tamaño de una imagen siempre implica que se pierda su proporción original.",
    respuesta: false,
  },
  {
    texto:
      "Los gráficos permiten representar visualmente datos y facilitar su interpretación.",
    respuesta: true,
  },
  {
    texto:
      "Los elementos gráficos deben ubicarse de manera que no dificulten la lectura del contenido.",
    respuesta: true,
  },

  // Animaciones y transiciones

  {
    texto:
      "Las animaciones permiten aplicar efectos de movimiento o aparición a los objetos de una diapositiva.",
    respuesta: true,
  },
  {
    texto:
      "Las transiciones son efectos que se producen al pasar de una diapositiva a otra.",
    respuesta: true,
  },
  {
    texto:
      "Las animaciones y las transiciones cumplen exactamente la misma función.",
    respuesta: false,
  },
  {
    texto:
      "El orden de las animaciones permite establecer la secuencia en la que aparecen los diferentes elementos.",
    respuesta: true,
  },
  {
    texto:
      "Aplicar numerosos efectos de animación en todas las diapositivas mejora necesariamente la comunicación.",
    respuesta: false,
  },

  // Sonido y video

  {
    texto:
      "Los archivos de audio pueden utilizarse para incorporar narraciones, entrevistas y explicaciones en una presentación.",
    respuesta: true,
  },
  {
    texto:
      "El formato MP3 es utilizado habitualmente para almacenar archivos de audio.",
    respuesta: true,
  },
  {
    texto:
      "El formato MP4 es utilizado habitualmente para almacenar archivos de video.",
    respuesta: true,
  },
  {
    texto:
      "Los videos pueden ayudar a demostrar procedimientos y mostrar situaciones relacionadas con el tema presentado.",
    respuesta: true,
  },
  {
    texto:
      "Los recursos multimedia siempre se reproducen correctamente en cualquier computadora sin necesidad de realizar pruebas.",
    respuesta: false,
  },
  {
    texto:
      "La reproducción de un archivo multimedia puede configurarse para comenzar automáticamente o mediante una acción del usuario.",
    respuesta: true,
  },
  {
    texto:
      "Antes de exponer una presentación con audio y video es conveniente comprobar que los recursos funcionen correctamente.",
    respuesta: true,
  },
  {
    texto:
      "Los recursos audiovisuales deben seleccionarse considerando su duración, calidad y relación con el contenido.",
    respuesta: true,
  },

  // Herramientas de dibujo y recursos gráficos

  {
    texto:
      "Las herramientas de dibujo permiten insertar líneas, flechas, formas geométricas y otros elementos visuales.",
    respuesta: true,
  },
  {
    texto:
      "Las formas geométricas pueden utilizarse para destacar información y representar conceptos.",
    respuesta: true,
  },
  {
    texto:
      "El relleno permite modificar el interior de una figura, mientras que el contorno modifica su borde.",
    respuesta: true,
  },
  {
    texto:
      "Agrupar objetos permite trabajar con varios elementos como si fueran una sola unidad.",
    respuesta: true,
  },
  {
    texto:
      "La distribución de objetos permite mantener espacios regulares entre diferentes elementos gráficos.",
    respuesta: true,
  },
  {
    texto:
      "Los conectores y las flechas pueden utilizarse para representar relaciones y secuencias de un procedimiento.",
    respuesta: true,
  },
  {
    texto:
      "Los iconos, ilustraciones y clip-arts pueden complementar visualmente la información de una presentación.",
    respuesta: true,
  },
  {
    texto:
      "Los diagramas permiten representar procesos, estructuras y relaciones entre diferentes elementos.",
    respuesta: true,
  },
  {
    texto:
      "Las imágenes pueden utilizarse sin considerar su calidad, su relación con el contenido o sus derechos de uso.",
    respuesta: false,
  },

  // Presentación y distribución del trabajo

  {
    texto:
      "Antes de realizar una exposición es conveniente revisar la presentación completa para detectar errores.",
    respuesta: true,
  },
  {
    texto:
      "La vista de presentación permite comprobar cómo se visualizarán las diapositivas frente al público.",
    respuesta: true,
  },
  {
    texto:
      "Es importante comprobar que los archivos de audio y video estén disponibles en el equipo donde se realizará la exposición.",
    respuesta: true,
  },
  {
    texto:
      "Compartir una presentación garantiza que todos los elementos multimedia funcionen aunque dependan de archivos externos no disponibles.",
    respuesta: false,
  },
  {
    texto:
      "La distribución de una presentación debe considerar el formato de archivo y las necesidades de las personas que la recibirán.",
    respuesta: true,
  },

  // Aplicación administrativa e integración

  {
    texto:
      "El uso de imágenes, sonido y video puede complementar una capacitación sobre procedimientos administrativos.",
    respuesta: true,
  },
  {
    texto:
      "Una presentación profesional debe priorizar la claridad, la organización y la relación entre los recursos visuales y la información.",
    respuesta: true,
  },
  {
    texto:
      "La cantidad de efectos, imágenes y sonidos es más importante que la calidad de la información presentada.",
    respuesta: false,
  },
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 6 - Creación de elementos multimediales para informes y presentaciones"
      preguntas={preguntas}
    />
  );
}
