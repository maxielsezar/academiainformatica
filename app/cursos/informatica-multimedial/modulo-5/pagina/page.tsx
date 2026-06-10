export default function PaginaWebCanvaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Crear una Página Web con Canva
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Canva es una herramienta online que permite diseñar páginas web de forma
          sencilla y visual, sin necesidad de saber programación. Es ideal para crear
          presentaciones, portafolios o páginas informativas de manera rápida.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Canva?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Canva es una plataforma de diseño gráfico que funciona desde el navegador.
          Permite crear contenidos visuales como posters, presentaciones, redes sociales
          y también páginas web de una sola página (tipo scroll).
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de una página web en Canva
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Diseño visual y atractivo</li>
          <li>Uso de plantillas prediseñadas</li>
          <li>Navegación vertical (scroll)</li>
          <li>Integración de imágenes, videos y textos</li>
          <li>Publicación con enlace compartible</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo crear una página web en Canva?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Ingresar a Canva:</strong> acceder a la plataforma desde el navegador.</li>
          <li><strong>Buscar plantilla:</strong> escribir “sitio web” o “website”.</li>
          <li><strong>Elegir diseño:</strong> seleccionar una plantilla.</li>
          <li><strong>Editar contenido:</strong> cambiar textos, imágenes y colores.</li>
          <li><strong>Agregar secciones:</strong> crear distintas partes dentro del diseño.</li>
          <li><strong>Insertar enlaces:</strong> agregar hipervínculos a botones o textos.</li>
          <li><strong>Publicar:</strong> hacer clic en “Publicar como sitio web”.</li>
        </ul>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de publicación
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Página simple</h3>
            <p className="leading-relaxed">
              Todo el contenido se muestra en una sola página con desplazamiento vertical.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Presentación</h3>
            <p className="leading-relaxed">
              Se navega como diapositivas, ideal para mostrar información paso a paso.
            </p>
          </div>

        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar Canva
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No requiere conocimientos de programación</li>
          <li>Interfaz fácil e intuitiva</li>
          <li>Gran variedad de plantillas</li>
          <li>Publicación rápida con enlace</li>
          <li>Diseños modernos y profesionales</li>
        </ul>
      </section>

      {/* Limitaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Limitaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las páginas creadas en Canva son simples y no reemplazan a un sitio web
          profesional. No permiten funciones avanzadas como bases de datos,
          formularios complejos o múltiples páginas interconectadas.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá una página web en Canva sobre 
          <strong> tu presentación personal</strong>. Debe incluir:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Nombre y título</li>
            <li>Una breve descripción</li>
            <li>Imágenes o elementos visuales</li>
            <li>Un enlace a una red social</li>
            <li>Publicar como sitio web y compartir el enlace</li>
          </ul>
        </div>
      </section>

    </div>
  );
}