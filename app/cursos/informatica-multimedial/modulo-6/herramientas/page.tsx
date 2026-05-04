export default function HerramientasPhotoshopPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Herramientas de Photoshop y cómo utilizarlas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Photoshop cuenta con una gran variedad de herramientas que permiten editar,
          retocar y crear imágenes. Conocer cómo funciona cada una es fundamental
          para trabajar de forma eficiente y lograr mejores resultados.
        </p>
      </section>

      {/* Selección */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de selección
        </h2>

        <div className="space-y-4 max-w-3xl">
          <p><strong>Selección rápida:</strong> selecciona objetos automáticamente. <br/>👉 Arrastrar sobre el objeto.</p>
          <p><strong>Varita mágica:</strong> selecciona por color. <br/>👉 Hacer clic sobre un área similar.</p>
          <p><strong>Lazo:</strong> selección libre. <br/>👉 Dibujar manualmente.</p>
        </div>
      </section>

      {/* Edición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de edición
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Borrador:</strong> elimina partes de la imagen. <br/>
            👉 Seleccionar herramienta y arrastrar sobre lo que querés borrar.
          </p>

          <p>
            <strong>Tampón de clonar:</strong> copia una parte de la imagen para cubrir otra. <br/>
            👉 Mantener Alt + clic para seleccionar origen, luego pintar.
          </p>

          <p>
            <strong>Pincel corrector:</strong> elimina imperfecciones. <br/>
            👉 Pintar sobre manchas o errores.
          </p>

          <p>
            <strong>Parche:</strong> reemplaza una zona por otra similar. <br/>
            👉 Seleccionar área y arrastrar hacia otra zona.
          </p>

        </div>
      </section>

      {/* Dibujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de dibujo
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Pincel:</strong> permite pintar. <br/>
            👉 Elegir color y arrastrar.
          </p>

          <p>
            <strong>Lápiz:</strong> dibuja líneas más duras. <br/>
            👉 Similar al pincel pero sin suavizado.
          </p>

          <p>
            <strong>Degradado:</strong> crea transiciones de color. <br/>
            👉 Arrastrar para aplicar el efecto.
          </p>

        </div>
      </section>

      {/* Texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramienta de texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Permite agregar palabras a la imagen. <br/>
          👉 Seleccionar herramienta texto, hacer clic y escribir.
        </p>
      </section>

      {/* Transformación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de transformación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Mover:</strong> desplaza elementos. <br/>
            👉 Arrastrar el objeto.
          </p>

          <p>
            <strong>Transformación libre (Ctrl + T):</strong> cambiar tamaño o rotar. <br/>
            👉 Ajustar desde las esquinas.
          </p>

        </div>
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de navegación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Zoom:</strong> acerca o aleja la imagen. <br/>
            👉 Clic para ampliar.
          </p>

          <p>
            <strong>Mano:</strong> mueve la vista. <br/>
            👉 Arrastrar para desplazarse.
          </p>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las herramientas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Dominar estas herramientas permite editar imágenes con precisión,
          mejorar su calidad y crear diseños profesionales.
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
            <li>Eliminar un elemento con el borrador</li>
            <li>Corregir una imperfección con el pincel corrector</li>
            <li>Usar el tampón de clonar para copiar una parte</li>
            <li>Agregar texto</li>
            <li>Aplicar zoom y mover la imagen</li>
          </ul>
        </div>
      </section>

    </div>
  );
}