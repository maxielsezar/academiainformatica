export default function HerramientasSeleccionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Herramientas de Selección en Photoshop
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de selección permiten elegir una parte específica de una imagen
          para editarla sin afectar el resto. Son fundamentales para recortar, modificar
          o aplicar efectos de manera precisa.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una selección?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una selección es un área activa dentro de la imagen donde se pueden realizar
          cambios. Todo lo que esté fuera de esa área no se verá afectado por la edición.
        </p>
      </section>

      {/* Tipos de herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales herramientas de selección
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Marco rectangular</h3>
            <p className="leading-relaxed">
              Permite seleccionar áreas en forma de rectángulo o cuadrado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Marco elíptico</h3>
            <p className="leading-relaxed">
              Se utiliza para seleccionar áreas circulares o elípticas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Lazo</h3>
            <p className="leading-relaxed">
              Permite hacer selecciones a mano alzada.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Lazo poligonal</h3>
            <p className="leading-relaxed">
              Selecciona mediante líneas rectas, ideal para formas con bordes definidos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Varita mágica</h3>
            <p className="leading-relaxed">
              Selecciona áreas con colores similares con un solo clic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Selección rápida</h3>
            <p className="leading-relaxed">
              Permite seleccionar objetos de forma automática arrastrando el cursor.
            </p>
          </div>

        </div>
      </section>

      {/* Opciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Opciones de selección
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Sumar selección:</strong> agregar nuevas áreas</li>
          <li><strong>Restar selección:</strong> quitar partes</li>
          <li><strong>Intersección:</strong> seleccionar solo lo común</li>
          <li><strong>Desvanecer (Feather):</strong> suavizar bordes</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo usar una herramienta de selección?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Elegir la herramienta de selección</li>
          <li>Hacer clic o arrastrar sobre la imagen</li>
          <li>Ajustar la selección si es necesario</li>
          <li>Aplicar la edición (borrar, copiar, ajustar, etc.)</li>
          <li>Deseleccionar cuando se termine (Ctrl + D)</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las selecciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las selecciones permiten trabajar con precisión, ahorrar tiempo y lograr
          mejores resultados en la edición de imágenes.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Abrí una imagen en Photoshop y realizá lo siguiente:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Seleccioná un objeto con la herramienta de selección rápida</li>
            <li>Recortalo o copialo en otra capa</li>
            <li>Usá la varita mágica para seleccionar un fondo</li>
            <li>Aplicá un efecto solo en la parte seleccionada</li>
          </ul>
        </div>
      </section>

    </div>
  );
}