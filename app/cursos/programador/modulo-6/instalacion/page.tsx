
export default function InstalacionPruebasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Instalación y Pruebas del Sistema
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez desarrollado y documentado un sistema, es necesario
          instalarlo en el entorno donde será utilizado y comprobar que
          funciona correctamente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          La instalación permite preparar el equipo y configurar todos los
          componentes necesarios para ejecutar la aplicación. Las pruebas,
          por otra parte, permiten verificar que el sistema cumple con los
          requisitos definidos y detectar posibles errores antes de su
          utilización.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Instalar correctamente la aplicación.</li>
          <li>Configurar el entorno de ejecución.</li>
          <li>Verificar que todos los componentes necesarios estén disponibles.</li>
          <li>Comprobar el funcionamiento de las principales funcionalidades.</li>
          <li>Detectar errores antes de entregar el sistema.</li>
          <li>Registrar los resultados de las pruebas.</li>
          <li>Garantizar que el sistema cumpla con los requisitos establecidos.</li>
        </ul>
      </section>

      {/* Proceso general */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proceso de instalación y pruebas
        </h2>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl">
          <div className=" border border-blue-200 rounded-xl p-5">
            <div className="text-3xl font-bold text-blue-800 mb-3">1</div>
            <h3 className="font-semibold text-blue-900">
              Preparar
            </h3>
            <p className="text-sm mt-2">
              Verificar los requisitos del equipo.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <div className="text-3xl font-bold text-blue-800 mb-3">2</div>
            <h3 className="font-semibold text-blue-900">
              Instalar
            </h3>
            <p className="text-sm mt-2">
              Ejecutar el instalador y configurar la aplicación.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <div className="text-3xl font-bold text-blue-800 mb-3">3</div>
            <h3 className="font-semibold text-blue-900">
              Configurar
            </h3>
            <p className="text-sm mt-2">
              Preparar la base de datos y otros recursos.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <div className="text-3xl font-bold text-blue-800 mb-3">4</div>
            <h3 className="font-semibold text-blue-900">
              Probar
            </h3>
            <p className="text-sm mt-2">
              Ejecutar las pruebas y registrar los resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Requisitos previos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos previos a la instalación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de comenzar la instalación es necesario verificar que el
          equipo cumpla con los requisitos establecidos para ejecutar la
          aplicación.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Lista de comprobación
          </h3>

          <ul className="space-y-3">
            <li>☐ Sistema operativo compatible.</li>
            <li>☐ Espacio disponible en disco.</li>
            <li>☐ Memoria RAM suficiente.</li>
            <li>☐ Permisos necesarios para instalar el programa.</li>
            <li>☐ Archivos del instalador disponibles.</li>
            <li>☐ Base de datos disponible, si corresponde.</li>
            <li>☐ Configuración de red, si la aplicación la requiere.</li>
          </ul>
        </div>
      </section>

      {/* Instalación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Instalación de la aplicación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El procedimiento de instalación debe estar documentado de forma
          clara para que otra persona pueda instalar el sistema sin
          necesidad de conocer cómo fue desarrollado.
        </p>

        <div className="space-y-5 mt-6 max-w-4xl">

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-semibold text-blue-900">
              Paso 1: Obtener el instalador
            </h3>
            <p className="mt-2">
              Descargar o copiar el instalador de la aplicación en el equipo
              donde será instalada.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-semibold text-blue-900">
              Paso 2: Ejecutar el instalador
            </h3>
            <p className="mt-2">
              Abrir el archivo de instalación y seguir las instrucciones
              mostradas por el asistente.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-semibold text-blue-900">
              Paso 3: Seleccionar la ubicación
            </h3>
            <p className="mt-2">
              Elegir la carpeta donde se instalará la aplicación, si el
              instalador permite modificarla.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-semibold text-blue-900">
              Paso 4: Completar la instalación
            </h3>
            <p className="mt-2">
              Esperar a que finalice el proceso y comprobar que no se hayan
              producido errores.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-semibold text-blue-900">
              Paso 5: Ejecutar la aplicación
            </h3>
            <p className="mt-2">
              Iniciar el programa desde el acceso directo o desde la carpeta
              donde fue instalado.
            </p>
          </div>

        </div>
      </section>

      {/* Configuración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración posterior
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunas aplicaciones requieren configuraciones adicionales después
          de la instalación. Estas configuraciones deben estar detalladas en
          la documentación técnica y en el manual de instalación.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="font-semibold text-blue-900 mb-4">
            Ejemplo: sistema de ventas
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Configurar la ubicación de la base de datos.</li>
            <li>Verificar la conexión.</li>
            <li>Crear las tablas necesarias.</li>
            <li>Cargar datos iniciales, si corresponde.</li>
            <li>Configurar usuarios y permisos.</li>
            <li>Realizar una prueba de conexión.</li>
          </ul>
        </div>
      </section>

      {/* Qué son las pruebas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las pruebas de software?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las pruebas de software son actividades realizadas para comprobar
          que una aplicación funciona de acuerdo con los requisitos
          establecidos y para identificar errores o comportamientos
          inesperados.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900">
            Importante
          </p>

          <p className="mt-2 leading-relaxed">
            Probar un sistema no significa solamente comprobar que se inicia.
            También es necesario verificar que las funcionalidades produzcan
            los resultados esperados.
          </p>
        </div>
      </section>

      {/* Tipos de pruebas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de pruebas
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pruebas unitarias
            </h3>

            <p>
              Comprueban el funcionamiento de una unidad pequeña del
              programa, como un método o una clase.
            </p>

            <div className=" rounded-lg p-4 mt-4 text-sm">
              Ejemplo: comprobar que el método calcularTotal()
              devuelve el resultado correcto.
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pruebas de integración
            </h3>

            <p>
              Comprueban que diferentes componentes puedan trabajar
              correctamente en conjunto.
            </p>

            <div className=" rounded-lg p-4 mt-4 text-sm">
              Ejemplo: comprobar la comunicación entre JavaFX,
              el servicio y la base de datos.
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pruebas funcionales
            </h3>

            <p>
              Verifican que las funcionalidades del sistema cumplan con
              los requisitos definidos.
            </p>

            <div className="rounded-lg p-4 mt-4 text-sm">
              Ejemplo: registrar una venta y comprobar que queda
              almacenada correctamente.
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pruebas de aceptación
            </h3>

            <p>
              Permiten comprobar que el sistema satisface las necesidades
              del usuario y los objetivos establecidos.
            </p>

            <div className=" rounded-lg p-4 mt-4 text-sm">
              Ejemplo: un usuario verifica que puede realizar una venta
              siguiendo el procedimiento habitual.
            </div>
          </div>

        </div>
      </section>

      {/* Casos de prueba */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Casos de prueba
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un caso de prueba describe una situación concreta que se desea
          verificar. Debe indicar qué se va a probar, qué datos se utilizarán
          y cuál es el resultado esperado.
        </p>

        <div className="overflow-x-auto mt-6 max-w-5xl">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-4 text-left">
                  Campo
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  ID
                </td>
                <td className="border border-gray-300 p-4">
                  CP-001
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  Funcionalidad
                </td>
                <td className="border border-gray-300 p-4">
                  Registrar venta
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  Precondición
                </td>
                <td className="border border-gray-300 p-4">
                  El usuario está registrado y existe un producto.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  Acción
                </td>
                <td className="border border-gray-300 p-4">
                  Registrar una venta con un producto.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  Resultado esperado
                </td>
                <td className="border border-gray-300 p-4">
                  La venta queda almacenada y el stock se actualiza.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  Resultado obtenido
                </td>
                <td className="border border-gray-300 p-4">
                  Se completa correctamente.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  Estado
                </td>
                <td className="border border-gray-300 p-4">
                  APROBADO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pruebas positivas y negativas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pruebas positivas y negativas
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Prueba positiva
            </h3>

            <p>
              Utiliza datos válidos para comprobar que el sistema funciona
              correctamente en condiciones normales.
            </p>

            <p className="mt-4 text-sm">
              Ejemplo: registrar una venta utilizando un producto existente
              y una cantidad disponible.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Prueba negativa
            </h3>

            <p>
              Utiliza datos inválidos o situaciones excepcionales para
              comprobar que el sistema maneja correctamente los errores.
            </p>

            <p className="mt-4 text-sm">
              Ejemplo: intentar registrar una venta con una cantidad mayor
              al stock disponible.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de plan de pruebas
        </h2>

        <div className=" border rounded-xl p-6 max-w-5xl">
          <div className="space-y-4">

            <div>
              <p className="font-semibold text-blue-900">
                CP-001 — Inicio de sesión
              </p>
              <p className="text-sm mt-1">
                Verificar que un usuario pueda iniciar sesión con
                credenciales válidas.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-900">
                CP-002 — Producto inexistente
              </p>
              <p className="text-sm mt-1">
                Verificar que el sistema informe correctamente cuando
                se busca un producto que no existe.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-900">
                CP-003 — Stock insuficiente
              </p>
              <p className="text-sm mt-1">
                Verificar que no se permita vender una cantidad superior
                al stock disponible.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-900">
                CP-004 — Registrar venta
              </p>
              <p className="text-sm mt-1">
                Verificar que una venta válida se almacene correctamente.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-900">
                CP-005 — Actualización de stock
              </p>
              <p className="text-sm mt-1">
                Verificar que el stock se actualice después de confirmar
                una venta.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Registro de errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Registro de errores
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una prueba falla, es importante registrar el problema
          encontrado. Esto facilita su análisis, corrección y posterior
          verificación.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="font-semibold text-blue-900 mb-4">
            Información recomendada
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Identificador del error.</li>
            <li>Fecha en la que fue detectado.</li>
            <li>Funcionalidad afectada.</li>
            <li>Pasos para reproducirlo.</li>
            <li>Resultado esperado.</li>
            <li>Resultado obtenido.</li>
            <li>Capturas de pantalla, cuando sean necesarias.</li>
            <li>Estado de la corrección.</li>
          </ul>
        </div>
      </section>

      {/* Repetición de pruebas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Corrección y repetición de pruebas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando se encuentra un error, el desarrollador debe corregirlo y
          volver a ejecutar la prueba correspondiente.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-4xl">
          <pre className="text-sm leading-relaxed">
{`Ejecutar prueba
      ↓
¿Funciona correctamente?
   /          \\
 Sí            No
 |              |
 v              v
Aprobar      Registrar error
                |
                v
             Corregir
                |
                v
           Repetir prueba`}
          </pre>
        </div>
      </section>

      {/* Criterios de finalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios para finalizar las pruebas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de entregar una aplicación es necesario establecer criterios
          que permitan determinar cuándo el sistema está listo para ser
          utilizado.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-5">
          <li>Las funcionalidades principales fueron probadas.</li>
          <li>Los casos de prueba críticos fueron aprobados.</li>
          <li>Los errores importantes fueron corregidos.</li>
          <li>La instalación se realizó correctamente.</li>
          <li>La conexión con la base de datos funciona.</li>
          <li>La documentación está actualizada.</li>
          <li>El usuario puede ejecutar las operaciones principales.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className=" border border-blue-200 rounded-xl p-6 max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Preparar la instalación y plan de pruebas
          </h3>

          <p className="leading-relaxed">
            Para el sistema de ventas desarrollado durante el curso,
            elaborar un documento que permita instalar y verificar el
            funcionamiento de la aplicación.
          </p>

          <p className="font-semibold mt-5 mb-3">
            El documento debe incluir:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Requisitos del sistema.</li>
            <li>Pasos de instalación.</li>
            <li>Configuración necesaria.</li>
            <li>Procedimiento para iniciar la aplicación.</li>
            <li>Al menos cinco casos de prueba.</li>
            <li>Pruebas positivas y negativas.</li>
            <li>Resultados obtenidos.</li>
            <li>Errores encontrados y correcciones realizadas.</li>
          </ul>

          <p className="mt-5 leading-relaxed">
            Finalmente, comprobar que otra persona pueda instalar y ejecutar
            el sistema utilizando únicamente la documentación elaborada.
          </p>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <div className="bg-blue-900 text-white rounded-xl p-6 max-w-4xl">
          <p className="leading-relaxed">
            La instalación permite preparar el entorno necesario para
            ejecutar una aplicación, mientras que las pruebas permiten
            verificar que el sistema funciona de acuerdo con los requisitos
            establecidos.
          </p>

          <p className="leading-relaxed mt-4">
            Una correcta documentación de instalación y pruebas facilita la
            entrega del software, reduce problemas durante la implementación
            y permite garantizar que el sistema pueda ser utilizado y
            mantenido correctamente.
          </p>
        </div>
      </section>

    </div>
  );
}
