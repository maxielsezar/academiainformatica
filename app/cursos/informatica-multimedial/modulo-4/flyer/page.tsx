export default function FlyersWordPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Creación de Flyers en Word
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un flyer es un material visual diseñado para transmitir un mensaje de forma
          rápida, directa y atractiva. Se utiliza principalmente para promocionar eventos,
          productos o servicios de manera impactante.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un flyer?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es un documento publicitario de una sola cara (aunque puede ser doble),
          que combina imágenes, colores y textos breves para captar la atención
          del lector en pocos segundos.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de un flyer
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Mensaje claro y breve</strong></li>
          <li><strong>Diseño llamativo</strong></li>
          <li><strong>Uso de imágenes impactantes</strong></li>
          <li><strong>Colores atractivos</strong></li>
          <li><strong>Información puntual (fecha, lugar, contacto)</strong></li>
        </ul>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de flyers
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Flyer publicitario</h3>
            <p className="leading-relaxed">
              Se utiliza para promocionar productos o servicios. Suele incluir ofertas,
              descuentos y datos de contacto.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Flyer informativo</h3>
            <p className="leading-relaxed">
              Presenta información sobre un tema específico de manera resumida,
              como campañas de concientización o eventos educativos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Flyer de evento</h3>
            <p className="leading-relaxed">
              Anuncia actividades como fiestas, conciertos o reuniones, destacando
              fecha, lugar y hora.
            </p>
          </div>

        </div>
      </section>

      {/* Cómo hacerlo en Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo crear un flyer en Word?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Abrir Word:</strong> crear un documento en blanco.</li>
          <li><strong>Elegir tamaño:</strong> A4 o personalizado según necesidad.</li>
          <li><strong>Agregar título:</strong> grande, visible y atractivo.</li>
          <li><strong>Insertar imágenes:</strong> desde "Insertar → Imágenes".</li>
          <li><strong>Usar cuadros de texto:</strong> para organizar mejor la información.</li>
          <li><strong>Aplicar colores:</strong> que llamen la atención sin saturar.</li>
          <li><strong>Destacar datos importantes:</strong> como fechas y contactos.</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos importantes de un flyer
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Título impactante</strong></li>
          <li><strong>Imagen principal atractiva</strong></li>
          <li><strong>Texto corto y directo</strong></li>
          <li><strong>Datos clave (fecha, lugar, contacto)</strong></li>
          <li><strong>Diseño visual equilibrado</strong></li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del diseño
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un flyer, el diseño es fundamental porque el lector decide en segundos
          si leerlo o no. Un buen uso de colores, imágenes y tipografía permite
          captar la atención rápidamente y transmitir el mensaje de forma efectiva.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá un flyer en Word para promocionar un 
          <strong> evento escolar</strong>. Debe incluir:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Un título llamativo</li>
            <li>Imagen principal</li>
            <li>Fecha, hora y lugar</li>
            <li>Descripción breve del evento</li>
            <li>Diseño creativo con colores</li>
          </ul>
        </div>
      </section>

    </div>
  );
}