export default function TextoConcatenarExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones TEXTO y CONCATENAR en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones TEXTO y CONCATENAR permiten trabajar con datos de tipo texto.
          Son muy útiles para unir información de distintas celdas y dar formato
          a números o fechas para mostrarlos de manera más clara.
        </p>
      </section>

      {/* CONCATENAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función CONCATENAR
        </h2>

        <p className="max-w-3xl mb-4">
          La función CONCATENAR se utiliza para unir el contenido de varias celdas en una sola.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=CONCATENAR(A1, " ", B1)</p>
          <p>
            Une el contenido de A1 y B1 con un espacio entre ellos.
          </p>
        </div>
      </section>

      {/* TEXTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función TEXTO
        </h2>

        <p className="max-w-3xl mb-4">
          La función TEXTO permite convertir un número o fecha en texto con un formato específico.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=TEXTO(A1, "0.00")</p>
          <p>
            Muestra el número con dos decimales.
          </p>
        </div>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirven?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Unir nombre y apellido en una sola celda.</li>
          <li>Crear frases automáticas.</li>
          <li>Dar formato a números y fechas.</li>
          <li>Mejorar la presentación de datos.</li>
        </ul>
      </section>

      {/* Ejemplo combinado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo Combinado
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            =CONCATENAR("El total es $", TEXTO(A1, "0.00"))
          </p>
          <p>
            Muestra un mensaje con el valor formateado.
          </p>
        </div>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Crea una tabla con:
            <br />
            Nombre | Apellido | Nota
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Usa CONCATENAR para unir nombre y apellido en una sola celda.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa TEXTO para mostrar la nota con dos decimales.
          </div>

        </div>
      </section>

    </div>
  );
}