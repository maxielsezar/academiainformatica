export default function ModuloEdicionSonidoPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Módulo: Edición de Sonido
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Producción, edición y mejora de audio digital para crear contenidos
          claros, profesionales y atractivos.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De qué trata este módulo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este módulo vas a aprender a trabajar con archivos de audio,
          utilizando herramientas digitales para grabar, editar y mejorar sonido.
          Conocerás conceptos básicos como recorte de pistas, reducción de ruido,
          efectos de audio, mezcla y exportación. Estos conocimientos te permitirán
          crear podcasts, música, narraciones y proyectos multimedia con mejor calidad sonora.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos que vas a ver
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Grabación de Audio</h3>
            Uso de micrófonos y configuración básica para grabar sonido.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Formatos de Audio</h3>
            Diferencias entre MP3, WAV y otros formatos digitales.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Edición de Pistas</h3>
            Corte, unión y organización de clips de audio.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Efectos de Sonido</h3>
            Aplicación de eco, reverb, reducción de ruido y ecualización.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Mezcla de Audio</h3>
            Ajuste de volumen y combinación de múltiples pistas.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Exportación de Proyectos</h3>
            Guardado de archivos de audio en distintos formatos y calidades.
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender los conceptos básicos de edición de sonido</li>
          <li>Aprender a grabar y editar audio digital</li>
          <li>Utilizar herramientas de producción sonora</li>
          <li>Mejorar la calidad de grabaciones</li>
          <li>Aplicar efectos y mezclas de audio</li>
          <li>Crear proyectos sonoros básicos</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades que vas a realizar
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            Grabación de una pista de voz utilizando un micrófono.
          </div>

          <div className="border p-6 rounded-xl">
            Edición de audio aplicando cortes y eliminación de ruido.
          </div>

          <div className="border p-6 rounded-xl">
            Incorporación de música y efectos sonoros en un proyecto.
          </div>

          <div className="border p-6 rounded-xl">
            Exportación de un podcast o archivo de audio final.
          </div>

        </div>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas 
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Audacity</h3>
            Programa gratuito para grabar y editar audio.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este módulo te permitirá desarrollar habilidades para producir y editar
          audio digital, mejorando la calidad de tus proyectos multimedia y la
          forma en que comunicás ideas mediante el sonido.
        </div>
      </section>

    </div>
  );
}