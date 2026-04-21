export default function DatosFormatosExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Diferenciación de Datos, Tipos, Formatos y Protección
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En Excel es importante comprender los distintos tipos de datos, cómo
          se presentan y cómo proteger la información. Esto permite trabajar de
          manera más organizada, evitar errores y mejorar la visualización de
          los datos.
        </p>
      </section>

      {/* Tipos de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Tipos de Datos
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Texto: nombres, descripciones o palabras.</li>
          <li>Números: valores numéricos para cálculos.</li>
          <li>Fechas: días, meses y años.</li>
          <li>Porcentajes: valores expresados en porcentaje (%).</li>
          <li>Moneda: valores económicos ($).</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Formatos de Datos
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Ejemplos de formato:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Mostrar un número como moneda ($1000).</li>
            <li>Convertir un número en porcentaje (50%).</li>
            <li>Modificar el formato de fecha (dd/mm/aaaa).</li>
            <li>Agregar o quitar decimales.</li>
          </ul>
        </div>
      </section>

      {/* Diferenciación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Diferenciación de Datos
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Uso de colores para destacar información.</li>
          <li>Negrita en títulos o encabezados.</li>
          <li>Bordes para separar datos.</li>
          <li>Alineación para ordenar la información.</li>
        </ul>
      </section>

      {/* Protección */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Protección de Datos
        </h2>

        <p className="max-w-3xl mb-4">
          Excel permite proteger la información para evitar modificaciones
          accidentales o no autorizadas.
        </p>

        <div className="border p-6 rounded-xl space-y-3">
          <p className="font-semibold">Opciones de protección:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Proteger una hoja completa.</li>
            <li>Bloquear celdas específicas.</li>
            <li>Establecer contraseña para editar.</li>
          </ul>
        </div>
      </section>

      {/* Cómo proteger hoja */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo proteger una hoja en Excel?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a la pestaña <strong>Revisar</strong>.</li>
            <li>Hacer clic en <strong>Proteger hoja</strong>.</li>
            <li>Elegir qué acciones permitir (editar, seleccionar, etc.).</li>
            <li>Escribir una contraseña (opcional).</li>
            <li>Confirmar la protección.</li>
          </ol>

          <p className="mt-2">
            Una vez protegida la hoja, los usuarios no podrán modificar las celdas bloqueadas.
          </p>
        </div>
      </section>

      {/* Desproteger */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo desproteger una hoja?
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a la pestaña <strong>Revisar</strong>.</li>
            <li>Hacer clic en <strong>Quitar protección de hoja</strong>.</li>
            <li>Ingresar la contraseña si es necesario.</li>
          </ol>
        </div>
      </section>

      {/* Presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Posibilidades de Presentación
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Tablas organizadas.</li>
          <li>Uso de colores y estilos.</li>
          <li>Gráficos (barras, líneas, circular).</li>
          <li>Ajuste de tamaño de columnas y filas.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribe ejemplos de cada tipo de dato: texto, número, fecha y porcentaje.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Aplica formato de moneda y porcentaje a distintos valores.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Protege una hoja de Excel y luego desprotégela.
          </div>

        </div>
      </section>

    </div>
  );
}