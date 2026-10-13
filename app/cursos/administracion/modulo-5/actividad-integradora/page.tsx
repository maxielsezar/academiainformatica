export default function ActividadIntegradoraPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividades Integradoras
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad vas a aplicar los conocimientos adquiridos durante
          el módulo para resolver una situación real del ámbito educativo:
          organizar la asistencia de los estudiantes y registrar las
          calificaciones de los cursos mediante planillas de cálculo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El trabajo consiste en crear un libro de cálculo que permita llevar
          el seguimiento de los estudiantes, calcular indicadores, consultar
          información y presentar informes de manera clara y profesional.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la actividad
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Organizar información de estudiantes y cursos.</li>
          <li>Diseñar tablas correctamente estructuradas.</li>
          <li>Utilizar fórmulas y funciones para automatizar cálculos.</li>
          <li>Aplicar funciones lógicas para clasificar resultados.</li>
          <li>Utilizar funciones de fechas y porcentajes.</li>
          <li>Ordenar y filtrar información.</li>
          <li>Crear tablas dinámicas y gráficos.</li>
          <li>Preparar planillas para su impresión y presentación.</li>
        </ul>
      </section>

      {/* Organización del archivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización del libro de cálculo
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Crear un archivo llamado{" "}
          <strong>Gestion_Academica.xlsx</strong>. El libro deberá contener,
          como mínimo, las siguientes hojas:
        </p>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Hoja 1: Estudiantes
            </h3>

            <p className="leading-relaxed">
              Contendrá los datos generales de los estudiantes que participan
              en los cursos.
            </p>

            <p className="font-semibold mt-4 mb-2">
              Campos obligatorios:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Legajo o identificador.</li>
              <li>Apellido y nombre.</li>
              <li>DNI, si corresponde al ejercicio.</li>
              <li>Curso.</li>
              <li>Fecha de inscripción.</li>
              <li>Teléfono o correo electrónico ficticio.</li>
              <li>Estado de inscripción.</li>
            </ul>

            <p className="leading-relaxed mt-4">
              Cargar al menos 20 estudiantes distribuidos en dos o más cursos.
              Utilizar datos ficticios para realizar la actividad.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Hoja 2: Asistencias
            </h3>

            <p className="leading-relaxed">
              Crear una planilla para registrar la asistencia de los
              estudiantes durante las clases.
            </p>

            <p className="font-semibold mt-4 mb-2">
              Estructura sugerida:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-3 text-left">Legajo</th>
                    <th className="border p-3 text-left">Estudiante</th>
                    <th className="border p-3 text-left">Curso</th>
                    <th className="border p-3 text-left">Fecha</th>
                    <th className="border p-3 text-left">Asistencia</th>
                    <th className="border p-3 text-left">Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">001</td>
                    <td className="border p-3">Estudiante A</td>
                    <td className="border p-3">Curso A</td>
                    <td className="border p-3">05/08/2026</td>
                    <td className="border p-3">Presente</td>
                    <td className="border p-3">—</td>
                  </tr>
                  <tr>
                    <td className="border p-3">002</td>
                    <td className="border p-3">Estudiante B</td>
                    <td className="border p-3">Curso A</td>
                    <td className="border p-3">05/08/2026</td>
                    <td className="border p-3">Ausente</td>
                    <td className="border p-3">Avisó previamente</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-semibold mt-4 mb-2">
              Actividades:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Registrar al menos 10 clases por curso.</li>
              <li>Registrar la asistencia de cada estudiante en cada clase.</li>
              <li>Utilizar un criterio uniforme: Presente, Ausente o Tardanza.</li>
              <li>Calcular la cantidad de asistencias de cada estudiante.</li>
              <li>Calcular la cantidad de ausencias.</li>
              <li>Calcular el porcentaje de asistencia.</li>
              <li>Utilizar filtros para consultar un curso o una fecha.</li>
              <li>Aplicar formato condicional para distinguir los estados.</li>
            </ol>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Hoja 3: Notas
            </h3>

            <p className="leading-relaxed">
              Crear una planilla para registrar las calificaciones obtenidas
              por los estudiantes en las diferentes actividades de cada curso.
            </p>

            <p className="font-semibold mt-4 mb-2">
              Estructura sugerida:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-3 text-left">Legajo</th>
                    <th className="border p-3 text-left">Estudiante</th>
                    <th className="border p-3 text-left">Trabajo 1</th>
                    <th className="border p-3 text-left">Trabajo 2</th>
                    <th className="border p-3 text-left">Evaluación</th>
                    <th className="border p-3 text-left">Promedio</th>
                    <th className="border p-3 text-left">Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">001</td>
                    <td className="border p-3">Estudiante A</td>
                    <td className="border p-3">8</td>
                    <td className="border p-3">9</td>
                    <td className="border p-3">7</td>
                    <td className="border p-3">8</td>
                    <td className="border p-3">Aprobado</td>
                  </tr>
                  <tr>
                    <td className="border p-3">002</td>
                    <td className="border p-3">Estudiante B</td>
                    <td className="border p-3">6</td>
                    <td className="border p-3">7</td>
                    <td className="border p-3">5</td>
                    <td className="border p-3">6</td>
                    <td className="border p-3">A revisar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-semibold mt-4 mb-2">
              Actividades:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Registrar al menos tres calificaciones por estudiante.</li>
              <li>Calcular el promedio mediante una fórmula.</li>
              <li>Identificar la nota máxima y la mínima.</li>
              <li>Contar cuántos estudiantes tienen calificaciones registradas.</li>
              <li>Utilizar la función SI para clasificar los resultados.</li>
              <li>Aplicar formato condicional a las calificaciones.</li>
              <li>Filtrar los estudiantes según el resultado.</li>
            </ol>

            <p className="leading-relaxed mt-4">
              Para practicar, se puede establecer una escala de 1 a 10 y
              considerar como criterio del ejercicio que un promedio de 6 o
              más corresponde a “Aprobado”. Este criterio es didáctico y
              deberá adaptarse a la normativa de cada institución.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Hoja 4: Resumen del curso
            </h3>

            <p className="leading-relaxed">
              Esta hoja deberá presentar indicadores generales para facilitar
              el seguimiento de cada curso.
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Cantidad total de estudiantes inscriptos.</li>
              <li>Cantidad de estudiantes con registros de asistencia.</li>
              <li>Promedio general de asistencia.</li>
              <li>Promedio general de calificaciones.</li>
              <li>Cantidad de estudiantes aprobados según el criterio definido.</li>
              <li>Cantidad de estudiantes que requieren seguimiento.</li>
            </ul>

            <p className="leading-relaxed mt-4">
              Incorporar un gráfico que permita comparar los resultados entre
              cursos o visualizar la distribución de las calificaciones.
            </p>
          </div>

        </div>
      </section>

      {/* Fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas y funciones que deben utilizarse
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          En las distintas hojas se deberán aplicar fórmulas y funciones para
          automatizar los cálculos. Los siguientes ejemplos utilizan nombres
          de funciones en español y el separador de argumentos punto y coma.
        </p>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Calcular el promedio
            </h3>

            <pre className="bg-blue-50 text-blue-950 p-4 rounded-lg overflow-x-auto">
              <code>{'=PROMEDIO(C2:E2)'}</code>
            </pre>

            <p className="leading-relaxed mt-3">
              Calcula el promedio de las calificaciones registradas en las
              celdas C2, D2 y E2.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Clasificar el resultado
            </h3>

            <pre className="bg-blue-50 text-blue-950 p-4 rounded-lg overflow-x-auto">
              <code>{'=SI(F2>=6;"Aprobado";"A revisar")'}</code>
            </pre>

            <p className="leading-relaxed mt-3">
              Utiliza el promedio para asignar una categoría según el criterio
              establecido para la actividad.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Contar asistencias
            </h3>

            <pre className="bg-blue-50 text-blue-950 p-4 rounded-lg overflow-x-auto">
              <code>{'=CONTAR.SI(E2:E11;"Presente")'}</code>
            </pre>

            <p className="leading-relaxed mt-3">
              Cuenta cuántas veces aparece el estado “Presente” en el rango
              seleccionado. Adaptar el rango a la estructura de la planilla.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Calcular porcentaje de asistencia
            </h3>

            <pre className="bg-blue-50 text-blue-950 p-4 rounded-lg overflow-x-auto">
              <code>{'=B2/C2'}</code>
            </pre>

            <p className="leading-relaxed mt-3">
              Si B2 contiene la cantidad de asistencias y C2 la cantidad total
              de clases computables, el resultado debe expresarse como
              porcentaje. Definir previamente cómo se contabilizarán las
              tardanzas y las ausencias justificadas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Obtener la calificación máxima
            </h3>

            <pre className="bg-blue-50 text-blue-950 p-4 rounded-lg overflow-x-auto">
              <code>{'=MAX(C2:E2)'}</code>
            </pre>

            <p className="leading-relaxed mt-3">
              Devuelve la calificación más alta dentro del rango seleccionado.
            </p>
          </div>

        </div>
      </section>

      {/* Tablas dinámicas y gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tablas dinámicas y gráficos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para completar el trabajo, utilizar tablas dinámicas y gráficos que
          permitan resumir la información registrada.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Actividades obligatorias
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Crear una tabla dinámica que muestre la cantidad de estudiantes
              por curso.
            </li>
            <li>
              Crear un resumen de las calificaciones por curso.
            </li>
            <li>
              Crear un gráfico de columnas para comparar los promedios de
              los cursos.
            </li>
            <li>
              Crear un gráfico que represente los porcentajes de asistencia.
            </li>
            <li>
              Aplicar filtros para consultar los resultados de un curso
              específico.
            </li>
          </ol>
        </div>
      </section>

      {/* Presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación e impresión
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las planillas deberán estar preparadas para su consulta en pantalla
          y para su impresión o exportación a PDF.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>Aplicar títulos claros y encabezados destacados.</li>
          <li>Ajustar el ancho de las columnas.</li>
          <li>Utilizar formatos apropiados para fechas y porcentajes.</li>
          <li>Aplicar formato condicional para facilitar la lectura.</li>
          <li>Configurar márgenes y orientación de página.</li>
          <li>Revisar la vista previa de impresión.</li>
          <li>Exportar el resumen de cada curso a PDF.</li>
        </ul>
      </section>

      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrega del trabajo
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            El estudiante deberá entregar el archivo{" "}
            <strong>Gestion_Academica.xlsx</strong> con todas las hojas
            solicitadas, las fórmulas funcionando y los datos organizados.
          </p>

          <p className="leading-relaxed mt-4">
            También deberá presentar un archivo PDF con el resumen de los
            cursos, sus indicadores y los gráficos elaborados.
          </p>

          <p className="leading-relaxed mt-4">
            El trabajo deberá demostrar que la planilla permite actualizar
            datos y obtener resultados automáticamente, sin tener que realizar
            todos los cálculos manualmente.
          </p>
        </div>
      </section>

      {/* Criterios de evaluación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Organización y estructura de las hojas.</li>
          <li>Correcta utilización de fórmulas y funciones.</li>
          <li>Exactitud de los cálculos de asistencia y calificaciones.</li>
          <li>Uso adecuado de filtros, tablas dinámicas y gráficos.</li>
          <li>Claridad y presentación visual de la información.</li>
          <li>Configuración de impresión y exportación a PDF.</li>
          <li>Capacidad para explicar los resultados obtenidos.</li>
        </ul>
      </section>

      {/* Desafío final */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador Final
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Imaginá que comenzás a trabajar en una institución de formación
          profesional y te solicitan organizar la información académica de
          varios cursos. La institución necesita conocer quiénes asisten
          regularmente, qué calificaciones obtienen y qué estudiantes
          requieren seguimiento.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Tu tarea será diseñar un sistema de gestión académica utilizando
          únicamente una planilla de cálculo. Deberá permitir registrar
          estudiantes, cargar asistencias, administrar calificaciones,
          calcular indicadores y generar informes para cada curso.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El resultado deberá ser fácil de utilizar, permitir incorporar
          nuevos registros y presentar información confiable para apoyar
          las tareas administrativas de la institución.
        </p>
      </section>

    </div>
  );
}