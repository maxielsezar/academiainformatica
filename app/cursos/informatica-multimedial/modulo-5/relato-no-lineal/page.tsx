export default function CuentoInteractivoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad: Crea tu propio cuento interactivo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad vas a crear un cuento del tipo <strong>“Elige tu propia aventura”</strong>,
          donde el lector podrá tomar decisiones que cambian el desarrollo de la historia.
          Para lograrlo, vas a utilizar <strong>hipervínculos</strong> que conecten distintas partes del documento.
        </p>
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un cuento interactivo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es una historia en la que el lector no sigue un único camino, sino que puede
          elegir entre distintas opciones. Cada decisión lo lleva a una parte diferente
          del relato, generando múltiples finales.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo de la actividad
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Desarrollar la creatividad</li>
          <li>Comprender el uso de hipervínculos</li>
          <li>Organizar información de forma no lineal</li>
          <li>Crear contenido digital interactivo</li>
        </ul>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl space-y-4">
          <p>
            Creá un cuento interactivo utilizando Word o cualquier editor digital.
            El tema es libre (aventura, misterio, terror, ciencia ficción, etc.).
          </p>

          <p className="font-semibold">Tu historia debe incluir:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Un inicio que presente la historia</li>
            <li>Al menos <strong>3 decisiones</strong> para el lector</li>
            <li>Diferentes caminos en la historia</li>
            <li>Al menos <strong>2 finales distintos</strong></li>
            <li>Uso de <strong>hipervínculos</strong> para navegar entre secciones</li>
          </ul>
        </div>
      </section>

      {/* Cómo hacerlo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo hacerlo?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Escribí las diferentes partes del cuento en el documento</li>
          <li>Separá cada escena o decisión en secciones</li>
          <li>Seleccioná el texto de una opción (ej: “Ir al bosque”)</li>
          <li>Insertá un hipervínculo hacia la parte correspondiente</li>
          <li>Probá los enlaces para verificar que funcionen correctamente</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl space-y-3">
          <p>
            Estás en una casa abandonada. Escuchás un ruido extraño...
          </p>
          <ul className="list-disc list-inside">
            <li>Ir a investigar el ruido</li>
            <li>Salir corriendo</li>
          </ul>
          <p className="text-sm text-gray-600">
            (Cada opción debe llevar a otra parte del documento mediante un hipervínculo)
          </p>
        </div>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Planificá la historia antes de escribir</li>
          <li>Usá títulos para cada escena</li>
          <li>Mantené los textos claros y organizados</li>
          <li>Verificá todos los enlaces</li>
          <li>Usá creatividad en las decisiones</li>
        </ul>
      </section>

      {/* Entrega */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Forma de entrega
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Guardar el archivo en formato Word o PDF</li>
            <li>Asegurarse de que los hipervínculos funcionen</li>
          </ul>
        </div>
      </section>

    </div>
  );
}