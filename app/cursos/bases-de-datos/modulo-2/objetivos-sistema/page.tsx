export default function ObjetivosSistemaPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Objetivos del sistema
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez analizada la situación y estructurados los procesos del
          sistema, es necesario establecer con claridad qué se espera lograr
          con la solución informática. Los objetivos permiten definir el
          propósito del sistema y orientar las decisiones que se tomarán
          durante su diseño y desarrollo.
        </p>
      </section>

      {/* Qué es un objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un objetivo?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Un objetivo expresa un resultado que se pretende alcanzar mediante
          el desarrollo o implementación de un sistema. Debe estar relacionado
          con una necesidad concreta detectada durante el análisis.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Los objetivos ayudan a establecer una dirección para el proyecto y
          permiten determinar qué funciones deberá ofrecer el sistema para
          resolver el problema identificado.
        </p>
      </section>

      {/* Objetivo general */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo general
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El objetivo general describe de manera amplia el propósito principal
          del sistema. Resume qué se quiere conseguir mediante la solución
          informática.
        </p>

        <div className="border-l-4 border-blue-700 bg-blue-50 p-5 rounded-r-xl max-w-3xl">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Desarrollar un sistema para gestionar las ventas de una pequeña
            empresa, permitiendo registrar clientes, productos y operaciones
            de venta y facilitando la consulta de la información.
          </p>
        </div>
      </section>

      {/* Objetivos específicos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos específicos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Los objetivos específicos descomponen el objetivo general en
          resultados más concretos. Permiten identificar las principales
          funciones y necesidades que deberá contemplar el sistema.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Registrar información
            </h3>
            <p className="leading-relaxed">
              Permitir registrar y mantener los datos necesarios para el
              funcionamiento del sistema.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Consultar información
            </h3>
            <p className="leading-relaxed">
              Facilitar la búsqueda y consulta de los datos almacenados.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actualizar información
            </h3>
            <p className="leading-relaxed">
              Permitir modificar los datos cuando se produzcan cambios en la
              información.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Generar información
            </h3>
            <p className="leading-relaxed">
              Obtener información útil a partir de los datos registrados,
              mediante consultas, listados o informes.
            </p>
          </div>
        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de un buen objetivo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Debe estar relacionado con una necesidad real.</li>
          <li>Debe expresar claramente qué se pretende conseguir.</li>
          <li>Debe ser comprensible para las personas involucradas.</li>
          <li>Debe servir como guía para el desarrollo del sistema.</li>
          <li>Debe poder relacionarse con las funciones que tendrá el sistema.</li>
        </ul>
      </section>

      {/* Del problema al objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Del problema al objetivo
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Los objetivos no se definen de manera aislada. Surgen a partir de
          los problemas y necesidades identificados durante el análisis del
          sistema.
        </p>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              1. Problema
            </h3>
            <p className="leading-relaxed">
              La información de los clientes se encuentra distribuida en
              diferentes archivos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              2. Necesidad
            </h3>
            <p className="leading-relaxed">
              Se necesita centralizar y organizar la información.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              3. Objetivo
            </h3>
            <p className="leading-relaxed">
              Crear un sistema que permita registrar, organizar y consultar
              los datos de los clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Relación con el análisis estructurado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con el análisis estructurado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El análisis estructurado permitió identificar las entradas, procesos,
          almacenamientos y salidas del sistema. A partir de esta información
          se pueden establecer los objetivos que deberá cumplir la solución.
          Estos objetivos servirán posteriormente como base para definir los
          requerimientos del sistema.
        </p>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: sistema de ventas
        </h2>

        <div className="border border-blue-200 rounded-xl overflow-hidden max-w-4xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 p-4 text-left">
                  Elemento
                </th>
                <th className="border border-blue-200 p-4 text-left">
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 p-4 font-semibold">
                  Problema
                </td>
                <td className="border border-blue-200 p-4">
                  Las ventas se registran manualmente y resulta difícil
                  consultar la información.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-4 font-semibold">
                  Necesidad
                </td>
                <td className="border border-blue-200 p-4">
                  Organizar y centralizar la información de las ventas.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-4 font-semibold">
                  Objetivo general
                </td>
                <td className="border border-blue-200 p-4">
                  Desarrollar un sistema para gestionar las ventas.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-4 font-semibold">
                  Objetivos específicos
                </td>
                <td className="border border-blue-200 p-4">
                  Registrar clientes, registrar productos, registrar ventas,
                  consultar información y generar informes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar el propósito
            </h3>
            <p className="leading-relaxed">
              Retomá el sistema analizado en las páginas anteriores y
              redactá en una oración cuál es el propósito principal que
              debería cumplir la solución informática.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Formular el objetivo general
            </h3>
            <p className="leading-relaxed">
              Escribí un objetivo general para el sistema que estás
              desarrollando. El objetivo debe indicar claramente qué se
              pretende lograr.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Definir objetivos específicos
            </h3>
            <p className="leading-relaxed">
              A partir del objetivo general, redactá al menos cinco objetivos
              específicos relacionados con las funciones que debería cumplir
              el sistema.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Relacionar problemas y objetivos
            </h3>
            <p className="leading-relaxed">
              Tomá tres problemas identificados durante el análisis del
              sistema y determiná qué objetivo podría contribuir a resolver
              cada uno.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Revisar los objetivos
            </h3>
            <p className="leading-relaxed">
              Revisá los objetivos definidos y verificá que sean claros,
              concretos y que puedan relacionarse con funciones reales del
              sistema.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Definir los objetivos del sistema
        </h2>

        <div className="border-l-4 border-blue-700 bg-blue-50 p-6 rounded-r-xl max-w-4xl">
          <p className="leading-relaxed mb-4">
            Continuando con el sistema trabajado en las páginas anteriores,
            elaborá el apartado de objetivos del proyecto.
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Describí brevemente el problema que se pretende resolver.</li>
            <li>Indicá la necesidad detectada.</li>
            <li>Redactá un objetivo general.</li>
            <li>Redactá al menos cinco objetivos específicos.</li>
            <li>Relacioná cada objetivo con una necesidad o problema identificado.</li>
          </ol>

          <p className="leading-relaxed mt-5">
            Este documento será utilizado como base para la próxima etapa:
            la definición de los requerimientos del sistema.
          </p>
        </div>
      </section>
    </div>
  );
}