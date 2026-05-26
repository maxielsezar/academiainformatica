export default function MacrosExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Macros en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las macros permiten automatizar tareas repetitivas en Excel mediante
          la grabación de acciones. Son muy utilizadas para ahorrar tiempo,
          reducir errores y mejorar la productividad en trabajos administrativos
          y empresariales.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender qué son las macros, cómo grabarlas y cómo utilizarlas para
          automatizar tareas en Excel.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          ¿Qué es una Macro?
        </h2>

        <p className="max-w-3xl">
          Una macro es una secuencia de acciones grabadas en Excel que luego
          pueden ejecutarse automáticamente. Permite repetir tareas sin tener
          que hacer cada paso manualmente.
        </p>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          ¿Para qué sirven las Macros?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Aplicar formatos automáticamente.</li>
          <li>Crear reportes repetitivos.</li>
          <li>Ordenar y filtrar datos rápidamente.</li>
          <li>Automatizar cálculos.</li>
          <li>Reducir tiempo de trabajo.</li>
        </ul>
      </section>

      {/* Habilitar */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Habilitar la pestaña Desarrollador
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a <strong>Archivo</strong>.</li>
            <li>Entrar en <strong>Opciones</strong>.</li>
            <li>Seleccionar <strong>Personalizar cinta de opciones</strong>.</li>
            <li>Marcar la opción <strong>Desarrollador</strong>.</li>
            <li>Presionar <strong>Aceptar</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Grabar */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          ¿Cómo grabar una Macro?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a la pestaña <strong>Desarrollador</strong>.</li>
            <li>Hacer clic en <strong>Grabar Macro</strong>.</li>
            <li>Escribir un nombre para la macro.</li>
            <li>Realizar las acciones que se desean automatizar.</li>
            <li>Presionar <strong>Detener grabación</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Ejemplo Práctico
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Crear una macro que:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Pinte los encabezados de color verde.</li>
            <li>Aplique negrita.</li>
            <li>Centre el texto.</li>
            <li>Agregue bordes a la tabla.</li>
          </ul>
        </div>
      </section>

      {/* Ejecutar */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          ¿Cómo ejecutar una Macro?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a <strong>Desarrollador</strong>.</li>
            <li>Seleccionar <strong>Macros</strong>.</li>
            <li>Elegir la macro deseada.</li>
            <li>Hacer clic en <strong>Ejecutar</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Guardado */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Guardar Archivos con Macros
        </h2>

        <p className="max-w-3xl">
          Los archivos que contienen macros deben guardarse con el formato:
        </p>

        <div className="border p-6 rounded-xl mt-4">
          <p className="font-semibold">
            Libro de Excel habilitado para macros (*.xlsm)
          </p>
        </div>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Seguridad de las Macros
        </h2>

        <p className="max-w-3xl">
          Las macros pueden ejecutar acciones automáticas, por lo tanto es
          importante habilitar únicamente macros de archivos confiables.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Ventajas de Utilizar Macros
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Ahorro de tiempo.</li>
          <li>Automatización de tareas repetitivas.</li>
          <li>Mayor productividad.</li>
          <li>Menor posibilidad de errores.</li>
          <li>Procesamiento rápido de información.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Habilita la pestaña Desarrollador.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Crea una tabla con datos de alumnos o ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Graba una macro que aplique formato automático a la tabla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Ejecuta la macro varias veces para comprobar su funcionamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 5</p>
            Guarda el archivo como libro habilitado para macros (*.xlsm).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Comprender cómo automatizar tareas utilizando macros en Excel.
          </div>

        </div>
      </section>

    </div>
  );
}