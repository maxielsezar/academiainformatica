export default function FolletoWordPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Creación de Folletos en Word
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un folleto es un material visual diseñado para comunicar información
          de forma clara, organizada y atractiva. Se utiliza en ámbitos educativos,
          comerciales e informativos para presentar contenido de manera resumida.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un folleto?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es un documento que combina texto, imágenes y diseño para transmitir un mensaje.
          Su objetivo es captar la atención del lector y facilitar la comprensión de la
          información mediante una buena organización visual.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de folletos
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Díptico</h3>
            <p className="leading-relaxed">
              Es un folleto que se dobla en dos partes, formando cuatro caras
              (dos internas y dos externas). Se utiliza para presentar información
              breve y organizada en secciones simples.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Tríptico</h3>
            <p className="leading-relaxed">
              Es un folleto dividido en tres partes mediante dos pliegues.
              Tiene seis caras en total y permite organizar más contenido,
              ideal para explicar temas paso a paso o con mayor detalle.
            </p>
          </div>

        </div>
      </section>

      {/* Cómo hacerlo en Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo crear un folleto en Word?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Abrir Word:</strong> crear un documento nuevo.</li>
          <li><strong>Configurar orientación:</strong> ir a "Diseño" → Horizontal (recomendado).</li>
          <li><strong>Usar columnas:</strong> 2 columnas para díptico, 3 columnas para tríptico.</li>
          <li><strong>Agregar títulos:</strong> claros y llamativos.</li>
          <li><strong>Insertar imágenes:</strong> desde "Insertar → Imágenes".</li>
          <li><strong>Aplicar colores:</strong> para destacar la información.</li>
          <li><strong>Organizar contenido:</strong> dividir en secciones bien definidas.</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos importantes de un folleto
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Título atractivo</strong></li>
          <li><strong>Imágenes relacionadas</strong></li>
          <li><strong>Texto breve y claro</strong></li>
          <li><strong>Colores llamativos</strong></li>
          <li><strong>Buena organización visual</strong></li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del diseño
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un buen diseño hace que el folleto sea más fácil de leer y comprender.
          Además, ayuda a captar la atención del lector y transmitir el mensaje
          de forma más efectiva.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá un folleto en Word tipo <strong>tríptico</strong> sobre 
          <strong> la alimentación saludable</strong>. Debe incluir:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Un título llamativo</li>
            <li>Información organizada en secciones</li>
            <li>Consejos para una buena salud</li>
            <li>Imágenes relacionadas</li>
            <li>Uso de colores y diseño creativo</li>
          </ul>
        </div>
      </section>

    </div>
  );
}