export default function MetabuscadoresPage() {
  return (
    <div className="space-y-14">

      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Metabuscadores
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los metabuscadores son herramientas que permiten realizar una
          búsqueda utilizando información proveniente de diferentes motores de
          búsqueda al mismo tiempo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A diferencia de un motor de búsqueda tradicional, un metabuscador no
          depende exclusivamente de su propio índice de páginas. En cambio,
          consulta diferentes fuentes y reúne los resultados para presentarlos
          al usuario.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un metabuscador?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un metabuscador funciona como una herramienta intermediaria entre el
          usuario y diferentes motores de búsqueda. El usuario realiza una
          consulta y el metabuscador la envía a varias fuentes para obtener
          resultados de diferentes lugares.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Ejemplo de funcionamiento
          </h3>

          <div className="space-y-4">

            <p>
              <strong>1. Usuario:</strong> introduce una consulta.
            </p>

            <p>
              <strong>2. Metabuscador:</strong> envía la consulta a diferentes
              fuentes.
            </p>

            <p>
              <strong>3. Motores de búsqueda:</strong> devuelven los resultados
              encontrados.
            </p>

            <p>
              <strong>4. Metabuscador:</strong> reúne y organiza los resultados.
            </p>

            <p>
              <strong>5. Usuario:</strong> analiza los resultados obtenidos.
            </p>

          </div>
        </div>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Motor de búsqueda y metabuscador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Aunque ambos permiten encontrar información en Internet, existen
          diferencias importantes entre ellos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Motor de búsqueda
            </h3>

            <ul className="list-disc list-inside space-y-3">
              <li>Utiliza sus propios sistemas de búsqueda e indexación.</li>
              <li>Organiza información disponible en su propio índice.</li>
              <li>Presenta resultados según sus propios criterios.</li>
              <li>Permite utilizar palabras clave y operadores de búsqueda.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Metabuscador
            </h3>

            <ul className="list-disc list-inside space-y-3">
              <li>Consulta diferentes fuentes de búsqueda.</li>
              <li>Reúne resultados provenientes de distintos servicios.</li>
              <li>Puede ampliar el alcance de una consulta.</li>
              <li>Puede mostrar resultados similares provenientes de varias fuentes.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Funcionamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona un metabuscador?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando realizamos una búsqueda, el metabuscador procesa nuestra
          consulta y obtiene información de diferentes fuentes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              1. Consulta
            </h3>

            <p className="leading-relaxed">
              El usuario introduce las palabras o frases que desea buscar.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              2. Consulta múltiple
            </h3>

            <p className="leading-relaxed">
              La herramienta obtiene resultados desde diferentes fuentes de
              búsqueda.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              3. Presentación
            </h3>

            <p className="leading-relaxed">
              Los resultados son reunidos y presentados para que el usuario
              pueda analizarlos.
            </p>
          </div>

        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de los metabuscadores
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <ul className="list-disc list-inside space-y-4">

            <li>
              Permiten consultar diferentes fuentes desde una misma herramienta.
            </li>

            <li>
              Pueden ampliar la cantidad de información encontrada.
            </li>

            <li>
              Facilitan la comparación de resultados provenientes de diferentes
              fuentes.
            </li>

            <li>
              Pueden ahorrar tiempo cuando necesitamos realizar búsquedas
              exploratorias.
            </li>

            <li>
              Permiten detectar información que puede no aparecer en una única
              búsqueda.
            </li>

          </ul>

        </div>
      </section>

      {/* Desventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desventajas y limitaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los metabuscadores también presentan algunas limitaciones que deben
          tenerse en cuenta al realizar una búsqueda.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">

          <ul className="list-disc list-inside space-y-4">

            <li>
              Pueden presentar resultados repetidos.
            </li>

            <li>
              La forma de ordenar los resultados puede variar.
            </li>

            <li>
              No necesariamente incluyen todas las páginas disponibles en
              Internet.
            </li>

            <li>
              Los resultados dependen de las fuentes consultadas.
            </li>

            <li>
              La información encontrada debe ser evaluada antes de utilizarla.
            </li>

          </ul>

        </div>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de metabuscadores
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes servicios que utilizan el concepto de
          metabúsqueda para reunir información de distintas fuentes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Dogpile
            </h3>

            <p className="leading-relaxed">
              Servicio de búsqueda que reúne resultados provenientes de
              diferentes fuentes.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Startpage
            </h3>

            <p className="leading-relaxed">
              Servicio de búsqueda que ofrece resultados de búsqueda con un
              enfoque orientado a la privacidad.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              MetaGer
            </h3>

            <p className="leading-relaxed">
              Servicio de metabúsqueda que permite consultar diferentes fuentes
              para obtener resultados.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Metacrawler
            </h3>

            <p className="leading-relaxed">
              Servicio que reúne resultados provenientes de distintas fuentes
              de búsqueda.
            </p>
          </div>

        </div>
      </section>

      {/* Cuándo utilizarlo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuándo utilizar un metabuscador?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un metabuscador puede ser especialmente útil cuando necesitamos
          realizar una búsqueda amplia y queremos comparar información
          procedente de diferentes fuentes.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Puede ser útil para:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Realizar una investigación inicial.</li>
            <li>Comparar diferentes resultados.</li>
            <li>Buscar información sobre un tema poco conocido.</li>
            <li>Localizar diferentes fuentes sobre un mismo tema.</li>
            <li>Ampliar una búsqueda realizada previamente.</li>
          </ul>

        </div>
      </section>

      {/* Evaluación de resultados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Evaluar los resultados
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Obtener resultados desde diferentes fuentes no significa que toda la
          información sea correcta. El usuario debe analizar cada resultado
          antes de utilizarlo.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Algunos criterios de evaluación
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Identificar quién publica la información.</li>
            <li>Comprobar la fecha de actualización.</li>
            <li>Comparar diferentes fuentes.</li>
            <li>Verificar que la información responda a la consulta.</li>
            <li>Comprobar la dirección del sitio.</li>
            <li>Evitar utilizar información de origen desconocido.</li>
          </ul>

        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina administrativa, los metabuscadores pueden utilizarse
          como herramienta complementaria para realizar investigaciones,
          localizar proveedores, comparar información, buscar documentación y
          encontrar diferentes fuentes relacionadas con una determinada tarea.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una persona necesita investigar diferentes opciones de proveedores
            de insumos para una oficina. Puede utilizar una herramienta de
            metabúsqueda para ampliar la cantidad de resultados y posteriormente
            comparar los sitios encontrados.
          </p>

          <p className="leading-relaxed mt-4">
            La información obtenida debe ser verificada antes de tomar una
            decisión.
          </p>

        </div>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Comparar un motor de búsqueda con un metabuscador
          </h3>

          <p className="leading-relaxed">
            Elegí un tema relacionado con administración, informática o
            educación.
          </p>

          <p className="leading-relaxed mt-4">
            Realizá la misma búsqueda utilizando un motor de búsqueda y un
            metabuscador.
          </p>

          <p className="font-semibold text-blue-900 mt-5 mb-3">
            Registrá:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>La consulta realizada.</li>
            <li>El motor de búsqueda utilizado.</li>
            <li>El metabuscador utilizado.</li>
            <li>La cantidad aproximada de resultados.</li>
            <li>Los resultados que aparecen en ambos.</li>
            <li>Los resultados que aparecen solamente en uno.</li>
            <li>Cuál de las dos herramientas te resultó más útil.</li>
          </ul>

        </div>
      </section>

      {/* Actividad de análisis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad de análisis
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <p className="leading-relaxed">
            Analizá los siguientes casos y determiná si utilizarías un motor de
            búsqueda o un metabuscador.
          </p>

          <div className="space-y-5 mt-6">

            <div>
              <p className="font-semibold text-blue-900">
                Caso 1
              </p>

              <p className="leading-relaxed">
                Necesitás encontrar rápidamente el sitio oficial de un
                organismo público.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-900">
                Caso 2
              </p>

              <p className="leading-relaxed">
                Necesitás obtener información de diferentes fuentes sobre un
                tema para realizar una investigación.
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-900">
                Caso 3
              </p>

              <p className="leading-relaxed">
                Necesitás encontrar un documento PDF específico dentro de un
                sitio determinado.
              </p>
            </div>

          </div>

          <p className="leading-relaxed mt-6">
            Justificá la elección de la herramienta en cada situación.
          </p>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">

        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-4xl">
          Imaginá que trabajás en una oficina administrativa y recibís el
          pedido de investigar un tema sobre el cual no tenés información
          suficiente.
        </p>

        <p className="leading-relaxed max-w-4xl mt-4">
          Utilizá un motor de búsqueda y un metabuscador para investigar el
          tema. Compará los resultados obtenidos y seleccioná las fuentes que
          consideres más confiables.
        </p>

        <p className="font-semibold text-blue-900 mt-5">
          Elaborá un breve informe indicando las herramientas utilizadas, las
          búsquedas realizadas, las fuentes encontradas y los criterios que
          aplicaste para seleccionar la información.
        </p>

      </section>

    </div>
  );
}