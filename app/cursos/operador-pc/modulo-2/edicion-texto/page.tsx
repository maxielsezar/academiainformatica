export default function EdicionTextoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Edición de Texto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La edición de texto consiste en modificar el contenido de un documento.
          En Microsoft Word es posible agregar, eliminar o cambiar partes del
          texto utilizando distintas herramientas que facilitan la escritura
          y organización de la información.
        </p>
      </section>

      {/* Escribir texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Escribir Texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para escribir en un documento solo es necesario colocar el cursor
          en el área de trabajo y comenzar a escribir con el teclado.
          El cursor indica el lugar donde aparecerá el texto.
        </p>
      </section>

      {/* Seleccionar texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seleccionar Texto
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Antes de modificar una parte del documento es necesario seleccionar
            el texto.
          </p>

          <p className="mt-2">
            Para hacerlo se puede:
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Arrastrar el mouse sobre el texto.</li>
            <li>Hacer doble clic para seleccionar una palabra.</li>
            <li>Hacer triple clic para seleccionar un párrafo.</li>
          </ul>
        </div>
      </section>

      {/* Copiar, cortar y pegar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copiar, Cortar y Pegar
        </h2>

        <p className="mb-4 max-w-3xl">
          Estas herramientas permiten mover o duplicar texto dentro del
          documento o entre distintos documentos.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Copiar:</strong> crea una copia del texto seleccionado.
            </li>

            <li>
              <strong>Cortar:</strong> elimina el texto seleccionado y lo guarda
              temporalmente para colocarlo en otro lugar.
            </li>

            <li>
              <strong>Pegar:</strong> inserta el contenido copiado o cortado.
            </li>
          </ul>
        </div>
      </section>

      {/* Atajos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atajos de Teclado
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            Para trabajar más rápido se pueden utilizar combinaciones de teclas:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Ctrl + C</strong> → Copiar</li>
            <li><strong>Ctrl + X</strong> → Cortar</li>
            <li><strong>Ctrl + V</strong> → Pegar</li>
            <li><strong>Ctrl + Z</strong> → Deshacer</li>
            <li><strong>Ctrl + Y</strong> → Rehacer</li>
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
            Escribe un párrafo corto sobre tu actividad favorita.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Selecciona una oración del texto y cópiala al final del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Corta una parte del texto y pégala en otro lugar del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Utiliza los atajos de teclado para copiar, cortar y pegar texto.
          </div>

        </div>
      </section>

    </div>
  );
}