"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz";

const preguntas: Pregunta[] = [
  // Análisis del sistema
  {
    texto:
      "El análisis del sistema permite conocer cómo funciona una organización, identificar problemas y determinar necesidades de información.",
    respuesta: true,
  },
  {
    texto:
      "Para analizar un sistema solamente es necesario observar las computadoras utilizadas, sin considerar a las personas ni los procedimientos.",
    respuesta: false,
  },
  {
    texto:
      "Las entrevistas, la observación y la revisión de documentos pueden utilizarse para recopilar información sobre un sistema.",
    respuesta: true,
  },
  {
    texto:
      "El análisis del sistema debe comenzar con la programación de la solución definitiva, sin estudiar previamente el problema.",
    respuesta: false,
  },
  {
    texto:
      "Identificar quiénes utilizan un sistema y qué tareas realizan ayuda a comprender su funcionamiento.",
    respuesta: true,
  },
  {
    texto:
      "Un sistema administrativo puede incluir personas, procedimientos, información, recursos y herramientas informáticas.",
    respuesta: true,
  },
  {
    texto:
      "Los problemas detectados durante el análisis no deben documentarse porque pueden resolverse directamente durante la programación.",
    respuesta: false,
  },

  // Análisis estructurado
  {
    texto:
      "El análisis estructurado permite dividir un sistema complejo en componentes más pequeños para facilitar su estudio.",
    respuesta: true,
  },
  {
    texto:
      "Las entradas de un sistema son los datos que recibe para realizar sus operaciones.",
    respuesta: true,
  },
  {
    texto:
      "Los procesos son las operaciones que se realizan sobre los datos para obtener determinados resultados.",
    respuesta: true,
  },
  {
    texto:
      "Las salidas de un sistema son los datos que ingresan los usuarios antes de comenzar cualquier operación.",
    respuesta: false,
  },
  {
    texto:
      "El almacenamiento permite conservar información para consultarla o utilizarla posteriormente.",
    respuesta: true,
  },
  {
    texto:
      "En un sistema de ventas, registrar un pedido puede considerarse una entrada y generar una factura puede considerarse una salida.",
    respuesta: true,
  },
  {
    texto:
      "El análisis estructurado busca impedir que se identifiquen las relaciones entre las distintas partes de un sistema.",
    respuesta: false,
  },

  // Objetivos del sistema
  {
    texto:
      "El objetivo general expresa el propósito principal que se pretende alcanzar mediante el desarrollo de un sistema.",
    respuesta: true,
  },
  {
    texto:
      "Los objetivos específicos describen resultados concretos que contribuyen al cumplimiento del objetivo general.",
    respuesta: true,
  },
  {
    texto:
      "Un objetivo del sistema debe describir únicamente los colores y la apariencia visual de la interfaz.",
    respuesta: false,
  },
  {
    texto:
      "Un sistema para administrar turnos puede tener como objetivo general organizar y controlar las reservas de atención.",
    respuesta: true,
  },
  {
    texto:
      "Los objetivos del sistema deben definirse sin tener en cuenta los problemas que se busca resolver.",
    respuesta: false,
  },
  {
    texto:
      "Los objetivos específicos pueden incluir registrar información, consultar datos y generar informes.",
    respuesta: true,
  },
  {
    texto:
      "Definir los objetivos ayuda a establecer qué se espera conseguir con el sistema.",
    respuesta: true,
  },

  // Requerimientos del sistema
  {
    texto:
      "Los requerimientos funcionales describen acciones o servicios que el sistema debe ofrecer.",
    respuesta: true,
  },
  {
    texto:
      "Un requerimiento funcional podría indicar que el sistema debe permitir registrar nuevos clientes.",
    respuesta: true,
  },
  {
    texto:
      "Los requerimientos no funcionales pueden establecer condiciones de seguridad, rendimiento o facilidad de uso.",
    respuesta: true,
  },
  {
    texto:
      "Un requerimiento no funcional siempre describe una operación de registro, modificación o eliminación de datos.",
    respuesta: false,
  },
  {
    texto:
      "Los requerimientos deben redactarse de forma clara para reducir interpretaciones diferentes.",
    respuesta: true,
  },
  {
    texto:
      "Un sistema puede desarrollarse correctamente aunque sus requerimientos no se hayan identificado ni documentado.",
    respuesta: false,
  },
  {
    texto:
      "Los requerimientos de datos permiten identificar qué información necesita registrar y administrar el sistema.",
    respuesta: true,
  },
  {
    texto:
      "La trazabilidad de requerimientos ayuda a relacionar las necesidades identificadas con las funciones desarrolladas y sus pruebas.",
    respuesta: true,
  },

  // Diagrama de entidad-relación
  {
    texto:
      "Un diagrama de entidad-relación representa entidades, atributos y relaciones de un sistema de información.",
    respuesta: true,
  },
  {
    texto:
      "Una entidad representa un objeto, persona, concepto o elemento sobre el cual se necesita almacenar información.",
    respuesta: true,
  },
  {
    texto:
      "Los atributos describen características de una entidad, como el nombre, la fecha o el número de documento.",
    respuesta: true,
  },
  {
    texto:
      "La clave primaria permite identificar de manera única cada registro de una tabla.",
    respuesta: true,
  },
  {
    texto:
      "Una clave primaria puede repetirse libremente en todos los registros de una misma tabla.",
    respuesta: false,
  },
  {
    texto:
      "Una relación uno a muchos permite que un registro de una entidad se vincule con varios registros de otra entidad.",
    respuesta: true,
  },
  {
    texto:
      "En una relación muchos a muchos, cada registro de una entidad solamente puede vincularse con un registro de la otra.",
    respuesta: false,
  },
  {
    texto:
      "Una tabla intermedia puede utilizarse para representar una relación muchos a muchos en una base de datos relacional.",
    respuesta: true,
  },
  {
    texto:
      "El diagrama de entidad-relación se utiliza exclusivamente para diseñar los colores y botones de una aplicación.",
    respuesta: false,
  },
  {
    texto:
      "Antes de construir las tablas de una base de datos, el diagrama de entidad-relación puede ayudar a organizar los datos y sus vínculos.",
    respuesta: true,
  },

  // Planificación del proyecto
  {
    texto:
      "La planificación del proyecto permite organizar las tareas necesarias para desarrollar un sistema.",
    respuesta: true,
  },
  {
    texto:
      "Un cronograma permite distribuir las actividades en el tiempo y establecer fechas estimadas.",
    respuesta: true,
  },
  {
    texto:
      "La planificación debe ignorar los recursos disponibles porque no influyen en el desarrollo del proyecto.",
    respuesta: false,
  },
  {
    texto:
      "Identificar responsables para las tareas ayuda a organizar el trabajo del equipo.",
    respuesta: true,
  },
  {
    texto:
      "Las etapas de un proyecto pueden incluir análisis, diseño, desarrollo, pruebas y puesta en funcionamiento.",
    respuesta: true,
  },
  {
    texto:
      "El seguimiento del proyecto permite comparar las tareas planificadas con las actividades realizadas.",
    respuesta: true,
  },
  {
    texto:
      "Una vez elaborado el cronograma, nunca debe modificarse aunque aparezcan dificultades o cambien los requerimientos.",
    respuesta: false,
  },
  {
    texto:
      "La planificación permite anticipar dificultades y organizar mejor el tiempo y los recursos.",
    respuesta: true,
  },

  // Integración de contenidos
  {
    texto:
      "El análisis del sistema, la definición de objetivos y la identificación de requerimientos son actividades relacionadas entre sí.",
    respuesta: true,
  },
  {
    texto:
      "El diagrama de entidad-relación puede ayudar a definir la estructura de datos que necesitará el sistema.",
    respuesta: true,
  },
  {
    texto:
      "La planificación del proyecto debe realizarse sin considerar los requerimientos identificados durante el análisis.",
    respuesta: false,
  },/*
  {
    texto:
      "Para diseñar un sistema administrativo es importante comprender el problema, determinar las necesidades y organizar una posible solución.",
    respuesta: true,
  },
  {
    texto:
      "Un proyecto bien documentado facilita la comunicación entre las personas que participan en su desarrollo.",
    respuesta: true,
  },
  {
    texto:
      "El análisis y diseño del sistema son innecesarios cuando se utiliza una base de datos para almacenar información.",
    respuesta: false,
  },*/
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 2 - Análisis y diseño del sistema"
      preguntas={preguntas}
    />
  );
}