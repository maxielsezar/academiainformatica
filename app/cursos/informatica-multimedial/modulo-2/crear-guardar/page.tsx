export default function CrearGuardarDocumentosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Crear y Guardar Documentos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En un procesador de texto como Microsoft Word, es posible crear
          documentos nuevos para escribir información y guardarlos en la
          computadora para utilizarlos más adelante. Guardar un documento
          permite conservar el trabajo realizado y evitar perder la
          información.
        </p>
      </section>

      {/* Crear documento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Documento Nuevo
        </h2>

        <p className="mb-4 max-w-3xl">
          Para comenzar a trabajar en Word es necesario crear un documento nuevo.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="font-semibold mb-3">Pasos para crear un documento:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Abrir Microsoft Word.</li>
            <li>Hacer clic en <strong>Archivo</strong>.</li>
            <li>Seleccionar <strong>Nuevo</strong>.</li>
            <li>Elegir <strong>Documento en blanco</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Guardar documento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar un Documento
        </h2>

        <p className="mb-4 max-w-3xl">
          Guardar un documento significa almacenar el archivo en la computadora
          para poder abrirlo nuevamente en el futuro.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="font-semibold mb-3">Pasos para guardar un documento:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Hacer clic en <strong>Archivo</strong>.</li>
            <li>Seleccionar <strong>Guardar como</strong>.</li>
            <li>Elegir la carpeta donde se guardará el archivo.</li>
            <li>Escribir un nombre para el documento.</li>
            <li>Hacer clic en <strong>Guardar</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Guardar cambios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar Cambios en un Documento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando un documento ya fue guardado anteriormente, se pueden guardar
          los cambios realizados utilizando la opción <strong>Guardar</strong>.
          También se puede usar el atajo de teclado <strong>Ctrl + G </strong>
          para guardar rápidamente el documento.
        </p>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de los Documentos
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Los documentos creados en Word se guardan generalmente con la
            extensión:
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>.docx</strong> → formato principal de Word.</li>
            <li><strong>.pdf</strong> → documento listo para compartir o imprimir.</li>
          </ul>
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
            Abre Microsoft Word y crea un documento nuevo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribe un párrafo corto sobre un tema de tu interés.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Guarda el documento con tu nombre en una carpeta de la computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Cierra el documento y vuelve a abrirlo para verificar que se haya
            guardado correctamente.
          </div>

        </div>
      </section>

    </div>
  );
}