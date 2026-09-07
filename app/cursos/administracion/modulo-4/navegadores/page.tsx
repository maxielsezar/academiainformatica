export default function NavegadoresPage() {
  return (
    <main className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Navegadores de Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un navegador de Internet es un programa que permite acceder a
          páginas web y utilizar diferentes servicios disponibles en
          Internet.
          <br /><br />
          A través del navegador podemos consultar información, acceder a
          plataformas educativas, utilizar correo electrónico, realizar
          trámites, descargar archivos, utilizar aplicaciones web y
          comunicarnos con otras personas.
          <br /><br />
          Los navegadores interpretan la información proporcionada por los
          servidores web y la presentan de una manera que el usuario pueda
          visualizar e interactuar con ella.
        </p>
      </section>

      {/* ¿Qué es un navegador? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un navegador?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un navegador, también llamado navegador web o browser, es una
          aplicación informática utilizada para acceder a recursos publicados
          en Internet.
          <br /><br />
          Para acceder a una página, el usuario puede introducir una dirección
          web en la barra de direcciones o utilizar un buscador para localizar
          el sitio que necesita.
        </p>
      </section>

      {/* Navegadores conocidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Algunos navegadores conocidos
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Google Chrome
            </h3>

            <p className="leading-relaxed">
              Navegador desarrollado por Google que permite acceder a sitios
              web y utilizar diferentes servicios y aplicaciones disponibles
              en Internet.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Microsoft Edge
            </h3>

            <p className="leading-relaxed">
              Navegador desarrollado por Microsoft e integrado en los sistemas
              Windows actuales.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Mozilla Firefox
            </h3>

            <p className="leading-relaxed">
              Navegador conocido por sus herramientas de privacidad,
              personalización y navegación web.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Safari
            </h3>

            <p className="leading-relaxed">
              Navegador desarrollado por Apple y utilizado principalmente en
              dispositivos de la compañía.
            </p>
          </div>

        </div>
      </section>

      {/* Elementos principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos principales de un navegador
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Barra de direcciones
            </h3>

            <p className="leading-relaxed">
              Permite introducir la dirección de una página web y también
              realizar búsquedas directamente desde el navegador.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Pestañas
            </h3>

            <p className="leading-relaxed">
              Permiten abrir y mantener varias páginas web dentro de una misma
              ventana del navegador.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Botones de navegación
            </h3>

            <p className="leading-relaxed">
              Permiten volver a la página anterior, avanzar nuevamente,
              actualizar una página y acceder a determinadas opciones de
              navegación.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Marcadores o favoritos
            </h3>

            <p className="leading-relaxed">
              Permiten guardar páginas web para acceder a ellas rápidamente
              en el futuro.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Historial
            </h3>

            <p className="leading-relaxed">
              Registra las páginas visitadas y permite localizar nuevamente
              sitios consultados anteriormente.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Descargas
            </h3>

            <p className="leading-relaxed">
              Permite consultar y administrar los archivos descargados desde
              Internet.
            </p>
          </div>

        </div>
      </section>

      {/* Funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones de los navegadores
        </h2>

        <ul className="list-disc list-inside space-y-3">

          <li>
            Acceder a páginas y sitios web.
          </li>

          <li>
            Realizar búsquedas de información.
          </li>

          <li>
            Abrir varias páginas mediante pestañas.
          </li>

          <li>
            Guardar páginas como favoritos o marcadores.
          </li>

          <li>
            Consultar el historial de navegación.
          </li>

          <li>
            Descargar archivos desde Internet.
          </li>

          <li>
            Administrar diferentes configuraciones de navegación.
          </li>

          <li>
            Utilizar servicios y aplicaciones web.
          </li>

        </ul>
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo navegar por Internet?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para acceder a una página web podemos escribir directamente su
          dirección en la barra de direcciones del navegador.
        </p>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-4">

            <li>
              Abrir el navegador de Internet.
            </li>

            <li>
              Seleccionar la barra de direcciones.
            </li>

            <li>
              Escribir la dirección de la página web.
            </li>

            <li>
              Presionar la tecla Enter.
            </li>

            <li>
              Esperar que el navegador solicite y cargue la página.
            </li>

            <li>
              Utilizar los enlaces y herramientas disponibles en el sitio.
            </li>

          </ol>
        </div>
      </section>

      {/* Navegación mediante buscadores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Navegar utilizando un buscador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando no conocemos la dirección exacta de una página, podemos
          utilizar un motor de búsqueda.
          <br /><br />
          El usuario introduce palabras relacionadas con la información que
          necesita y el buscador devuelve una lista de resultados. A partir de
          esos resultados podemos seleccionar la página que consideremos más
          adecuada.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas al utilizar un navegador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">

            <li>
              Mantener el navegador actualizado.
            </li>

            <li>
              Verificar la dirección de los sitios antes de ingresar
              información personal.
            </li>

            <li>
              Evitar descargar archivos desde sitios desconocidos.
            </li>

            <li>
              No ingresar información confidencial en páginas sospechosas.
            </li>

            <li>
              Utilizar conexiones seguras cuando se intercambia información
              sensible.
            </li>

            <li>
              Cerrar las sesiones de las cuentas utilizadas en computadoras
              compartidas.
            </li>

          </ul>

        </div>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl">

          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Explorando el navegador
          </h3>

          <p className="leading-relaxed max-w-3xl mb-5">
            Abrí el navegador disponible en tu computadora y realizá las
            siguientes actividades:
          </p>

          <ol className="list-decimal list-inside space-y-3">

            <li>
              Abrí una página web escribiendo directamente su dirección.
            </li>

            <li>
              Abrí una segunda página utilizando una nueva pestaña.
            </li>

            <li>
              Volvé a la página anterior utilizando el botón de navegación.
            </li>

            <li>
              Guardá una página como favorito o marcador.
            </li>

            <li>
              Consultá el historial de navegación.
            </li>

            <li>
              Identificá dónde se encuentran las descargas del navegador.
            </li>

          </ol>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          <h2 className="text-xl font-bold text-blue-900 mb-3">
            Para recordar
          </h2>

          <p className="leading-relaxed max-w-3xl">
            El navegador es una de las principales herramientas para acceder a
            Internet. Conocer sus funciones permite realizar búsquedas,
            consultar información, utilizar servicios web y organizar los
            recursos que necesitamos en nuestro trabajo.
            <br /><br />
            En la próxima página estudiaremos con mayor profundidad las
            funciones y herramientas que ofrecen los navegadores.
          </p>

        </div>
      </section>

    </main>
  );
}