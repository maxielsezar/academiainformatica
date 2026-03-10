export default function FormatoParrafoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formato de Párrafo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El formato de párrafo permite organizar el texto dentro del documento
          para mejorar su presentación y facilitar la lectura. En Microsoft Word
          se pueden modificar aspectos como la alineación del texto, el
          interlineado y las sangrías de los párrafos.
        </p>
      </section>

      {/* Alineación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alineación del Texto
        </h2>

        <p className="mb-4 max-w-3xl">
          La alineación define cómo se distribuye el texto entre los márgenes
          del documento.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Alinear a la izquierda</strong> → el texto comienza desde el margen izquierdo.</li>
            <li><strong>Centrar</strong> → el texto queda ubicado en el centro de la página.</li>
            <li><strong>Alinear a la derecha</strong> → el texto se alinea con el margen derecho.</li>
            <li><strong>Justificar</strong> → el texto se distribuye uniformemente entre ambos márgenes.</li>
          </ul>
        </div>
      </section>

      {/* Interlineado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Interlineado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El interlineado es el espacio que existe entre una línea de texto
          y la siguiente dentro de un párrafo.
        </p>

        <div className="border p-6 rounded-xl mt-4">
          <ul className="list-disc list-inside space-y-2">
            <li>1.0 → líneas muy juntas.</li>
            <li>1.5 → separación moderada.</li>
            <li>2.0 → doble espacio entre líneas.</li>
          </ul>
        </div>
      </section>

      {/* Sangría */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sangría
        </h2>

        <p className="mb-4 max-w-3xl">
          La sangría permite desplazar el texto hacia la derecha o hacia la
          izquierda dentro del párrafo.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Sangría izquierda</strong> → mueve todo el párrafo hacia la derecha.</li>
            <li><strong>Sangría derecha</strong> → reduce el ancho del párrafo desde el margen derecho.</li>
            <li><strong>Sangría de primera línea</strong> → solo la primera línea del párrafo se desplaza.</li>
          </ul>
        </div>
      </section>

      {/* Espaciado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Espaciado entre Párrafos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Word también permite agregar espacio antes o después de un párrafo.
          Esto ayuda a separar secciones del documento y mejorar su organización.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribe un párrafo y cambia su alineación a centrado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Cambia el interlineado del párrafo a 1.5.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Aplica una sangría de primera línea al párrafo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Crea dos párrafos y agrega espacio entre ellos.
          </div>

        </div>
      </section>

    </div>
  );
}