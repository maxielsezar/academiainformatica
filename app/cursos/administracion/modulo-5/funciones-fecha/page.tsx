export default function FuncionesFechasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones de Fechas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de fechas permiten trabajar con fechas y horarios
          dentro de una planilla de cálculo. Son muy útiles para organizar
          vencimientos, controlar períodos, registrar operaciones, calcular
          plazos y realizar seguimientos administrativos.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las funciones de fechas?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Son funciones que permiten obtener, analizar y modificar
          información relacionada con fechas. Una planilla de cálculo puede
          realizar operaciones con fechas de manera similar a las operaciones
          con números.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Si una celda contiene la fecha:
          </p>

          <p className="font-mono mt-3">
            15/09/2026
          </p>

          <p className="leading-relaxed mt-4">
            podemos obtener el día, el mes o el año por separado, calcular
            cuántos días transcurrieron desde otra fecha o determinar una
            fecha futura.
          </p>
        </div>
      </section>

      {/* HOY */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          HOY
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>HOY</strong> devuelve la fecha actual del
          sistema.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =HOY()
          </p>

          <p className="leading-relaxed mt-4">
            Esta función resulta útil para generar documentos, controles y
            registros que necesitan mostrar automáticamente la fecha en la
            que se realiza una operación.
          </p>
        </div>
      </section>

      {/* AHORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          AHORA
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>AHORA</strong> devuelve la fecha y la hora
          actuales del sistema.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =AHORA()
          </p>

          <p className="leading-relaxed mt-4">
            Puede utilizarse para registrar el momento en que se genera o
            actualiza determinada información.
          </p>
        </div>
      </section>

      {/* FECHA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          FECHA
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>FECHA</strong> permite construir una fecha a
          partir de un año, un mes y un día.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =FECHA(2026;9;15)
          </p>

          <p className="leading-relaxed mt-4">
            El resultado corresponde al 15 de septiembre de 2026.
          </p>
        </div>
      </section>

      {/* DIA MES AÑO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DIA, MES y AÑO
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Estas funciones permiten obtener por separado cada componente de
          una fecha.
        </p>

        <div className="border p-6 rounded-xl mt-6 space-y-4">
          <p className="font-mono">
            =DIA(A2)
          </p>

          <p className="leading-relaxed">
            Devuelve el día correspondiente a la fecha almacenada en A2.
          </p>

          <p className="font-mono">
            =MES(A2)
          </p>

          <p className="leading-relaxed">
            Devuelve el número del mes.
          </p>

          <p className="font-mono">
            =AÑO(A2)
          </p>

          <p className="leading-relaxed">
            Devuelve el año.
          </p>
        </div>
      </section>

      {/* DIASEM */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DIASEM
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>DIASEM</strong> permite obtener el número
          correspondiente al día de la semana de una fecha.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =DIASEM(A2;2)
          </p>

          <p className="leading-relaxed mt-4">
            El segundo argumento permite establecer cómo se numerarán los
            días de la semana. Con el valor <strong>2</strong>, la semana
            comienza en lunes.
          </p>
        </div>
      </section>

      {/* DIAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DIAS
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>DIAS</strong> permite calcular la cantidad de
          días que existen entre dos fechas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =DIAS(B2;A2)
          </p>

          <p className="leading-relaxed mt-4">
            Si A2 contiene una fecha inicial y B2 una fecha final, la
            función permite determinar la cantidad de días entre ambas.
          </p>
        </div>
      </section>

      {/* RESTA DE FECHAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Restar fechas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          También es posible calcular la diferencia entre dos fechas
          utilizando directamente el operador de resta.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =B2-A2
          </p>

          <p className="leading-relaxed mt-4">
            El resultado representa la cantidad de días entre la fecha
            inicial y la fecha final.
          </p>
        </div>
      </section>

      {/* FECHA.MES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          FECHA.MES
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>FECHA.MES</strong> permite obtener una fecha
          desplazada una determinada cantidad de meses desde una fecha
          inicial.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =FECHA.MES(A2;3)
          </p>

          <p className="leading-relaxed mt-4">
            Si A2 contiene una fecha, el resultado será la fecha que se
            encuentra tres meses después.
          </p>

          <p className="font-mono mt-4">
            =FECHA.MES(A2;-1)
          </p>

          <p className="leading-relaxed mt-4">
            En este caso se obtiene una fecha correspondiente al mes
            anterior.
          </p>
        </div>
      </section>

      {/* FIN.MES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          FIN.MES
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>FIN.MES</strong> permite obtener el último día
          de un mes a partir de una fecha determinada.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =FIN.MES(A2;0)
          </p>

          <p className="leading-relaxed mt-4">
            Con <strong>0</strong> se obtiene el último día del mismo mes
            de la fecha indicada.
          </p>

          <p className="font-mono mt-4">
            =FIN.MES(A2;1)
          </p>

          <p className="leading-relaxed mt-4">
            En este caso se obtiene el último día del mes siguiente.
          </p>
        </div>
      </section>

      {/* DIAS.LAB */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DIAS.LAB
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>DIAS.LAB</strong> permite calcular la cantidad
          de días laborables entre dos fechas, excluyendo normalmente los
          sábados y domingos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =DIAS.LAB(A2;B2)
          </p>

          <p className="leading-relaxed mt-4">
            Es útil para calcular plazos de trabajo, tiempos de respuesta y
            períodos administrativos.
          </p>
        </div>
      </section>

      {/* DIAS.LAB.INTL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DIAS.LAB.INTL
        </h2>

        <p className="leading-relaxed max-w-3xl">
          <strong>DIAS.LAB.INTL</strong> permite calcular días laborables
          estableciendo qué días de la semana deben considerarse como fines
          de semana.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =DIAS.LAB.INTL(A2;B2)
          </p>

          <p className="leading-relaxed mt-4">
            Puede ser útil cuando una organización utiliza jornadas laborales
            diferentes de la semana tradicional.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de fechas tienen numerosas aplicaciones en tareas
          administrativas. Permiten controlar vencimientos, plazos,
          períodos, pagos, entregas y seguimiento de trámites.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo: control de vencimientos
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Documento</th>
                  <th className="border p-3 text-left">Fecha de emisión</th>
                  <th className="border p-3 text-left">Vencimiento</th>
                  <th className="border p-3 text-left">Días restantes</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Factura 001</td>
                  <td className="border p-3">01/09/2026</td>
                  <td className="border p-3">30/09/2026</td>
                  <td className="border p-3 font-mono">
                    =C2-HOY()
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Factura 002</td>
                  <td className="border p-3">05/09/2026</td>
                  <td className="border p-3">05/10/2026</td>
                  <td className="border p-3 font-mono">
                    =C3-HOY()
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            De esta manera se puede conocer automáticamente cuántos días
            faltan para cada vencimiento.
          </p>
        </div>
      </section>

      {/* Fechas y seguimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fechas para el seguimiento de actividades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las fechas también pueden utilizarse para realizar el seguimiento
          de actividades, trámites y tareas pendientes.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =B2-HOY()
          </p>

          <p className="leading-relaxed mt-4">
            Esta fórmula permite calcular cuántos días faltan desde la fecha
            actual hasta una fecha registrada en B2.
          </p>

          <p className="leading-relaxed mt-4">
            Si el resultado es positivo, la fecha todavía no llegó. Si es
            cero, corresponde al día actual. Si es negativo, la fecha ya
            pasó.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Utilizar formatos de fecha claros y consistentes.
          </li>
          <li>
            Evitar escribir fechas como texto cuando se necesite realizar
            cálculos.
          </li>
          <li>
            Verificar que las fechas iniciales y finales sean correctas.
          </li>
          <li>
            Utilizar funciones en lugar de realizar cálculos manuales.
          </li>
          <li>
            Diferenciar fechas de emisión, vencimiento y actualización.
          </li>
          <li>
            Revisar periódicamente los registros con fechas vencidas.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 1: Componentes de una fecha
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con 15 fechas. Utilizar las funciones
              <strong> DIA</strong>, <strong>MES</strong> y
              <strong> AÑO</strong> para obtener cada componente en
              columnas separadas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Cálculo de plazos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con trámites administrativos, fecha de inicio
              y fecha de finalización. Calcular la cantidad de días que duró
              cada trámite utilizando funciones de fechas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Control de vencimientos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 10 documentos y sus fechas de
              vencimiento. Utilizar <strong>HOY</strong> para calcular
              automáticamente cuántos días faltan para cada vencimiento.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Días laborables
            </h3>

            <p className="leading-relaxed">
              Registrar la fecha de inicio y finalización de cinco tareas.
              Utilizar <strong>DIAS.LAB</strong> para calcular la cantidad
              de días laborables utilizados en cada tarea.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Calendario administrativo
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con actividades administrativas, responsables,
              fecha de inicio y fecha de vencimiento. Incorporar funciones
              de fecha para realizar el seguimiento de cada actividad.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una organización necesita controlar sus trámites y documentos
          administrativos. Crear una planilla que contenga al menos 15
          registros con número de trámite, descripción, responsable, fecha
          de inicio, fecha de vencimiento y estado.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Utilizar <strong>HOY</strong>, <strong>DIA</strong>,
          <strong> MES</strong>, <strong>AÑO</strong>,
          <strong> DIAS</strong> y <strong>DIAS.LAB</strong> para obtener
          información sobre los períodos y vencimientos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, ordenar los registros por fecha de vencimiento y
          aplicar filtros para identificar los trámites próximos a vencer,
          los que ya vencieron y los que todavía se encuentran dentro del
          plazo.
        </p>
      </section>

    </div>
  );
}