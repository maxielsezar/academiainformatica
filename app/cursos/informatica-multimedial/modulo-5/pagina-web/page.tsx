export default function PaginaWebWordPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Crear una Página Web con Word
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Word no solo sirve para escribir documentos, también permite
          crear páginas web simples guardando archivos en formato HTML. Es una
          herramienta útil para comenzar a entender cómo funciona la creación
          de sitios web de manera básica.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una página web?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una página web es un documento digital que se visualiza en un navegador.
          Puede contener texto, imágenes, enlaces y otros elementos multimedia
          organizados para comunicar información.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar Word
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Fácil de usar</strong></li>
          <li><strong>No requiere conocimientos de programación</strong></li>
          <li><strong>Permite insertar imágenes y texto rápidamente</strong></li>
          <li><strong>Interfaz conocida</strong></li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo crear una página web en Word?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Abrir Word:</strong> crear un documento en blanco.</li>
          <li><strong>Agregar contenido:</strong> escribir texto, títulos e insertar imágenes.</li>
          <li><strong>Insertar hipervínculos:</strong> seleccionar texto → clic derecho → "Hipervínculo".</li>
          <li><strong>Dar formato:</strong> usar colores, tamaños de letra y estilos.</li>
          <li><strong>Organizar la información:</strong> dividir en secciones claras.</li>
          <li><strong>Guardar como web:</strong> ir a "Archivo → Guardar como" y elegir 
            <strong> "Página web (*.html)"</strong>.
          </li>
          <li><strong>Abrir en navegador:</strong> hacer doble clic en el archivo guardado.</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos básicos de una página web
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Título principal</strong></li>
          <li><strong>Textos informativos</strong></li>
          <li><strong>Imágenes</strong></li>
          <li><strong>Hipervínculos</strong></li>
          <li><strong>Secciones organizadas</strong></li>
        </ul>
      </section>

      {/* Limitaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Limitaciones de Word para páginas web
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Aunque Word permite crear páginas web básicas, no es una herramienta
          profesional para desarrollo web. El código HTML que genera puede ser
          desordenado y limitado en comparación con herramientas específicas
          como editores de código o frameworks modernos.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué aprender esto?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear una página web con Word es un buen primer paso para entender cómo
          se estructura un sitio web. Ayuda a introducir conceptos como enlaces,
          organización del contenido y visualización en navegador.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá una página web básica usando Word sobre 
          <strong> tu tema favorito</strong>. Debe incluir:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Un título principal</li>
            <li>Al menos dos secciones</li>
            <li>Una imagen</li>
            <li>Un hipervínculo</li>
            <li>Guardar el archivo como página web (.html)</li>
          </ul>
        </div>
      </section>

    </div>
  );
}