export default function ActividadNarracionAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad: Narración de Audio en Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad vas a poner en práctica los conocimientos aprendidos
          sobre grabación, edición y exportación de audio utilizando Audacity.
          El objetivo será crear una narración sobre un tema de tu elección.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo de la actividad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Realizar una narración grabada utilizando micrófono y herramientas de
          edición de audio para mejorar la calidad del proyecto final.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          Crear una narración de entre 1 y 3 minutos sobre un tema libre.
          Puede tratarse de:
          
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Un hobby o actividad favorita</li>
            <li>Una historia o experiencia personal</li>
            <li>Un tema educativo o informativo</li>
            <li>Una noticia o curiosidad</li>
            <li>Una reseña de película, libro o videojuego</li>
          </ul>
        </div>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para realizar la actividad
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>1. Elegir un tema:</strong> pensar sobre qué se va a hablar.
          </p>

          <p>
            <strong>2. Preparar un guion:</strong> escribir ideas principales o un texto breve.
          </p>

          <p>
            <strong>3. Grabar la narración:</strong> utilizar micrófono y Audacity.
          </p>

          <p>
            <strong>4. Editar el audio:</strong> cortar errores y mejorar sonido.
          </p>

          <p>
            <strong>5. Aplicar efectos:</strong> usar reducción de ruido, Fade In o Fade Out.
          </p>

          <p>
            <strong>6. Exportar el proyecto:</strong> guardar el archivo en formato MP3.
          </p>

        </div>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Hablar con claridad:</strong> pronunciar correctamente las palabras.
          </p>

          <p>
            <strong>Evitar ruidos externos:</strong> grabar en un lugar silencioso.
          </p>

          <p>
            <strong>No leer demasiado rápido:</strong> mantener ritmo cómodo.
          </p>

          <p>
            <strong>Escuchar antes de exportar:</strong> revisar errores o sonidos molestos.
          </p>

        </div>
      </section>

      {/* Elementos obligatorios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos obligatorios
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">

          El proyecto debe incluir:

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Grabación de voz propia</li>
            <li>Edición básica del audio</li>
            <li>Uso de al menos un efecto de sonido</li>
            <li>Exportación en formato MP3</li>
          </ul>

        </div>
      </section>

      {/* Criterios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Claridad de la narración:</strong> facilidad para entender el audio.
          </p>

          <p>
            <strong>Calidad del sonido:</strong> ausencia de ruidos molestos.
          </p>

          <p>
            <strong>Uso de herramientas:</strong> correcta aplicación de edición y efectos.
          </p>

          <p>
            <strong>Creatividad:</strong> originalidad en el contenido elegido.
          </p>

        </div>
      </section>

      {/* Entrega */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrega del trabajo
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl max-w-3xl">
          El archivo final debe entregarse en formato MP3 junto con el nombre
          del estudiante y el título de la narración.
        </div>
      </section>

    </div>
  );
}