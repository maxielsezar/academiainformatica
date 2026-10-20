"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz";

const preguntas: Pregunta[] = [
  // Introducción a las planillas de cálculo

  {
    texto:
      "Una planilla de cálculo permite organizar datos, realizar operaciones matemáticas y analizar información.",
    respuesta: true,
  },
  {
    texto:
      "Una planilla de cálculo solamente permite escribir textos y no puede realizar cálculos automáticos.",
    respuesta: false,
  },
  {
    texto:
      "Las planillas de cálculo pueden utilizarse para administrar presupuestos, ventas, gastos e inventarios.",
    respuesta: true,
  },

  // Libros, hojas y celdas

  {
    texto:
      "Un libro de cálculo puede contener varias hojas de trabajo.",
    respuesta: true,
  },
  {
    texto:
      "Una celda se identifica mediante la combinación de una columna y una fila, como A1.",
    respuesta: true,
  },
  {
    texto:
      "Las filas se identifican generalmente con letras y las columnas con números.",
    respuesta: false,
  },
  {
    texto:
      "Un rango de celdas permite seleccionar un conjunto de celdas para trabajar con ellas.",
    respuesta: true,
  },

  // Tipos de datos y formato

  {
    texto:
      "Una celda puede contener texto, números, fechas o fórmulas.",
    respuesta: true,
  },
  {
    texto:
      "Aplicar formato de moneda a una celda modifica necesariamente el valor numérico almacenado.",
    respuesta: false,
  },
  {
    texto:
      "El formato de celdas permite modificar aspectos como el tipo de número, la alineación, el color y los bordes.",
    respuesta: true,
  },
  {
    texto:
      "El formato de porcentaje puede utilizarse para representar valores porcentuales.",
    respuesta: true,
  },

  // Fórmulas y operaciones

  {
    texto:
      "En una planilla de cálculo, las fórmulas comienzan generalmente con el signo igual (=).",
    respuesta: true,
  },
  {
    texto:
      "La fórmula =A1+B1 permite sumar los valores contenidos en las celdas A1 y B1.",
    respuesta: true,
  },
  {
    texto:
      "La fórmula =A1*B1 realiza una división entre los valores de ambas celdas.",
    respuesta: false,
  },
  {
    texto:
      "Cuando cambia un valor utilizado en una fórmula, el resultado puede actualizarse automáticamente.",
    respuesta: true,
  },
  {
    texto:
      "La función SUMA permite calcular el total de un conjunto de valores.",
    respuesta: true,
  },

  // Referencias de celdas

  {
    texto:
      "Una referencia relativa puede cambiar cuando una fórmula se copia a otra celda.",
    respuesta: true,
  },
  {
    texto:
      "La referencia absoluta $A$1 mantiene fija la columna A y la fila 1 al copiar una fórmula.",
    respuesta: true,
  },
  {
    texto:
      "La referencia A$1 mantiene fija la columna A y permite que cambie la fila al copiar la fórmula.",
    respuesta: false,
  },
  {
    texto:
      "Las referencias mixtas permiten fijar la columna o la fila de una celda.",
    respuesta: true,
  },

  // Funciones matemáticas y estadísticas

  {
    texto:
      "La función PROMEDIO permite calcular la media aritmética de un conjunto de valores.",
    respuesta: true,
  },
  {
    texto:
      "La función MAX permite obtener el valor más pequeño de un rango.",
    respuesta: false,
  },
  {
    texto:
      "La función MIN permite identificar el menor valor dentro de un conjunto de datos.",
    respuesta: true,
  },
  {
    texto:
      "La función CONTAR permite contar las celdas que contienen valores numéricos.",
    respuesta: true,
  },

  // Funciones lógicas

  {
    texto:
      "La función SI permite obtener resultados diferentes según se cumpla o no una condición.",
    respuesta: true,
  },
  {
    texto:
      "La función SI solamente puede utilizarse con operaciones matemáticas y no admite comparaciones.",
    respuesta: false,
  },
  {
    texto:
      "La función Y permite comprobar si varias condiciones se cumplen simultáneamente.",
    respuesta: true,
  },
  {
    texto:
      "La función O devuelve un resultado verdadero únicamente cuando todas las condiciones se cumplen.",
    respuesta: false,
  },

  // Funciones de texto

  {
    texto:
      "Las funciones de texto permiten trabajar con cadenas de caracteres dentro de una planilla.",
    respuesta: true,
  },
  {
    texto:
      "Las funciones MAYUSC y MINUSC permiten convertir texto a mayúsculas y minúsculas, respectivamente.",
    respuesta: true,
  },
  {
    texto:
      "La función CONCATENAR permite unir contenidos de texto.",
    respuesta: true,
  },
  {
    texto:
      "Las funciones de texto no pueden utilizarse para preparar o normalizar datos de clientes.",
    respuesta: false,
  },

  // Funciones de fecha y hora

  {
    texto:
      "Las funciones de fecha permiten realizar cálculos y operaciones con fechas.",
    respuesta: true,
  },
  {
    texto:
      "La función HOY permite obtener la fecha actual del sistema.",
    respuesta: true,
  },
  {
    texto:
      "Las fechas no pueden utilizarse para ordenar registros cronológicamente.",
    respuesta: false,
  },

  // Funciones de búsqueda

  {
    texto:
      "Las funciones de búsqueda permiten localizar información dentro de una tabla o un rango de datos.",
    respuesta: true,
  },
  {
    texto:
      "Una función de búsqueda puede ayudar a encontrar el precio de un producto a partir de su código.",
    respuesta: true,
  },
  {
    texto:
      "Las funciones de búsqueda solamente sirven para cambiar el formato visual de las celdas.",
    respuesta: false,
  },

  // Ordenamiento y filtros

  {
    texto:
      "Ordenar datos permite organizar registros según criterios como nombres, fechas o valores numéricos.",
    respuesta: true,
  },
  {
    texto:
      "Los filtros permiten mostrar únicamente los registros que cumplen determinadas condiciones.",
    respuesta: true,
  },
  {
    texto:
      "Aplicar un filtro elimina permanentemente todos los registros que no cumplen el criterio seleccionado.",
    respuesta: false,
  },
  {
    texto:
      "Antes de ordenar una tabla es importante seleccionar y organizar correctamente los datos para mantener relacionados los valores de cada registro.",
    respuesta: true,
  },

  // Tablas y gestión de datos

  {
    texto:
      "Convertir un rango de datos en una tabla puede facilitar la organización, el filtrado y el análisis de la información.",
    respuesta: true,
  },
  {
    texto:
      "Una tabla de datos debería utilizar encabezados claros para identificar cada columna.",
    respuesta: true,
  },
  {
    texto:
      "Combinar celdas dentro de una tabla de registros siempre mejora la posibilidad de ordenar y filtrar los datos.",
    respuesta: false,
  },

  // Tablas dinámicas

  {
    texto:
      "Las tablas dinámicas permiten resumir y analizar grandes conjuntos de datos.",
    respuesta: true,
  },
  {
    texto:
      "Una tabla dinámica puede utilizarse para calcular ventas totales por producto o por vendedor.",
    respuesta: true,
  },
  {
    texto:
      "Las tablas dinámicas solo permiten mostrar datos y no pueden resumir valores mediante operaciones como suma o recuento.",
    respuesta: false,
  },

  // Gráficos

  {
    texto:
      "Los gráficos permiten representar visualmente los datos de una planilla.",
    respuesta: true,
  },
  {
    texto:
      "Un gráfico de columnas puede utilizarse para comparar las ventas de distintos productos.",
    respuesta: true,
  },
  {
    texto:
      "Un gráfico circular puede ser útil para representar la participación de distintas categorías en un total.",
    respuesta: true,
  },
  {
    texto:
      "Elegir cualquier tipo de gráfico produce siempre una representación adecuada de los datos.",
    respuesta: false,
  },

  // Impresión y presentación

  {
    texto:
      "La vista previa de impresión permite revisar cómo quedará distribuida la información en las páginas.",
    respuesta: true,
  },
  {
    texto:
      "La orientación horizontal puede ser útil cuando una tabla tiene muchas columnas.",
    respuesta: true,
  },
  {
    texto:
      "Configurar márgenes, escala y área de impresión puede ayudar a presentar un informe de manera clara.",
    respuesta: true,
  },
  {
    texto:
      "Exportar una planilla a PDF garantiza que los datos originales puedan seguir editándose como celdas de una hoja de cálculo.",
    respuesta: false,
  },

  // Aplicación administrativa e integración

  {
    texto:
      "Una planilla de ventas puede calcular automáticamente el importe de cada operación multiplicando la cantidad por el precio unitario.",
    respuesta: true,
  },
  {
    texto:
      "Una planilla de control de stock puede utilizar una función lógica para indicar qué productos necesitan reposición.",
    respuesta: true,
  },
  {
    texto:
      "Para elaborar un informe administrativo confiable no es necesario revisar los datos ni comprobar las fórmulas.",
    respuesta: false,
  },
  {
    texto:
      "Combinar fórmulas, funciones, filtros y gráficos permite elaborar informes útiles para la toma de decisiones.",
    respuesta: true,
  },
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 5 - Planillas de cálculo y gestión de datos"
      preguntas={preguntas}
    />
  );
}