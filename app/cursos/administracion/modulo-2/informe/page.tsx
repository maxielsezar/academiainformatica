
export default function InformePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Informes Administrativos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los informes administrativos son documentos utilizados para
          presentar información de manera clara, ordenada y formal.
          <br /><br />
          Permiten comunicar actividades realizadas, resultados obtenidos,
          situaciones detectadas o información relevante para la toma de
          decisiones dentro de una empresa o institución.
        </p>
      </section>

      {/* ¿Qué es un informe? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Informe?
        </h2>

        <div className="border p-6 rounded-xl">
          Un informe es un documento que reúne y organiza información sobre
          un determinado tema, actividad, situación o proceso.
          <br /><br />
          Su objetivo es presentar los datos de forma estructurada para que
          puedan ser comprendidos, analizados y utilizados por otras personas.
        </div>
      </section>

      {/* Finalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Finalidad de un Informe
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Dependiendo de la situación, un informe puede tener diferentes
          finalidades dentro de una organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Informar sobre actividades realizadas.</li>
            <li>Presentar resultados.</li>
            <li>Registrar una situación.</li>
            <li>Analizar problemas.</li>
            <li>Comunicar avances.</li>
            <li>Presentar conclusiones.</li>
            <li>Proponer mejoras o recomendaciones.</li>
            <li>Facilitar la toma de decisiones.</li>
          </ul>

        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Informes
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Informe de Actividades
            </p>

            Presenta las tareas realizadas durante un período determinado.
            Puede utilizarse para informar sobre el trabajo realizado por un
            empleado, departamento o equipo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Informe de Resultados
            </p>

            Presenta los resultados obtenidos después de realizar una
            actividad, proyecto o proceso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Informe de Situación
            </p>

            Describe el estado actual de una determinada situación dentro de
            una organización.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Informe de Gestión
            </p>

            Reúne información relacionada con la gestión y funcionamiento de
            un área, departamento o institución.
          </div>

        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Informe
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La estructura puede variar según el tipo de informe, pero es
          recomendable organizar la información en secciones claramente
          diferenciadas.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ol className="list-decimal list-inside space-y-3">
            <li>Encabezado o identificación.</li>
            <li>Título.</li>
            <li>Fecha.</li>
            <li>Destinatario.</li>
            <li>Introducción.</li>
            <li>Desarrollo.</li>
            <li>Resultados.</li>
            <li>Conclusión.</li>
            <li>Recomendaciones.</li>
            <li>Firma y datos del responsable.</li>
          </ol>

        </div>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Introducción
        </h2>

        <div className="border p-6 rounded-xl">
          La introducción presenta brevemente el propósito del informe y
          permite al lector conocer cuál es el tema que se desarrollará.
          <br /><br />
          Debe ser clara y no incluir información innecesaria.
        </div>
      </section>

      {/* Desarrollo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desarrollo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El desarrollo es la parte principal del informe. En esta sección se
          presenta la información necesaria para explicar el tema.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          Puede incluir:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Descripción de actividades.</li>
            <li>Datos numéricos.</li>
            <li>Tablas.</li>
            <li>Gráficos.</li>
            <li>Resultados.</li>
            <li>Problemas encontrados.</li>
            <li>Información complementaria.</li>
          </ul>

        </div>
      </section>

      {/* Resultados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación de Resultados
        </h2>

        <div className="border p-6 rounded-xl">
          Los resultados permiten mostrar qué se obtuvo a partir de las
          actividades o procesos analizados.
          <br /><br />
          Cuando se trabaja con datos numéricos, las tablas y gráficos pueden
          facilitar su comprensión y comparación.
        </div>
      </section>

      {/* Tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tablas permiten organizar información de manera estructurada y
          facilitan la comparación de datos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Actividad
                </th>
                <th className="border p-3 text-left">
                  Estado
                </th>
                <th className="border p-3 text-left">
                  Resultado
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Organización de archivos
                </td>
                <td className="border p-3">
                  Finalizada
                </td>
                <td className="border p-3">
                  Documentación organizada
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Actualización de registros
                </td>
                <td className="border p-3">
                  Finalizada
                </td>
                <td className="border p-3">
                  Registros actualizados
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Elaboración de documentos
                </td>
                <td className="border p-3">
                  En proceso
                </td>
                <td className="border p-3">
                  Avance parcial
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* Conclusión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conclusión
        </h2>

        <div className="border p-6 rounded-xl">
          La conclusión resume los aspectos más importantes presentados en
          el informe.
          <br /><br />
          Debe permitir al lector identificar rápidamente los principales
          resultados o ideas obtenidas a partir de la información desarrollada.
        </div>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones
        </h2>

        <div className="border p-6 rounded-xl">
          Cuando el informe lo requiere, se pueden incorporar recomendaciones
          destinadas a mejorar una situación o solucionar problemas detectados.
          <br /><br />
          Las recomendaciones deben estar relacionadas con la información
          presentada y ser claras y concretas.
        </div>
      </section>

      {/* Presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación del Informe
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La presentación visual es importante porque permite facilitar la
          lectura y transmitir una imagen profesional.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar títulos y subtítulos.</li>
            <li>Aplicar márgenes adecuados.</li>
            <li>Utilizar una fuente fácil de leer.</li>
            <li>Organizar correctamente los párrafos.</li>
            <li>Utilizar tablas cuando sean necesarias.</li>
            <li>Agregar encabezados y pies de página.</li>
            <li>Numerar las páginas.</li>
            <li>Revisar la ortografía y presentación.</li>
          </ul>

        </div>
      </section>

      {/* Informe digital */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Informes Digitales
        </h2>

        <div className="border p-6 rounded-xl">
          Los informes administrativos pueden elaborarse mediante
          procesadores de texto y almacenarse digitalmente.
          <br /><br />
          Una vez finalizado el documento puede guardarse en formato editable
          para futuras modificaciones y exportarse a PDF para compartirlo o
          presentarlo.
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Informe Administrativo
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="text-center font-bold text-lg mb-6">
            INFORME DE ACTIVIDADES ADMINISTRATIVAS
          </p>

          <p>
            <strong>Empresa:</strong> Empresa Informática S.A.
          </p>

          <p className="mt-2">
            <strong>Departamento:</strong> Administración
          </p>

          <p className="mt-2">
            <strong>Período:</strong> Agosto 2026
          </p>

          <br />

          <p className="font-semibold mb-2">
            Introducción
          </p>

          Durante el período indicado se realizaron diferentes actividades
          relacionadas con la organización de documentación y actualización
          de registros administrativos.

          <br /><br />

          <p className="font-semibold mb-2">
            Desarrollo
          </p>

          Entre las principales actividades realizadas se encuentran la
          organización de archivos, actualización de registros y elaboración
          de documentación administrativa.

          <br /><br />

          <p className="font-semibold mb-2">
            Resultados
          </p>

          Se logró organizar la documentación correspondiente al período y
          actualizar los registros administrativos.

          <br /><br />

          <p className="font-semibold mb-2">
            Conclusión
          </p>

          Las actividades previstas fueron realizadas satisfactoriamente.
          Se recomienda continuar con la organización periódica de la
          documentación.

          <br /><br />

          <p className="font-semibold mb-2">
            Responsable
          </p>

          Departamento Administrativo

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Definir claramente el objetivo del informe.</li>
          <li>Organizar la información antes de comenzar a redactar.</li>
          <li>Utilizar títulos y subtítulos.</li>
          <li>Presentar los datos de manera clara.</li>
          <li>Utilizar tablas y gráficos cuando sean útiles.</li>
          <li>Evitar información innecesaria.</li>
          <li>Revisar ortografía y redacción.</li>
          <li>Utilizar un formato profesional.</li>
          <li>Guardar una copia editable y una versión PDF.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Crear un informe sobre las actividades realizadas durante una
            semana en una empresa ficticia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Incorporar una tabla para organizar los resultados obtenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Agregar encabezado, pie de página y numeración de páginas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Exportar el informe terminado a formato PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>informe administrativo completo</strong> para una
          empresa ficticia.

          <br /><br />

          El informe deberá incluir:

          <br /><br />

          ✔ Nombre de la empresa. <br />
          ✔ Título del informe. <br />
          ✔ Fecha y período analizado. <br />
          ✔ Introducción. <br />
          ✔ Desarrollo. <br />
          ✔ Una tabla con información. <br />
          ✔ Resultados. <br />
          ✔ Conclusión. <br />
          ✔ Recomendaciones. <br />
          ✔ Encabezado y pie de página. <br />
          ✔ Numeración de páginas. <br />
          ✔ Formato profesional. <br />
          ✔ Versión editable y versión PDF.

          <br /><br />

          El objetivo es aplicar las herramientas de procesamiento de texto
          aprendidas durante el módulo para crear un documento administrativo
          completo, organizado y listo para ser presentado.
        </div>
      </section>

    </div>
  );
}
