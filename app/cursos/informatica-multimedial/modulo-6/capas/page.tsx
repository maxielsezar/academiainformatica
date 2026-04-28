export default function CapasPhotoshopPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Capas en Photoshop: ¿Qué son y cómo usarlas?
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las capas son uno de los conceptos más importantes en Photoshop.
          Permiten trabajar distintos elementos de una imagen por separado,
          facilitando la edición sin modificar el contenido original.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una capa?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una capa es como una hoja transparente donde podés colocar imágenes,
          texto o efectos. Todas las capas se apilan una sobre otra para formar
          la imagen final.
        </p>
      </section>

      {/* Panel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Panel de capas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El panel de capas muestra todas las capas del documento. Desde allí podés:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-3">
          <li>Crear nuevas capas</li>
          <li>Eliminar capas</li>
          <li>Ocultarlas o mostrarlas</li>
          <li>Cambiar su orden</li>
          <li>Modificar su opacidad</li>
        </ul>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de capas
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Capa de imagen</h3>
            <p className="leading-relaxed">
              Contiene fotografías o gráficos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Capa de texto</h3>
            <p className="leading-relaxed">
              Permite agregar palabras y títulos editables.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Capa de ajuste</h3>
            <p className="leading-relaxed">
              Aplica cambios de color o iluminación sin modificar la imagen original.
            </p>
          </div>

        </div>
      </section>

      {/* Cómo usarlas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo usar las capas?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Crear una capa:</strong> botón "Nueva capa" en el panel</li>
          <li><strong>Duplicar:</strong> clic derecho → duplicar capa</li>
          <li><strong>Mover:</strong> arrastrar la capa en el panel</li>
          <li><strong>Ocultar:</strong> hacer clic en el ícono del ojo</li>
          <li><strong>Eliminar:</strong> arrastrar a la papelera</li>
        </ul>
      </section>

      {/* Orden */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orden de las capas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las capas superiores se ven por encima de las inferiores.
          Cambiar el orden permite decidir qué elementos se muestran delante o detrás.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las capas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Trabajar con capas permite editar de forma no destructiva,
          organizar mejor el proyecto y realizar cambios sin afectar
          otros elementos de la imagen.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Realizá un diseño simple en Photoshop:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Insertá una imagen como fondo</li>
            <li>Agregá una capa de texto</li>
            <li>Creá una forma (rectángulo o círculo) en otra capa</li>
            <li>Organizá el orden de las capas</li>
            <li>Modificá la opacidad de alguna capa</li>
          </ul>
        </div>
      </section>

    </div>
  );
}