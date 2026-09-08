export default function DireccionesInternetPage() {
  return (
    <div className="space-y-14">

      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Direcciones de Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Cada recurso disponible en Internet posee una dirección que permite
          identificarlo y acceder a él. Estas direcciones se conocen como
          <strong> URL (Uniform Resource Locator)</strong> y son utilizadas para
          ingresar a páginas web, documentos, imágenes, servicios y otros
          recursos disponibles en Internet.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Comprender cómo funcionan las direcciones de Internet permite navegar
          de manera más eficiente, reconocer sitios legítimos y utilizar
          correctamente los recursos disponibles en la Web.
        </p>
      </section>

      {/* Qué es una URL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una URL?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una URL es una dirección utilizada para localizar un recurso en
          Internet. Cuando escribimos una dirección en la barra del navegador,
          este utiliza la información de la URL para encontrar el servidor y
          solicitar el recurso correspondiente.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-3">
            Ejemplo:
          </p>

          <p className="font-mono text-lg break-all">
            https://www.ejemplo.com/documentos/informe.pdf
          </p>
        </div>
      </section>

      {/* Partes de una URL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Partes de una dirección de Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una dirección de Internet puede estar formada por diferentes partes.
          Cada una cumple una función específica.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <p className="font-mono text-lg break-all mb-6">
            https://www.ejemplo.com/documentos/informe.pdf
          </p>

          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>https://</strong>: indica el protocolo utilizado para
              establecer la comunicación.
            </li>

            <li>
              <strong>www</strong>: subdominio utilizado frecuentemente para
              identificar un servicio web.
            </li>

            <li>
              <strong>ejemplo.com</strong>: corresponde al nombre de dominio
              del sitio.
            </li>

            <li>
              <strong>/documentos/</strong>: indica una ubicación o carpeta
              dentro del sitio.
            </li>

            <li>
              <strong>informe.pdf</strong>: identifica el recurso específico
              que se desea consultar.
            </li>
          </ul>
        </div>
      </section>

      {/* Protocolo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Protocolos de Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El protocolo indica cómo se realizará la comunicación entre el
          navegador y el servidor. En la navegación web se utilizan
          principalmente <strong>HTTP</strong> y <strong>HTTPS</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              HTTP
            </h3>

            <p className="leading-relaxed">
              Es un protocolo utilizado para la transferencia de información
              entre un navegador y un servidor web.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              HTTPS
            </h3>

            <p className="leading-relaxed">
              Es la versión segura de HTTP. Utiliza mecanismos de cifrado para
              proteger la comunicación entre el navegador y el sitio web.
            </p>
          </div>

        </div>
      </section>

      {/* Dominio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Dominios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El dominio permite identificar un sitio o servicio en Internet.
          Generalmente está compuesto por un nombre y una extensión.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-3xl">
          <p className="font-mono text-lg mb-4">
            www.ejemplo.com.ar
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>ejemplo</strong>: nombre del dominio.
            </li>

            <li>
              <strong>.com</strong>: indica un tipo de dominio.
            </li>

            <li>
              <strong>.ar</strong>: identifica el país, en este caso
              Argentina.
            </li>
          </ul>
        </div>
      </section>

      {/* Dominios frecuentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Extensiones de dominio frecuentes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">.com</h3>
            <p>
              Utilizado principalmente por sitios comerciales y organizaciones
              de distintos tipos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">.org</h3>
            <p>
              Frecuentemente utilizado por organizaciones e instituciones.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">.edu</h3>
            <p>
              Asociado principalmente con instituciones educativas en algunos
              sistemas de dominios.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">.gov</h3>
            <p>
              Utilizado en determinados sistemas para identificar sitios
              gubernamentales.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">.ar</h3>
            <p>
              Corresponde al dominio territorial de Argentina.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">.net</h3>
            <p>
              Originalmente asociado a servicios relacionados con redes,
              aunque actualmente tiene un uso más amplio.
            </p>
          </div>

        </div>
      </section>

      {/* Rutas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Rutas dentro de un sitio web
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una URL no solamente permite acceder al sitio principal. También
          puede indicar una ubicación específica dentro del sitio.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <p className="font-mono break-all mb-4">
            https://www.ejemplo.com/administracion/documentos/informes
          </p>

          <p className="leading-relaxed">
            En este caso, la dirección permite acceder directamente a una
            sección específica del sitio en lugar de comenzar desde la página
            principal.
          </p>
        </div>
      </section>

      {/* Enlaces */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Enlaces o hipervínculos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un enlace o hipervínculo permite acceder a otra página, documento o
          recurso mediante un clic. Los enlaces contienen una dirección de
          Internet que el navegador utiliza para localizar el recurso.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los hipervínculos son fundamentales para navegar por Internet porque
          permiten desplazarse rápidamente entre diferentes recursos.
        </p>
      </section>

      {/* Reconocer direcciones confiables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reconocer una dirección de Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de ingresar información personal o realizar una operación
          importante, es conveniente observar cuidadosamente la dirección del
          sitio.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Elementos a observar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Comprobar que el dominio corresponda al sitio esperado.</li>
            <li>Observar si la conexión utiliza HTTPS.</li>
            <li>Revisar que no existan errores o modificaciones extrañas en el dominio.</li>
            <li>No ingresar datos personales en sitios desconocidos.</li>
            <li>Prestar atención a los enlaces recibidos por correo electrónico.</li>
          </ul>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En tareas administrativas es habitual utilizar diferentes
          direcciones de Internet para acceder a sistemas de gestión,
          plataformas institucionales, servicios bancarios, organismos
          públicos, correo electrónico y herramientas de trabajo.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Ejemplo de situación laboral
          </h3>

          <p className="leading-relaxed">
            Un empleado recibe un mensaje con un enlace para ingresar a una
            plataforma institucional. Antes de introducir sus credenciales,
            debe comprobar que la dirección corresponde realmente al sitio
            esperado y que la conexión es segura.
          </p>
        </div>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Analizar direcciones de Internet
          </h3>

          <p className="leading-relaxed mb-4">
            Buscá cinco sitios web relacionados con educación, organismos
            públicos, noticias, servicios o trámites.
          </p>

          <p className="font-semibold text-blue-900 mb-3">
            Para cada sitio registrá:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre del sitio.</li>
            <li>Dirección URL.</li>
            <li>Protocolo utilizado.</li>
            <li>Dominio principal.</li>
            <li>Extensión del dominio.</li>
            <li>Tipo de servicio que ofrece.</li>
          </ul>

          <p className="leading-relaxed mt-5">
            Finalmente, indicá cuáles de las direcciones considerás confiables
            y explicá qué elementos utilizaste para tomar esa decisión.
          </p>
        </div>
      </section>

      {/* Actividad de análisis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad de análisis
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">
          <p className="leading-relaxed mb-4">
            Analizá las siguientes direcciones:
          </p>

          <ul className="space-y-4 font-mono break-all">
            <li>
              https://www.argentina.gob.ar
            </li>

            <li>
              https://www.ejemplo.com/documentos/informe.pdf
            </li>

            <li>
              http://sitio-ejemplo.com
            </li>
          </ul>

          <p className="leading-relaxed mt-6">
            Para cada una identificá el protocolo, el dominio, la extensión y
            la ruta del recurso cuando corresponda.
          </p>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-4xl">
          Imaginá que trabajás en una oficina administrativa y recibís un
          correo electrónico que contiene un enlace para ingresar a un sistema
          de gestión.
        </p>

        <p className="leading-relaxed max-w-4xl mt-4">
          Antes de acceder, elaborá una lista de los elementos que deberías
          revisar en la dirección de Internet para determinar si el enlace es
          confiable y seguro.
        </p>

        <p className="leading-relaxed max-w-4xl mt-4 font-semibold">
          Explicá por qué cada uno de esos elementos es importante.
        </p>
      </section>

    </div>
  );
}