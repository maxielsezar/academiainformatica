export default function MedidasAlmacenamientoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Medidas de Almacenamiento
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las computadoras almacenan información en forma de datos digitales.
          Para medir la cantidad de información que puede guardarse se utilizan
          diferentes unidades llamadas <strong>medidas de almacenamiento</strong>.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Estas unidades comienzan con el <strong>bit</strong>, que es la unidad
          más pequeña, y van aumentando hasta llegar a gigabytes, terabytes
          y más.
        </p>
      </section>

      {/* Bit */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Bit
        </h2>

        <p className="max-w-3xl">
          El <strong>bit</strong> (binary digit) es la unidad mínima de información
          en una computadora. Un bit solo puede tener dos valores:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4 max-w-3xl">
          <li>0</li>
          <li>1</li>
        </ul>

        <p className="max-w-3xl mt-4">
          Estos valores representan estados eléctricos dentro de los circuitos
          de la computadora.
        </p>
      </section>

      {/* Byte */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Byte
        </h2>

        <p className="max-w-3xl">
          Un <strong>byte</strong> está formado por <strong>8 bits</strong>.
          Esta unidad se utiliza para representar un carácter de texto,
          como una letra o un número.
        </p>

        <p className="max-w-3xl mt-4">
          Por ejemplo, una palabra corta puede ocupar algunos bytes,
          mientras que un documento o una imagen pueden ocupar miles
          o millones de bytes.
        </p>
      </section>

      {/* Tabla de medidas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tabla de Medidas de Almacenamiento
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Unidad</th>
                <th className="p-3 font-semibold">Equivalencia</th>
                <th className="p-3 font-semibold">Uso aproximado</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Bit (b)</td>
                <td className="p-3">0 o 1</td>
                <td className="p-3">Unidad mínima de información</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Byte (B)</td>
                <td className="p-3">8 bits</td>
                <td className="p-3">Un carácter de texto</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Kilobyte (KB)</td>
                <td className="p-3">1024 Bytes</td>
                <td className="p-3">Documentos pequeños</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Megabyte (MB)</td>
                <td className="p-3">1024 KB</td>
                <td className="p-3">Imágenes o canciones</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Gigabyte (GB)</td>
                <td className="p-3">1024 MB</td>
                <td className="p-3">Películas o programas</td>
              </tr>

              <tr>
                <td className="p-3">Terabyte (TB)</td>
                <td className="p-3">1024 GB</td>
                <td className="p-3">Discos duros modernos</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de uso
        </h2>

        <ul className="list-disc list-inside space-y-2 max-w-3xl">
          <li>Un documento de texto puede ocupar algunos KB.</li>
          <li>Una imagen suele ocupar varios MB.</li>
          <li>Un videojuego moderno puede ocupar decenas de GB.</li>
          <li>Un disco duro puede tener varios TB de almacenamiento.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica con tus palabras qué es un bit y qué es un byte.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investiga cuánto almacenamiento tiene el disco de tu computadora
            y exprésalo en GB o TB.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Menciona tres tipos de archivos y estima cuánto espacio ocupan.
          </div>

        </div>
      </section>

    </div>
  );
}