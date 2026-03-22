export default function TrabajoPracticoModulo3Page() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Trabajo Práctico: Busqueda y Procesamiento de la Información
        </h1>

        <p className="text-lg max-w-3xl">
          Análisis artístico y organización de información a partir de una obra musical
        </p>
      </section>

      {/* Video */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Material de análisis
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Observá y escuchá atentamente el siguiente video:
          </p>

          <div className="flex justify-center">
            <iframe
              width="860"
              height="450"
              src="https://www.youtube.com/embed/oClZR9CBnoc"
              title="YouTube video player"
              className="rounded-xl"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            La canción contiene múltiples referencias al arte, artistas,
            movimientos y estilos arquitectónicos.
          </p>
        </div>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            A partir de la letra de la canción, deberás identificar conceptos
            relacionados con el arte y organizarlos en diferentes categorías.
          </p>

          <p>
            Algunos ejemplos que aparecen en la canción:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Artistas: Picasso, Gauguin, Rodin, Miguel Ángel, Kandinsky, Warhol</li>
            <li>Movimientos: Expresionismo, Surrealismo, Hiperrealismo</li>
            <li>Arquitectura: Gótico, Mudéjar, Partenón</li>
            <li>Obras: Guernica, Capilla Sixtina, Gioconda</li>
          </ul>
        </div>
      </section>

      {/* Actividad principal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Principal
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Escuchar la letra de la canción e identificar los
            <strong> conceptos artísticos</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Investigar cada concepto en internet utilizando fuentes confiables.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Clasificar los conceptos en las siguientes categorías:
            <ul className="list-disc list-inside mt-3">
              <li>Arquitectura</li>
              <li>Pintura / Artes visuales</li>
              <li>Escultura</li>
              <li>Movimientos artísticos</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Imágenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Imágenes (Obligatorio)
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por cada concepto investigado, deberás agregar:
          </p>

          <ul className=" list-inside space-y-2">
            <li>✔ Una breve explicación</li>
            <li>✔ <strong>3 imágenes</strong> relacionadas (a elección)</li>
          </ul>

          <p>
            En el caso de los <strong>artistas</strong>, las imágenes pueden ser:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Obras importantes</li>
            <li>Fotografía del artista</li>
            <li>Detalles de su estilo</li>
          </ul>
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización del Trabajo
        </h2>

        <pre className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm">
{`ARQUITECTURA
- Gótico
  Explicación...
  [Imagen 1]
  [Imagen 2]
  [Imagen 3]

PINTURA / ARTES VISUALES
- Picasso
  Explicación...
  [Imagen 1]
  [Imagen 2]
  [Imagen 3]

ESCULTURA
- Rodin
  Explicación...
  [Imagen 1]
  [Imagen 2]
  [Imagen 3]

MOVIMIENTOS ARTÍSTICOS
- Surrealismo
  Explicación...
  [Imagen 1]
  [Imagen 2]
  [Imagen 3]`}
        </pre>
      </section>

      {/* Temas sugeridos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Temas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <strong>Arquitectura</strong><br />
            Gótico, Mudéjar, Partenón, Pirámides de Egipto
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Escultura</strong><br />
            Rodin, Chillida
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Pintura</strong><br />
            Picasso, Gauguin, Kandinsky, Pollock, Manet
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Movimientos</strong><br />
            Surrealismo, Expresionismo, Hiperrealismo, Bauhaus, Renacimiento
          </div>

        </div>
      </section>

      {/* Evaluación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de Evaluación
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Identificación correcta de conceptos artísticos</li>
          <li>Investigación y contenido desarrollado</li>
          <li>Uso adecuado de imágenes</li>
          <li>Organización clara del trabajo</li>
          <li>Presentación y prolijidad</li>
        </ul>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este trabajo permite conectar con el arte, desarrollar habilidades de análisis, investigación y creatividad.
        </div>
      </section>

    </div>
  );
}