"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz";

const preguntas: Pregunta[] = [
  // Introducción al procesador de textos

  {
    texto:
      "Un procesador de textos es un programa que permite crear, editar, guardar e imprimir documentos.",
    respuesta: true,
  },

  {
    texto:
      "Un procesador de textos solamente permite escribir texto sin realizar ningún tipo de formato.",
    respuesta: false,
  },

  {
    texto:
      "Los procesadores de texto pueden utilizarse para elaborar documentos personales, educativos y administrativos.",
    respuesta: true,
  },

  {
    texto:
      "Un documento creado en un procesador de textos puede contener texto, imágenes, tablas y otros elementos.",
    respuesta: true,
  },

  // Interfaz y herramientas

  {
    texto:
      "La interfaz de un procesador de textos contiene diferentes herramientas y opciones para trabajar con documentos.",
    respuesta: true,
  },

  {
    texto:
      "La barra de herramientas permite acceder rápidamente a diferentes funciones del programa.",
    respuesta: true,
  },

  {
    texto:
      "Las opciones de formato permiten modificar la apariencia del texto.",
    respuesta: true,
  },

  {
    texto:
      "El cursor indica la posición donde se insertará el próximo carácter escrito.",
    respuesta: true,
  },

  {
    texto:
      "La barra de desplazamiento permite recorrer un documento cuando no se puede visualizar todo el contenido en pantalla.",
    respuesta: true,
  },

  // Crear, abrir y guardar documentos

  {
    texto:
      "Crear un documento nuevo permite comenzar a redactar un archivo desde cero.",
    respuesta: true,
  },

  {
    texto:
      "Abrir un documento permite acceder a un archivo que fue guardado anteriormente.",
    respuesta: true,
  },

  {
    texto:
      "Guardar un documento permite conservar los cambios realizados.",
    respuesta: true,
  },


  {
    texto:
      "Guardar como permite crear una nueva copia del documento con otro nombre, ubicación o formato.",
    respuesta: true,
  },

  {
    texto:
      "Una vez que un documento se guarda por primera vez, ya no es necesario volver a guardarlo.",
    respuesta: false,
  },

  // Edición y formato

  {
    texto:
      "Editar un documento significa realizar cambios sobre su contenido.",
    respuesta: true,
  },

  {
    texto:
      "Copiar permite duplicar un texto o elemento sin eliminar el original.",
    respuesta: true,
  },

  {
    texto:
      "Cortar permite mover un texto o elemento de una ubicación a otra.",
    respuesta: true,
  },

  {
    texto:
      "Pegar permite insertar en una ubicación el contenido que fue copiado o cortado.",
    respuesta: true,
  },

  {
    texto:
      "La opción deshacer permite revertir una acción reciente.",
    respuesta: true,
  },

  {
    texto:
      "La opción rehacer permite recuperar una acción que había sido deshecha.",
    respuesta: true,
  },

  {
    texto:
      "Cambiar el tipo y tamaño de letra modifica el contenido del texto, pero no su apariencia.",
    respuesta: false,
  },

  {
    texto:
      "La negrita, la cursiva y el subrayado son herramientas utilizadas para destacar texto.",
    respuesta: true,
  },

  // Párrafos y alineación

  {
    texto:
      "Un párrafo es un bloque de texto que generalmente termina al presionar la tecla Enter.",
    respuesta: true,
  },

  {
    texto:
      "La alineación a la izquierda es una de las formas de organizar horizontalmente un párrafo.",
    respuesta: true,
  },

  {
    texto:
      "Un texto puede alinearse a la izquierda, al centro, a la derecha o justificarse.",
    respuesta: true,
  },

  {
    texto:
      "Justificar un párrafo significa centrar cada una de sus líneas.",
    respuesta: false,
  },

  {
    texto:
      "El interlineado permite modificar la distancia entre las líneas de un párrafo.",
    respuesta: true,
  },

  {
    texto:
      "El espaciado entre párrafos permite separar visualmente diferentes bloques de texto.",
    respuesta: true,
  },



  // Listas y viñetas

  {
    texto:
      "Las listas permiten organizar información de manera clara y ordenada.",
    respuesta: true,
  },

  {
    texto:
      "Las viñetas se utilizan para presentar elementos que no necesitan seguir un orden específico.",
    respuesta: true,
  },

  {
    texto:
      "Las listas numeradas son útiles cuando los elementos deben seguir una secuencia.",
    respuesta: true,
  },

  {
    texto:
      "Una lista con viñetas siempre debe utilizar números.",
    respuesta: false,
  },

  {
    texto:
      "Las listas pueden utilizarse en documentos administrativos para organizar tareas, requisitos o información.",
    respuesta: true,
  },

  // Tablas

  {
    texto:
      "Una tabla permite organizar información en filas y columnas.",
    respuesta: true,
  },

  {
    texto:
      "Una celda es el espacio que se forma en la intersección entre una fila y una columna.",
    respuesta: true,
  },

  {
    texto:
      "Las tablas pueden utilizarse para organizar datos, horarios, listas y registros.",
    respuesta: true,
  },

  {
    texto:
      "Es posible agregar o eliminar filas y columnas de una tabla.",
    respuesta: true,
  },

  {
    texto:
      "Una tabla no puede contener texto.",
    respuesta: false,
  },

  {
    texto:
      "Combinar celdas permite unir dos o más celdas en una sola.",
    respuesta: true,
  },

  // Imágenes y elementos gráficos

  {
    texto:
      "Un documento puede incluir imágenes para complementar y mejorar la información presentada.",
    respuesta: true,
  },

  {
    texto:
      "Las imágenes deben estar relacionadas con el contenido del documento.",
    respuesta: true,
  },

  {
    texto:
      "Es importante ajustar el tamaño de una imagen para que sea adecuada al diseño del documento.",
    respuesta: true,
  },

  {
    texto:
      "Las imágenes insertadas en un documento no pueden moverse de lugar.",
    respuesta: false,
  },

  {
    texto:
      "Los cuadros de texto y las formas pueden utilizarse para organizar y destacar información.",
    respuesta: true,
  },

  // Encabezado y pie de página

  {
    texto:
      "El encabezado es una zona ubicada en la parte superior de las páginas de un documento.",
    respuesta: true,
  },

  {
    texto:
      "El pie de página se encuentra generalmente en la parte inferior de cada página.",
    respuesta: true,
  },

  {
    texto:
      "El número de página puede insertarse automáticamente en un encabezado o pie de página.",
    respuesta: true,
  },

  {
    texto:
      "Los encabezados y pies de página pueden utilizarse para mostrar información que se repite en diferentes páginas.",
    respuesta: true,
  },

  // Configuración de página

  {
    texto:
      "La configuración de página permite modificar aspectos generales de la presentación del documento.",
    respuesta: true,
  },

  {
    texto:
      "Los márgenes determinan el espacio entre el contenido y los bordes de la página.",
    respuesta: true,
  },

  {
    texto:
      "Una página puede configurarse con orientación vertical u horizontal.",
    respuesta: true,
  },

  {
    texto:
      "El tamaño de papel no puede modificarse en un procesador de textos.",
    respuesta: false,
  },

  {
    texto:
      "Es importante seleccionar una configuración de página adecuada según el tipo de documento.",
    respuesta: true,
  },

  // Documentos administrativos

  {
    texto:
      "Los documentos administrativos permiten registrar, comunicar y organizar información dentro de una institución o empresa.",
    respuesta: true,
  },

  {
    texto:
      "Una carta puede utilizarse como medio de comunicación formal.",
    respuesta: true,
  },

  {
    texto:
      "Un informe permite presentar información sobre un tema, situación o actividad determinada.",
    respuesta: true,
  },

  {
    texto:
      "Un memorándum es un documento utilizado generalmente para la comunicación interna de una organización.",
    respuesta: true,
  },

  {
    texto:
      "Un acta permite dejar constancia de hechos, reuniones, acuerdos o decisiones.",
    respuesta: true,
  },

  // Formularios

  {
    texto:
      "Un formulario permite recopilar información de manera organizada.",
    respuesta: true,
  },

  {
    texto:
      "Los formularios pueden contener campos destinados a ingresar datos específicos.",
    respuesta: true,
  },

  {
    texto:
      "Los formularios solo pueden utilizarse para recopilar información en Internet.",
    respuesta: false,
  },


  // Informes

  {
    texto:
      "Un informe administrativo debe presentar la información de manera clara y organizada.",
    respuesta: true,
  },

  {
    texto:
      "Un informe puede incluir títulos, subtítulos, tablas y otros elementos para mejorar la presentación de la información.",
    respuesta: true,
  },

  {
    texto:
      "La conclusión de un informe puede resumir los resultados o ideas principales desarrolladas.",
    respuesta: true,
  },

  // Memorándum y acta

  {
    texto:
      "Un memorándum suele contener información breve y directa dirigida a una persona o sector determinado.",
    respuesta: true,
  },

  {
    texto:
      "Un acta puede registrar los participantes y los temas tratados durante una reunión.",
    respuesta: true,
  },

  {
    texto:
      "Los documentos administrativos no necesitan mantener una estructura clara.",
    respuesta: false,
  },

  // Currículum vitae

  {
    texto:
      "Un currículum vitae es un documento que presenta información sobre el perfil, formación y experiencia de una persona.",
    respuesta: true,
  },

  {
    texto:
      "Un currículum debe contener únicamente información personal y nunca información sobre formación o experiencia.",
    respuesta: false,
  },

  {
    texto:
      "Es importante organizar la información del currículum de manera clara y fácil de leer.",
    respuesta: true,
  },

  {
    texto:
      "El currículum puede adaptarse según el puesto o actividad para la que se presenta.",
    respuesta: true,
  },

  // Carta de presentación

  {
    texto:
      "Una carta de presentación puede acompañar a un currículum al momento de postularse para un puesto.",
    respuesta: true,
  },

  {
    texto:
      "La carta de presentación permite comunicar el interés de una persona por una oportunidad determinada.",
    respuesta: true,
  },

  {
    texto:
      "Una carta de presentación debe ser clara, ordenada y redactada de manera adecuada.",
    respuesta: true,
  },

  // Títulos y tabla de contenido

  {
    texto:
      "Los estilos de título permiten organizar visualmente las diferentes secciones de un documento.",
    respuesta: true,
  },

  {
    texto:
      "Utilizar estilos de título puede facilitar la creación de una tabla de contenido automática.",
    respuesta: true,
  },

  {
    texto:
      "Una tabla de contenido permite localizar rápidamente las diferentes secciones de un documento.",
    respuesta: true,
  },

  {
    texto:
      "Después de modificar los títulos de un documento puede ser necesario actualizar la tabla de contenido.",
    respuesta: true,
  },

  // Revisión y corrección

  {
    texto:
      "La revisión de un documento permite detectar y corregir posibles errores.",
    respuesta: true,
  },

  {
    texto:
      "El corrector ortográfico puede ayudar a detectar determinadas palabras escritas incorrectamente.",
    respuesta: true,
  },

  {
    texto:
      "Las sugerencias del corrector siempre deben aceptarse sin revisar el contexto.",
    respuesta: false,
  },

  {
    texto:
      "Revisar la ortografía, la gramática y el formato mejora la calidad de un documento.",
    respuesta: true,
  },

  // Impresión y exportación

  {
    texto:
      "Antes de imprimir un documento es recomendable revisar la vista previa.",
    respuesta: true,
  },

  {
    texto:
      "La vista previa permite comprobar cómo se presentará el documento antes de imprimirlo.",
    respuesta: true,
  },

  {
    texto:
      "Exportar un documento a PDF permite conservar una presentación más estable para compartirlo.",
    respuesta: true,
  },

  {
    texto:
      "Al imprimir un documento se pueden seleccionar opciones como la impresora y las páginas que se desean imprimir.",
    respuesta: true,
  },

  // Hipervínculos

  {
    texto:
      "Un hipervínculo permite acceder a una página web, archivo, correo electrónico u otra ubicación.",
    respuesta: true,
  },

  {
    texto:
      "Los hipervínculos pueden utilizarse para conectar diferentes recursos digitales.",
    respuesta: true,
  },

  {
    texto:
      "Un hipervínculo no puede modificarse después de haber sido creado.",
    respuesta: false,
  },


  // Diccionarios

  {
    texto:
      "Los diccionarios de un procesador de textos pueden ayudar a detectar posibles errores ortográficos.",
    respuesta: true,
  },

  {
    texto:
      "Es posible que una palabra correcta aparezca como desconocida si no está incluida en el diccionario seleccionado.",
    respuesta: true,
  },

  // Mecanografía

  {
    texto:
      "La mecanografía busca desarrollar una escritura más rápida, precisa y eficiente utilizando el teclado.",
    respuesta: true,
  },

  {
    texto:
      "Una postura adecuada puede contribuir a trabajar de forma más cómoda frente a la computadora.",
    respuesta: true,
  },

  {
    texto:
      "La precisión es tan importante como la velocidad al escribir un documento.",
    respuesta: true,
  },

  // Trabajo integrador

  {
    texto:
      "Un documento extenso puede organizarse mediante títulos, subtítulos y una tabla de contenido.",
    respuesta: true,
  },

  {
    texto:
      "Las listas, tablas e imágenes pueden utilizarse para mejorar la organización y presentación de la información.",
    respuesta: true,
  },

  {
    texto:
      "Es recomendable revisar un trabajo completo antes de guardarlo y entregarlo.",
    respuesta: true,
  },

  {
    texto:
      "Exportar un trabajo final en PDF puede facilitar su visualización en diferentes dispositivos.",
    respuesta: true,
  },

  // Integración de contenidos

  {
    texto:
      "Un procesador de textos permite combinar texto, listas, tablas, imágenes y diferentes herramientas de formato en un mismo documento.",
    respuesta: true,
  },

  {
    texto:
      "La organización del contenido y el uso correcto del formato ayudan a crear documentos más claros y profesionales.",
    respuesta: true,
  },

];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 2 - Procesador de Textos"
      preguntas={preguntas}
    />
  );
}