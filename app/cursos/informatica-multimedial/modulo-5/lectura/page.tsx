export default function LecturaPantallaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Lectura en Pantalla
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La lectura en pantalla es diferente a la lectura en papel. En entornos digitales,
          los usuarios no leen palabra por palabra, sino que escanean el contenido en busca
          de información relevante.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo leen los usuarios en pantalla?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los usuarios suelen leer de forma rápida y selectiva. Buscan palabras clave,
          títulos y elementos destacados que les permitan entender el contenido sin
          necesidad de leer todo el texto.
        </p>
      </section>

      {/* Comportamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comportamiento de lectura
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Lectura en F:</strong> recorren primero la parte superior y luego bajan rápidamente.</li>
          <li><strong>Escaneo:</strong> buscan palabras importantes en lugar de leer todo.</li>
          <li><strong>Selección:</strong> se enfocan solo en lo que les interesa.</li>
        </ul>
      </section>

      {/* Problemas comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Problemas comunes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Textos largos y sin estructura.</li>
          <li>Falta de títulos o subtítulos.</li>
          <li>Uso excesivo de información en un solo bloque.</li>
          <li>Tipografías difíciles de leer.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Usar títulos y subtítulos claros.</li>
          <li>Escribir párrafos cortos.</li>
          <li>Resaltar palabras clave.</li>
          <li>Utilizar listas para organizar la información.</li>
          <li>Dejar espacios en blanco para facilitar la lectura.</li>
        </ul>
      </section>

      {/* Diseño visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del diseño visual
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un buen diseño mejora la experiencia del usuario. El uso de colores,
          tipografías adecuadas y una correcta distribución del contenido facilita
          la lectura en pantalla.
        </p>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl space-y-3">
          <p><strong>Mal ejemplo:</strong> Texto largo sin espacios ni títulos.</p>
          <p><strong>Buen ejemplo:</strong> Texto dividido con subtítulos, listas y palabras destacadas.</p>
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
            Analizá una página web y describí cómo está organizada la información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Transformá un texto largo en uno adaptado para lectura en pantalla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Diseñá una página aplicando buenas prácticas de lectura digital.
          </div>

        </div>
      </section>

    </div>
  );
}