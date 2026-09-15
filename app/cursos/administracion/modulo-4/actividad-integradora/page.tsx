export default function ActividadIntegradoraPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
          Módulo 4
        </p>

        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad Integradora
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          En esta actividad vas a integrar los conocimientos adquiridos durante
          el módulo para resolver una situación similar a la que podría
          presentarse en una oficina, empresa o institución.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Deberás buscar información en Internet, evaluar los resultados,
          identificar sitios confiables, guardar referencias, analizar
          conexiones de red y aplicar buenas prácticas de seguridad.
        </p>
      </section>

      {/* Situación problemática */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Situación problemática
        </h2>

        <div className="border rounded-xl p-6">
          <p className="leading-relaxed">
            Una pequeña oficina necesita mejorar la forma en que sus empleados
            utilizan Internet. Actualmente cuenta con varias computadoras,
            notebooks, teléfonos celulares y una impresora.
          </p>

          <p className="leading-relaxed mt-4">
            Los empleados realizan búsquedas de información, utilizan correo
            electrónico, descargan archivos, comparten documentos y acceden a
            diferentes servicios de Internet.
          </p>

          <p className="leading-relaxed mt-4">
            El responsable de la oficina solicita elaborar una propuesta que
            permita utilizar Internet de manera eficiente y segura.
          </p>
        </div>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo de la actividad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Elaborar una propuesta de uso de Internet para una oficina,
          integrando búsqueda y evaluación de información, conexiones de red,
          servicios de Internet, intercambio de archivos, correo electrónico y
          medidas de seguridad.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Al finalizar deberás poder:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Realizar búsquedas eficientes en Internet.</li>
            <li>Evaluar y seleccionar información confiable.</li>
            <li>Identificar correctamente una dirección URL.</li>
            <li>Guardar páginas web como referencia.</li>
            <li>Diferenciar Wi-Fi y Ethernet.</li>
            <li>Reconocer la función de un router y un switch.</li>
            <li>Identificar servicios de Internet útiles para una oficina.</li>
            <li>Reconocer riesgos relacionados con archivos y mensajes.</li>
            <li>Aplicar buenas prácticas de seguridad.</li>
          </ul>
        </div>
      </section>

      {/* Parte 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 1: Búsqueda de información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La oficina necesita obtener información sobre seguridad informática
          para capacitar a sus empleados.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Realizá una búsqueda utilizando un motor de búsqueda.
            </li>
            <li>
              Utilizá palabras clave relacionadas con seguridad informática.
            </li>
            <li>
              Realizá una segunda búsqueda utilizando una frase más específica.
            </li>
            <li>
              Aplicá al menos un filtro de búsqueda.
            </li>
            <li>
              Compará los resultados obtenidos.
            </li>
            <li>
              Seleccioná tres fuentes que consideres confiables.
            </li>
          </ol>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Registrar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Palabras clave utilizadas.</li>
            <li>Frase de búsqueda utilizada.</li>
            <li>Filtro aplicado.</li>
            <li>Título de cada página encontrada.</li>
            <li>Dirección URL.</li>
            <li>Motivo por el cual considerás confiable cada fuente.</li>
          </ul>
        </div>
      </section>

      {/* Parte 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 2: Análisis de direcciones de Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Seleccioná una de las páginas encontradas en la actividad anterior y
          analizá su dirección de Internet.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Identificá:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Protocolo utilizado.</li>
            <li>Dominio.</li>
            <li>Extensión del dominio.</li>
            <li>Ruta o recurso solicitado, si corresponde.</li>
            <li>Si utiliza HTTPS.</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Reflexión
          </h3>

          <p className="leading-relaxed">
            Explicá por qué utilizar HTTPS es importante y por qué una conexión
            segura no significa necesariamente que el sitio sea confiable.
          </p>
        </div>
      </section>

      {/* Parte 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 3: Diseño de la red de la oficina
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La oficina cuenta con:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>2 computadoras de escritorio.</li>
          <li>2 notebooks.</li>
          <li>4 teléfonos celulares.</li>
          <li>1 impresora de red.</li>
          <li>1 router.</li>
          <li>1 switch.</li>
          <li>Acceso a Internet.</li>
        </ul>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Decidí qué dispositivos utilizarán Wi-Fi.
            </li>
            <li>
              Decidí qué dispositivos utilizarán Ethernet.
            </li>
            <li>
              Indicá dónde colocarías el router.
            </li>
            <li>
              Indicá qué función cumple el switch.
            </li>
            <li>
              Explicá cómo los dispositivos acceden a Internet.
            </li>
            <li>
              Realizá un esquema de la red.
            </li>
          </ol>
        </div>
      </section>

      {/* Parte 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 4: Servicios de Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Seleccioná los servicios de Internet que podrían ser útiles para el
          funcionamiento de la oficina.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Para cada servicio indicá:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre del servicio.</li>
            <li>Para qué se utilizaría.</li>
            <li>Qué empleados podrían utilizarlo.</li>
            <li>Qué información podría compartirse.</li>
            <li>Qué medidas de seguridad deberían aplicarse.</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Servicios posibles
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Correo electrónico.</li>
            <li>Almacenamiento en la nube.</li>
            <li>Videollamadas.</li>
            <li>Mensajería.</li>
            <li>Formularios online.</li>
            <li>Servicios de búsqueda de información.</li>
          </ul>
        </div>
      </section>

      {/* Parte 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 5: Intercambio de archivos y correo electrónico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un empleado recibe un correo electrónico de una persona externa con
          un archivo adjunto.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Analizá la situación
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              ¿Conocés al remitente?
            </li>
            <li>
              ¿Esperabas recibir el archivo?
            </li>
            <li>
              ¿El nombre del archivo resulta sospechoso?
            </li>
            <li>
              ¿Es necesario descargarlo?
            </li>
            <li>
              ¿Qué deberías hacer antes de abrirlo?
            </li>
            <li>
              ¿Qué información deberías evitar compartir por correo?
            </li>
          </ol>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Redactá una respuesta
          </h3>

          <p className="leading-relaxed">
            Escribí un ejemplo de correo electrónico profesional solicitando
            al remitente que confirme el contenido del archivo antes de
            descargarlo.
          </p>
        </div>
      </section>

      {/* Parte 6 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 6: Identificación de riesgos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Analizá las siguientes situaciones e indicá qué riesgo de seguridad
          podría existir y qué acción debería realizar el empleado.
        </p>

        <div className="border rounded-xl p-6 mt-6 space-y-6">
          <div>
            <h3 className="font-bold text-blue-900">
              Situación A
            </h3>
            <p className="leading-relaxed mt-2">
              El empleado recibe un mensaje que solicita ingresar
              inmediatamente a una página para evitar el bloqueo de su cuenta.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              Situación B
            </h3>
            <p className="leading-relaxed mt-2">
              Una persona descarga un programa desde una página desconocida
              porque promete acelerar la computadora.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              Situación C
            </h3>
            <p className="leading-relaxed mt-2">
              Un empleado conecta su notebook a una red Wi-Fi pública y accede
              a información laboral confidencial.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              Situación D
            </h3>
            <p className="leading-relaxed mt-2">
              Una computadora utiliza durante mucho tiempo un sistema y
              aplicaciones que no reciben actualizaciones.
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Para cada situación indicá:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Riesgo identificado.</li>
            <li>Posibles consecuencias.</li>
            <li>Medida preventiva.</li>
            <li>Qué debería hacer el empleado.</li>
          </ul>
        </div>
      </section>


      {/* Producto final */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Producto final
        </h2>

        <div className="border rounded-xl p-6">
          <p className="leading-relaxed">
            Como resultado de la actividad deberás elaborar un documento
            denominado:
          </p>

          <p className="font-bold text-blue-900 text-lg mt-4">
            “Propuesta de uso seguro de Internet para una oficina”
          </p>

          <h3 className="font-bold text-blue-900 mt-6 mb-4">
            El documento debe contener:
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Introducción.</li>
            <li>Resultados de las búsquedas realizadas.</li>
            <li>Análisis de una dirección URL.</li>
            <li>Esquema de la red de la oficina.</li>
            <li>Explicación de Wi-Fi y Ethernet.</li>
            <li>Función del router y del switch.</li>
            <li>Servicios de Internet seleccionados.</li>
            <li>Medidas para el intercambio seguro de archivos.</li>
            <li>Recomendaciones para el uso del correo electrónico.</li>
            <li>Análisis de situaciones de riesgo.</li>
            <li>Conclusión.</li>
          </ol>
        </div>
      </section>

      {/* Presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación del trabajo
        </h2>

        <div className="border rounded-xl p-6">
          <ul className="list-disc list-inside space-y-3">
            <li>El trabajo puede realizarse individualmente o en parejas.</li>
            <li>
              Utilizar títulos y subtítulos para organizar la información.
            </li>
            <li>
              Incorporar el esquema de red realizado durante la actividad.
            </li>
            <li>
              Incluir las URL de las fuentes utilizadas.
            </li>
            <li>
              Revisar ortografía y redacción antes de entregar.
            </li>
            <li>
              Presentar conclusiones propias a partir de lo aprendido.
            </li>
          </ul>
        </div>
      </section>

      {/* Criterios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border rounded-xl">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-bold text-blue-900">
                  Criterio
                </th>
                <th className="text-left p-4 font-bold text-blue-900">
                  Se evaluará
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Búsqueda de información</td>
                <td className="p-4">
                  Uso adecuado de palabras clave, filtros y fuentes.
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Análisis de información</td>
                <td className="p-4">
                  Capacidad para discriminar y seleccionar resultados.
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Redes</td>
                <td className="p-4">
                  Diferenciación entre Wi-Fi y Ethernet y comprensión del
                  funcionamiento del router y switch.
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Seguridad</td>
                <td className="p-4">
                  Identificación de riesgos y aplicación de medidas preventivas.
                </td>
              </tr>

              <tr>
                <td className="p-4">Presentación</td>
                <td className="p-4">
                  Organización, claridad, redacción y calidad del producto final.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}