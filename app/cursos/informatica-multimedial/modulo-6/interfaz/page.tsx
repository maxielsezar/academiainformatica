export default function InterfazPhotoshopPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaz de Photoshop
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de Adobe Photoshop está diseñada para facilitar la edición
          de imágenes mediante diferentes paneles, herramientas y áreas de trabajo.
          Conocer sus partes es fundamental para trabajar de manera eficiente.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la interfaz?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La interfaz es el entorno visual del programa, donde se encuentran todas
          las herramientas, menús y opciones que permiten editar imágenes.
        </p>
      </section>

      {/* Partes principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Partes principales de la interfaz
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Barra de menú</h3>
            <p className="leading-relaxed">
              Ubicada en la parte superior, contiene opciones como Archivo, Edición,
              Imagen, Capa, entre otras.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Barra de herramientas</h3>
            <p className="leading-relaxed">
              Se encuentra generalmente a la izquierda. Incluye herramientas como
              selección, pincel, borrador, texto y recorte.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Área de trabajo</h3>
            <p className="leading-relaxed">
              Es el espacio central donde se visualiza y edita la imagen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Panel de capas</h3>
            <p className="leading-relaxed">
              Permite ver y organizar las capas de la imagen, facilitando la edición
              sin afectar otros elementos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Panel de propiedades</h3>
            <p className="leading-relaxed">
              Muestra opciones específicas según la herramienta seleccionada.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Barra de opciones</h3>
            <p className="leading-relaxed">
              Se encuentra debajo del menú y cambia según la herramienta activa,
              mostrando sus configuraciones.
            </p>
          </div>

        </div>
      </section>

      {/* Espacios de trabajo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Espacios de trabajo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Photoshop permite cambiar la disposición de la interfaz según la tarea
          (fotografía, pintura, diseño, etc.), facilitando el acceso a las herramientas
          más utilizadas en cada caso.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de conocer la interfaz
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Comprender la interfaz permite trabajar más rápido, aprovechar mejor las
          herramientas y mejorar la calidad del trabajo realizado.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Abrí Photoshop e identificá las siguientes partes:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Barra de menú</li>
            <li>Barra de herramientas</li>
            <li>Área de trabajo</li>
            <li>Panel de capas</li>
            <li>Barra de opciones</li>
          </ul>
          Luego, realizá una captura de pantalla y señalá cada una.
        </div>
      </section>

    </div>
  );
}