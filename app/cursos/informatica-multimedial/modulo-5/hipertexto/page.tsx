export default function HipertextoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Armar un Hipertexto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El hipertexto es una forma de organizar la información mediante enlaces
          que permiten navegar entre distintos contenidos. Para construir un buen
          hipertexto es necesario seguir ciertas etapas que facilitan su desarrollo.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un hipertexto?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un hipertexto es un conjunto de textos conectados entre sí mediante
          enlaces (hipervínculos). Permite una lectura no lineal, donde el usuario
          decide qué camino seguir según sus intereses.
        </p>
      </section>

      {/* Etapa 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapa 1: Exploración, organización y codificación
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          En esta primera etapa se analiza la información y se planifica cómo se va
          a estructurar el contenido del hipertexto.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Exploración:</strong> búsqueda y recopilación de información relevante.</li>
          <li><strong>Organización:</strong> clasificación de los contenidos en temas y subtemas.</li>
          <li><strong>Codificación:</strong> transformación de la información en formato digital (texto, imágenes, etc.).</li>
        </ul>
      </section>

      {/* Etapa 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapa 2: Pre-escritura, organización y escritura
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          En esta etapa se construye el hipertexto, creando los contenidos y las
          conexiones entre ellos.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Pre-escritura:</strong> planificación de ideas y definición de los contenidos.</li>
          <li><strong>Organización (nexos):</strong> creación de enlaces que conectan la información.</li>
          <li><strong>Escritura (lexías):</strong> redacción de los textos o bloques de contenido.</li>
        </ul>
      </section>

      {/* Conceptos clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conceptos clave
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Lexías:</strong> son los bloques de texto o contenido dentro del hipertexto.</li>
          <li><strong>Nexos:</strong> son los enlaces que conectan las distintas partes del contenido.</li>
          <li><strong>Navegación:</strong> recorrido que realiza el usuario a través del hipertexto.</li>
        </ul>
      </section>
    {/* Hipervínculo en Word */}
        <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
            ¿Cómo hacer un hipervínculo en Word?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
            Un hipervínculo es un enlace que permite ir de un texto a otro contenido,
            como una página web, un archivo o una parte del mismo documento.
            En Word, podés crearlos fácilmente para mejorar la navegación.
        </p>

        <h3 className="font-semibold mb-2">Pasos para crear un hipervínculo:</h3>

        <ul className="list-disc list-inside space-y-3">
            <li>Seleccionar el texto o palabra que querés convertir en enlace.</li>
            <li>Hacer clic derecho y elegir la opción <strong>"Vínculo" o "Hipervínculo"</strong>.</li>
            <li>En la ventana que aparece, escribir la dirección (URL) o elegir un archivo.</li>
            <li>Hacer clic en <strong>"Aceptar"</strong>.</li>
        </ul>

        <h3 className="font-semibold mt-6 mb-2">Tipos de hipervínculos en Word:</h3>

        <ul className="list-disc list-inside space-y-3">
            <li><strong>A una página web:</strong> redirige a un sitio de internet.</li>
            <li><strong>A un archivo:</strong> abre un documento guardado.</li>
            <li><strong>A una parte del documento:</strong> lleva a un título o sección.</li>
            <li><strong>A un correo electrónico:</strong> abre el gestor de email.</li>
        </ul>

        <div className="border p-6 rounded-xl max-w-3xl mt-6">
            <p>
            <strong>Ejemplo:</strong> seleccionás la palabra "Google" y la vinculás a 
            https://www.google.com. Al hacer clic, el usuario será redirigido a esa página.
            </p>
        </div>
        </section>
      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl space-y-3">
          <p>
            Página principal: "Multimedia"
          </p>
          <ul className="list-disc list-inside">
            <li>→ Enlace a "Texto"</li>
            <li>→ Enlace a "Imagen"</li>
            <li>→ Enlace a "Video"</li>
          </ul>
          <p>
            Cada sección contiene información específica y enlaces para volver o continuar navegando.
          </p>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Elegí un tema y organizá la información en diferentes secciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Diseñá un esquema de hipertexto indicando las conexiones entre los contenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Escribí pequeñas lexías y conectalas mediante enlaces.
          </div>

        </div>
      </section>

    </div>
  );
}