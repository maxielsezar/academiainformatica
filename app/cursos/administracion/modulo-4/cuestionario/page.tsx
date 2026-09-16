"use client";

import Quiz, { Pregunta } from "@/app/components/Quiz";

const preguntas: Pregunta[] = [
  // Introducción a Internet

  {
    texto:
      "Internet es una red mundial que permite conectar computadoras y otros dispositivos para intercambiar información y utilizar diferentes servicios.",
    respuesta: true,
  },

  {
    texto:
      "Internet solamente puede utilizarse para navegar por páginas web.",
    respuesta: false,
  },

  {
    texto:
      "A través de Internet es posible acceder a servicios como correo electrónico, almacenamiento en la nube, videollamadas y formularios en línea.",
    respuesta: true,
  },

  {
    texto:
      "Para utilizar Internet no es necesario contar con ningún tipo de conexión de red.",
    respuesta: false,
  },

  // Navegadores de Internet

  {
    texto:
      "Un navegador web es un programa que permite acceder y visualizar contenidos disponibles en Internet.",
    respuesta: true,
  },

  {
    texto:
      "Google Chrome, Microsoft Edge, Mozilla Firefox y Safari son navegadores web.",
    respuesta: true,
  },

  {
    texto:
      "La barra de direcciones de un navegador permite ingresar una dirección web o realizar una búsqueda.",
    respuesta: true,
  },

  {
    texto:
      "El historial del navegador permite consultar algunas de las páginas web visitadas anteriormente.",
    respuesta: true,
  },

  {
    texto:
      "La navegación privada garantiza que toda la actividad realizada en Internet sea completamente anónima.",
    respuesta: false,
  },

  // Funciones y herramientas del navegador

  {
    texto:
      "Las pestañas permiten tener abiertas diferentes páginas web dentro de una misma ventana del navegador.",
    respuesta: true,
  },

  {
    texto:
      "Los marcadores o favoritos permiten guardar páginas web para acceder nuevamente a ellas con mayor facilidad.",
    respuesta: true,
  },

  {
    texto:
      "El historial permite recuperar automáticamente cualquier archivo que haya sido eliminado de la computadora.",
    respuesta: false,
  },

  {
    texto:
      "La función de descargas permite consultar archivos que fueron descargados desde Internet.",
    respuesta: true,
  },

  // Filtros y búsquedas

  {
    texto:
      "Utilizar palabras clave específicas puede ayudar a obtener resultados de búsqueda más relevantes.",
    respuesta: true,
  },

  {
    texto:
      "Una búsqueda demasiado general puede producir una gran cantidad de resultados poco relacionados con la información que se necesita.",
    respuesta: true,
  },

  {
    texto:
      "Los filtros de búsqueda pueden ayudar a limitar los resultados según criterios como fecha, tipo de contenido o idioma.",
    respuesta: true,
  },

  {
    texto:
      "El uso de la expresión site:gov.ar puede ayudar a buscar resultados pertenecientes a sitios con dominio gov.ar.",
    respuesta: true,
  },

  {
    texto:
      "La expresión filetype:pdf puede utilizarse para buscar documentos en formato PDF.",
    respuesta: true,
  },

  {
    texto:
      "Agregar más palabras a una búsqueda siempre hace que los resultados sean menos precisos.",
    respuesta: false,
  },

  // Direcciones de Internet

  {
    texto:
      "Una URL es una dirección que permite identificar y acceder a un recurso disponible en Internet.",
    respuesta: true,
  },

  {
    texto:
      "Una dirección web puede incluir un protocolo, un dominio y una ruta hacia un recurso determinado.",
    respuesta: true,
  },

  {
    texto:
      "HTTPS indica que la comunicación entre el navegador y el sitio utiliza una conexión protegida mediante cifrado.",
    respuesta: true,
  },

  {
    texto:
      "Todas las páginas que utilizan HTTPS son necesariamente confiables y seguras para ingresar cualquier información.",
    respuesta: false,
  },

  {
    texto:
      "El dominio de una dirección web puede brindar información sobre la organización o el tipo de sitio al que pertenece.",
    respuesta: true,
  },

  // Motores de búsqueda

  {
    texto:
      "Un motor de búsqueda permite localizar información disponible en Internet a partir de consultas realizadas por el usuario.",
    respuesta: true,
  },

  {
    texto:
      "Google, Bing, Yahoo y DuckDuckGo son motores de búsqueda.",
    respuesta: true,
  },

  {
    texto:
      "Los motores de búsqueda organizan grandes cantidades de información para facilitar la localización de contenidos.",
    respuesta: true,
  },

  {
    texto:
      "Un motor de búsqueda solamente puede encontrar páginas web y no permite buscar imágenes o documentos.",
    respuesta: false,
  },

  {
    texto:
      "Evaluar la fuente, la fecha y la relación con el tema buscado ayuda a determinar la utilidad de un resultado.",
    respuesta: true,
  },
    
  // Búsquedas eficientes

  {
    texto:
      "Una búsqueda eficiente comienza por identificar claramente qué información se necesita encontrar.",
    respuesta: true,
  },

  {
    texto:
      "Utilizar términos específicos relacionados con el tema puede ayudar a reducir resultados poco relevantes.",
    respuesta: true,
  },

  {
    texto:
      "Las comillas pueden utilizarse en algunos motores de búsqueda para buscar una frase exacta.",
    respuesta: true,
  },

  {
    texto:
      "Una búsqueda eficiente consiste siempre en escribir una sola palabra sin agregar ningún otro criterio.",
    respuesta: false,
  },

  {
    texto:
      "Comparar diferentes resultados permite seleccionar información más adecuada para una determinada tarea.",
    respuesta: true,
  },

  // Catalogar y discriminar resultados

  {
    texto:
      "Catalogar información permite organizar los resultados encontrados para facilitar su consulta posterior.",
    respuesta: true,
  },

  {
    texto:
      "Discriminar resultados implica analizar cuáles son relevantes y cuáles no responden a la necesidad de información.",
    respuesta: true,
  },

  {
    texto:
      "La primera página que aparece en un buscador siempre contiene la información más confiable.",
    respuesta: false,
  },

  {
    texto:
      "La fecha de publicación puede ser un criterio importante para evaluar la utilidad de una página web.",
    respuesta: true,
  },

  // Guardar páginas web

  {
    texto:
      "Guardar una página en los marcadores permite acceder nuevamente a ella sin tener que realizar la búsqueda desde cero.",
    respuesta: true,
  },

  {
    texto:
      "Guardar páginas de referencia puede ser útil para organizar información que se necesitará consultar posteriormente.",
    respuesta: true,
  },

  {
    texto:
      "Guardar una página web garantiza que su contenido permanecerá disponible indefinidamente.",
    respuesta: false,
  },

  // Servicios de Internet

  {
    texto:
      "El correo electrónico es un servicio de Internet que permite enviar y recibir mensajes.",
    respuesta: true,
  },

  {
    texto:
      "Los servicios de almacenamiento en la nube permiten guardar y acceder a archivos mediante Internet.",
    respuesta: true,
  },

  {
    texto:
      "Las videollamadas permiten realizar comunicaciones audiovisuales utilizando una conexión a Internet.",
    respuesta: true,
  },

  {
    texto:
      "Los formularios en línea pueden utilizarse para recopilar información de manera organizada.",
    respuesta: true,
  },

  {
    texto:
      "El almacenamiento en la nube solamente permite guardar imágenes y no admite otros tipos de archivos.",
    respuesta: false,
  },

  // Conexiones a Internet

  {
    texto:
      "Una conexión Wi-Fi permite conectar dispositivos a una red sin utilizar necesariamente un cable de red.",
    respuesta: true,
  },

  {
    texto:
      "Una conexión Ethernet utiliza un cable de red para conectar un dispositivo a una red.",
    respuesta: true,
  },

  {
    texto:
      "Ethernet puede ser una opción adecuada para computadoras de escritorio que requieren una conexión estable dentro de una oficina.",
    respuesta: true,
  },

  {
    texto:
      "Wi-Fi y Ethernet son exactamente iguales porque ambos utilizan necesariamente cables de red.",
    respuesta: false,
  },

  // Router y Switch

  {
    texto:
      "Un router permite conectar diferentes redes y gestionar el tráfico de datos entre ellas.",
    respuesta: true,
  },

  {
    texto:
      "Un switch permite conectar diferentes dispositivos dentro de una red local.",
    respuesta: true,
  },

  {
    texto:
      "Un switch reemplaza necesariamente la conexión a Internet proporcionada por el proveedor.",
    respuesta: false,
  },

  {
    texto:
      "En una oficina, un router y un switch pueden trabajar conjuntamente para conectar diferentes computadoras a una red.",
    respuesta: true,
  },

  // Intercambio de archivos

  {
    texto:
      "Internet permite intercambiar archivos entre diferentes usuarios y servidores.",
    respuesta: true,
  },

  {
    texto:
      "Al enviar un archivo por correo electrónico es importante verificar que el destinatario sea correcto.",
    respuesta: true,
  },

  {
    texto:
      "Todos los archivos recibidos por Internet pueden abrirse sin verificar previamente su origen.",
    respuesta: false,
  },

  {
    texto:
      "Los servicios de almacenamiento en la nube pueden utilizarse para compartir archivos con otras personas.",
    respuesta: true,
  },

  // Correo electrónico

  {
    texto:
      "Un correo electrónico profesional debe utilizar un asunto claro relacionado con el contenido del mensaje.",
    respuesta: true,
  },

  {
    texto:
      "Los archivos adjuntos deben revisarse antes de abrirlos, especialmente cuando provienen de remitentes desconocidos.",
    respuesta: true,
  },

  {
    texto:
      "Las normas de confidencialidad deben respetarse al enviar información mediante correo electrónico.",
    respuesta: true,
  },

  {
    texto:
      "Enviar información confidencial a cualquier destinatario es correcto siempre que se utilice correo electrónico.",
    respuesta: false,
  },

  // Seguridad en Internet

  {
    texto:
      "La seguridad en Internet busca reducir los riesgos relacionados con el uso de servicios y recursos conectados a la red.",
    respuesta: true,
  },

  {
    texto:
      "El phishing es una técnica utilizada para intentar obtener información mediante mensajes o sitios que aparentan ser legítimos.",
    respuesta: true,
  },

  {
    texto:
      "El malware puede utilizarse para realizar acciones perjudiciales en un dispositivo.",
    respuesta: true,
  },

  {
    texto:
      "Una contraseña segura debería ser sencilla y utilizar únicamente el nombre del usuario para que sea fácil de recordar.",
    respuesta: false,
  },

  {
    texto:
      "Mantener actualizado el sistema operativo y las aplicaciones contribuye a mejorar la seguridad del equipo.",
    respuesta: true,
  },

  // Conexiones seguras

  {
    texto:
      "HTTPS utiliza mecanismos de seguridad para proteger la comunicación entre el navegador y el sitio web.",
    respuesta: true,
  },

  {
    texto:
      "El candado mostrado por un navegador puede indicar que la conexión utiliza HTTPS.",
    respuesta: true,
  },

  {
    texto:
      "Una conexión HTTPS garantiza por sí sola que el sitio web pertenece a una organización legítima.",
    respuesta: false,
  },

  {
    texto:
      "Es importante verificar la dirección del sitio antes de ingresar datos personales o credenciales.",
    respuesta: true,
  },

  // Firewalls

  {
    texto:
      "Un firewall permite controlar determinados tipos de tráfico de red que entra o sale de un dispositivo o red.",
    respuesta: true,
  },

  {
    texto:
      "Un firewall puede funcionar como una barrera de seguridad frente a determinadas conexiones de red.",
    respuesta: true,
  },

  {
    texto:
      "Un firewall y un antivirus cumplen exactamente la misma función.",
    respuesta: false,
  },

  {
    texto:
      "La configuración de un firewall puede incluir reglas para permitir o bloquear determinados tipos de tráfico.",
    respuesta: true,
  },

  // Autenticación de mensajes

  {
    texto:
      "Los mecanismos de autenticación pueden ayudar a verificar el origen o la integridad de determinada información digital.",
    respuesta: true,
  },

  {
    texto:
      "Un mensaje que aparenta provenir de una organización conocida debe considerarse automáticamente auténtico.",
    respuesta: false,
  },

  {
    texto:
      "Verificar el remitente y el contenido de un mensaje ayuda a reducir riesgos de seguridad.",
    respuesta: true,
  },

  // Archivos ejecutables

  {
    texto:
      "Un archivo ejecutable puede contener instrucciones que serán procesadas por el sistema operativo.",
    respuesta: true,
  },

  {
    texto:
      "Los archivos con extensión .exe pueden ser archivos ejecutables en Windows.",
    respuesta: true,
  },

  {
    texto:
      "Los archivos ejecutables recibidos por correo electrónico siempre son seguros si tienen una extensión conocida.",
    respuesta: false,
  },

  {
    texto:
      "Los archivos ejecutables provenientes de fuentes desconocidas deben tratarse con precaución.",
    respuesta: true,
  },

  {
    texto:
      "Algunos archivos ejecutables pueden utilizarse para instalar software en una computadora.",
    respuesta: true,
  },

  // Buenas prácticas de seguridad

  {
    texto:
      "Utilizar contraseñas seguras y evitar compartirlas contribuye a proteger las cuentas.",
    respuesta: true,
  },

  {
    texto:
      "Es recomendable descargar archivos solamente desde fuentes confiables.",
    respuesta: true,
  },

  {
    texto:
      "Las copias de seguridad pueden ayudar a recuperar información ante una pérdida de datos.",
    respuesta: true,
  },

  {
    texto:
      "Ante un mensaje sospechoso es recomendable hacer clic en sus enlaces para comprobar si realmente es legítimo.",
    respuesta: false,
  },

  {
    texto:
      "No se debe proporcionar información confidencial sin verificar previamente quién la solicita y para qué finalidad.",
    respuesta: true,
  },

  {
    texto:
      "Utilizar una computadora compartida implica que se deben tomar precauciones adicionales con las cuentas y la información personal.",
    respuesta: true,
  },

  {
    texto:
      "Si se detecta una situación sospechosa de seguridad, ignorarla siempre es la mejor forma de actuar.",
    respuesta: false,
  },

  // Integración de contenidos

  {
    texto:
      "Una búsqueda eficiente, la evaluación de resultados y el almacenamiento organizado de las fuentes permiten trabajar mejor con información obtenida de Internet.",
    respuesta: true,
  },

  {
    texto:
      "En una oficina se pueden combinar conexiones Ethernet, Wi-Fi, un router y un switch para conectar diferentes dispositivos.",
    respuesta: true,
  },

  {
    texto:
      "El uso seguro de Internet requiere aplicar diferentes medidas de prevención y no depende de una única herramienta de seguridad.",
    respuesta: true,
  },

  {
    texto:
      "Tener un antivirus instalado significa que ya no es necesario aplicar ninguna otra medida de seguridad.",
    respuesta: false,
  },

  {
    texto:
      "La búsqueda de información, el intercambio de archivos, el correo electrónico y la seguridad forman parte de las competencias necesarias para utilizar Internet en un entorno administrativo.",
    respuesta: true,
  },

  {
    texto:
      "Antes de ingresar una contraseña en una página web, es recomendable verificar que la dirección del sitio corresponda realmente al servicio que se desea utilizar.",
    respuesta: true,
  },

  {
    texto:
      "Utilizar la misma contraseña simple en todas las cuentas es una buena práctica porque facilita recordar las credenciales.",
    respuesta: false,
  },

  {
    texto:
      "Una red Wi-Fi pública puede presentar riesgos adicionales, especialmente al acceder o compartir información confidencial.",
    respuesta: true,
  },

  {
    texto:
      "Cerrar una pestaña del navegador elimina automáticamente toda la información almacenada en Internet sobre la actividad realizada.",
    respuesta: false,
  },

  {
    texto:
      "Combinar contraseñas seguras, actualizaciones, copias de seguridad y precaución frente a mensajes sospechosos permite mejorar la seguridad informática.",
    respuesta: true,
  },
];

export default function Page() {
  return (
    <Quiz
      titulo="Cuestionario Módulo 4 - Navegación, búsqueda y seguridad en Internet"
      preguntas={preguntas}
    />
  );
}