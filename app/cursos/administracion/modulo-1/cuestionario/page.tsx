"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz";

const preguntas: Pregunta[] = [
  // Introducción a la informática

  {
    texto:
      "Una computadora es un dispositivo electrónico capaz de recibir, procesar y almacenar información.",
    respuesta: true,
  },

  {
    texto:
      "El proceso básico de información en una computadora incluye entrada de datos, procesamiento y salida de información.",
    respuesta: true,
  },

  {
    texto:
      "La informática solo se utiliza en empresas y no tiene aplicaciones en la educación o la vida cotidiana.",
    respuesta: false,
  },

  // Hardware y Software
  {
    texto:
      "El hardware está formado por los componentes físicos de una computadora.",
    respuesta: true,
  },

  {
    texto:
      "El software está formado por los programas y elementos lógicos que permiten utilizar una computadora.",
    respuesta: true,
  },

  {
    texto:
      "El teclado, el mouse y el monitor son software.",
    respuesta: false,
  },

  {
    texto:
      "El sistema operativo es un tipo de software que permite administrar los recursos de una computadora.",
    respuesta: true,
  },

  // Componentes internos
  {
    texto:
      "La placa madre permite conectar y comunicar diferentes componentes internos de una computadora.",
    respuesta: true,
  },

  {
    texto:
      "El procesador es el componente encargado de ejecutar instrucciones y realizar operaciones.",
    respuesta: true,
  },

  {
    texto:
      "La memoria RAM almacena permanentemente los archivos del usuario aunque la computadora esté apagada.",
    respuesta: false,
  },

  {
    texto:
      "El disco HDD y la unidad SSD son dispositivos utilizados para almacenar información.",
    respuesta: true,
  },

  {
    texto:
      "La fuente de alimentación proporciona energía eléctrica a los componentes de la computadora.",
    respuesta: true,
  },

  {
    texto:
      "La tarjeta gráfica o GPU se utiliza principalmente para procesar y generar imágenes y gráficos.",
    respuesta: true,
  },

  // Escritorio de Windows
  {
    texto:
      "El escritorio de Windows es el entorno principal desde el cual el usuario puede acceder a diferentes elementos del sistema.",
    respuesta: true,
  },

  {
    texto:
      "La barra de tareas permite acceder a aplicaciones y visualizar diferentes elementos del sistema.",
    respuesta: true,
  },

  {
    texto:
      "Los iconos del escritorio pueden utilizarse para acceder rápidamente a programas, archivos o carpetas.",
    respuesta: true,
  },

  {
    texto:
      "La Papelera de reciclaje permite recuperar determinados archivos eliminados antes de eliminarlos definitivamente.",
    respuesta: true,
  },

  // Explorador de archivos
  {
    texto:
      "El Explorador de archivos permite navegar y administrar archivos y carpetas en Windows.",
    respuesta: true,
  },

  {
    texto:
      "El Explorador de archivos no permite copiar ni mover archivos.",
    respuesta: false,
  },

  {
    texto:
      "Las carpetas permiten organizar y agrupar archivos de manera estructurada.",
    respuesta: true,
  },

  {
    texto:
      "Un archivo puede tener un nombre y una extensión que permite identificar su tipo.",
    respuesta: true,
  },

  // Panel de Control
  {
    texto:
      "El Panel de control permite acceder a diferentes opciones de configuración del sistema operativo Windows.",
    respuesta: true,
  },

  {
    texto:
      "Desde las herramientas de configuración de Windows se pueden administrar diferentes dispositivos y opciones del sistema.",
    respuesta: true,
  },

  {
    texto:
      "El Panel de control solo sirve para abrir documentos de texto.",
    respuesta: false,
  },

  // Organización de archivos y carpetas
  {
    texto:
      "Organizar correctamente los archivos y carpetas facilita encontrar la información rápidamente.",
    respuesta: true,
  },

  {
    texto:
      "Es recomendable utilizar nombres claros y descriptivos para identificar archivos y carpetas.",
    respuesta: true,
  },

  {
    texto:
      "Guardar todos los archivos en una única carpeta siempre es la mejor forma de organizar la información.",
    respuesta: false,
  },

  {
    texto:
      "Una estructura de carpetas organizada puede ayudar a administrar documentos administrativos de una empresa.",
    respuesta: true,
  },

  // Instalación de programas
  {
    texto:
      "Los programas deben descargarse preferentemente desde fuentes confiables y oficiales.",
    respuesta: true,
  },

  {
    texto:
      "Durante la instalación de un programa es importante leer las opciones que aparecen en el instalador.",
    respuesta: true,
  },

  {
    texto:
      "Todos los programas encontrados en Internet son seguros para instalar.",
    respuesta: false,
  },

  {
    texto:
      "Desinstalar programas que ya no se utilizan puede ayudar a liberar espacio de almacenamiento.",
    respuesta: true,
  },

  // Almacenamiento
  {
    texto:
      "El almacenamiento permite conservar información digital para utilizarla posteriormente.",
    respuesta: true,
  },

  {
    texto:
      "Un SSD y un HDD son dispositivos utilizados para almacenar información.",
    respuesta: true,
  },

  {
    texto:
      "La memoria USB puede utilizarse para transportar archivos entre diferentes computadoras.",
    respuesta: true,
  },

  {
    texto:
      "El almacenamiento en la nube permite guardar información en servidores accesibles mediante Internet.",
    respuesta: true,
  },

  {
    texto:
      "El espacio disponible de una unidad de almacenamiento siempre es igual a su capacidad total.",
    respuesta: false,
  },

  // Backup
  {
    texto:
      "Un backup es una copia de seguridad de información que permite recuperarla en caso de pérdida o daño.",
    respuesta: true,
  },

  {
    texto:
      "Las copias de seguridad pueden ayudar a recuperar archivos eliminados accidentalmente.",
    respuesta: true,
  },

  {
    texto:
      "Realizar una única copia de seguridad en el mismo dispositivo donde están los archivos originales elimina todos los riesgos.",
    respuesta: false,
  },

  {
    texto:
      "La regla 3-2-1 propone mantener tres copias de los datos, utilizando dos medios diferentes y una copia en una ubicación diferente.",
    respuesta: true,
  },


  // Mantenimiento
  {
    texto:
      "El mantenimiento preventivo busca reducir la posibilidad de que ocurran fallas en una computadora.",
    respuesta: true,
  },

  {
    texto:
      "El mantenimiento correctivo se realiza para solucionar problemas o fallas que ya se han producido.",
    respuesta: true,
  },

  {
    texto:
      "La acumulación de polvo puede afectar la ventilación y el funcionamiento de una computadora.",
    respuesta: true,
  },

  {
    texto:
      "Las actualizaciones del sistema operativo y de los programas pueden incluir mejoras y correcciones.",
    respuesta: true,
  },

  {
    texto:
      "Es recomendable bloquear las entradas y salidas de aire de una computadora para evitar que entre polvo.",
    respuesta: false,
  },

  {
    texto:
      "Controlar periódicamente el espacio disponible en las unidades de almacenamiento forma parte del mantenimiento de una computadora.",
    respuesta: true,
  },

  // Virus y Antivirus
  {
    texto:
      "Un virus informático es un tipo de software malicioso que puede realizar acciones no deseadas en un sistema.",
    respuesta: true,
  },

  {
    texto:
      "Todos los virus informáticos son componentes físicos de una computadora.",
    respuesta: false,
  },

  {
    texto:
      "Un antivirus es una herramienta diseñada para ayudar a detectar, bloquear y eliminar diferentes tipos de software malicioso.",
    respuesta: true,
  },

  {
    texto:
      "Los troyanos pueden aparentar ser programas legítimos mientras realizan acciones maliciosas.",
    respuesta: true,
  },

  {
    texto:
      "El ransomware puede impedir el acceso a archivos o sistemas y exigir algún tipo de pago.",
    respuesta: true,
  },

  {
    texto:
      "Descargar programas desde fuentes desconocidas puede aumentar el riesgo de instalar software malicioso.",
    respuesta: true,
  },

  {
    texto:
      "Mantener actualizado el sistema operativo y las herramientas de seguridad ayuda a reducir los riesgos informáticos.",
    respuesta: true,
  },

  {
    texto:
      "Las copias de seguridad no tienen ninguna utilidad frente a una infección de malware.",
    respuesta: false,
  },

  {
    texto:
      "La cuarentena permite aislar archivos sospechosos para evitar que puedan afectar al resto del sistema.",
    respuesta: true,
  },

  // Integración de contenidos
  {
    texto:
      "En una oficina es importante combinar una correcta organización de archivos, copias de seguridad y medidas de seguridad informática.",
    respuesta: true,
  },

  {
    texto:
      "El mantenimiento de una computadora consiste únicamente en limpiar físicamente el teclado y el monitor.",
    respuesta: false,
  },

  {
    texto:
      "Una estrategia de seguridad informática debe incluir medidas de prevención, actualización y copias de seguridad.",
    respuesta: true,
  },

  {
    texto:
      "Un operador de informática debe prestar atención tanto al mantenimiento del hardware como al mantenimiento del software.",
    respuesta: true,
  },
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 1 - Entorno de la PC"
      preguntas={preguntas}
    />
  );
}