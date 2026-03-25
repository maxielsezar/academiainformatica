export default function MecanografiaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Mecanografía
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La mecanografía es la habilidad de escribir en el teclado de forma rápida
          y precisa sin necesidad de mirar las teclas. Es una competencia fundamental
          para el estudio, el trabajo y el uso eficiente de la computadora.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la mecanografía?
        </h2>

        <div className="border p-6 rounded-xl">
          Es la técnica de escritura utilizando todos los dedos de ambas manos,
          ubicados en posiciones específicas del teclado, permitiendo mayor velocidad
          y menor cantidad de errores.
        </div>
      </section>

      {/* Posición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Posición correcta
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>
            Para escribir correctamente se debe mantener:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Espalda recta</li>
            <li>Pies apoyados en el suelo</li>
            <li>Manos sobre el teclado</li>
            <li>Vista en la pantalla (no en el teclado)</li>
          </ul>
        </div>
      </section>

      {/* Fila base */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fila base del teclado
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm">
          A S D F   J K L Ñ
        </div>

        <p className="mt-6">
          Los dedos deben apoyarse en estas teclas como posición inicial.
          Desde aquí se accede al resto del teclado.
        </p>
      </section>

      {/* Dedos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de los dedos
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>
            Cada dedo tiene teclas asignadas:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Meñiques: teclas externas</li>
            <li>Anulares: teclas cercanas</li>
            <li>Medios: teclas centrales</li>
            <li>Índices: mayor cantidad de teclas</li>
            <li>Pulgares: barra espaciadora</li>
          </ul>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la mecanografía
        </h2>

        <div className="border p-6 rounded-xl">
          Permite escribir más rápido, reducir errores, mejorar la productividad
          y facilitar el aprendizaje en entornos digitales.
        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores comunes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mirar el teclado constantemente</li>
          <li>Usar pocos dedos</li>
          <li>Mala postura</li>
          <li>Escribir demasiado rápido sin precisión</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Practicar la fila base escribiendo secuencias como:
            asdf jklñ durante 2 minutos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribir un párrafo sin mirar el teclado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Medir la velocidad de escritura (palabras por minuto).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Escribir un texto largo manteniendo precisión y postura correcta.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Escribir un texto de al menos 150 palabras sin mirar el teclado,
          manteniendo una velocidad constante y minimizando errores.
        </div>
      </section>

    </div>
  );
}