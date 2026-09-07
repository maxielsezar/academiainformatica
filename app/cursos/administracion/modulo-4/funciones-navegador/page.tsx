export default function NavegadorPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones de un Navegador Web
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un navegador web es un programa que permite acceder a sitios y
          servicios disponibles en Internet. Se utiliza para consultar
          información, visitar páginas web, realizar búsquedas, utilizar
          aplicaciones en línea y descargar diferentes tipos de archivos.
          <br /><br />
          Los navegadores también ofrecen herramientas para organizar las
          páginas visitadas, guardar sitios favoritos, administrar pestañas,
          consultar el historial y proteger la información del usuario.
        </p>
      </section>

      {/* ¿Qué es un navegador? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Navegador Web?
        </h2>

        <div className="border p-6 rounded-xl">
          Un navegador web es un programa que permite visualizar y utilizar
          páginas y servicios disponibles en Internet.
          <br /><br />
          A través del navegador podemos acceder a sitios web, leer
          información, mirar videos, utilizar aplicaciones, completar
          formularios y realizar diferentes actividades en línea.
        </div>
      </section>

      {/* Barra de direcciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Barra de Direcciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La barra de direcciones es el espacio donde podemos escribir la
          dirección de un sitio web que queremos visitar. También puede
          utilizarse para realizar búsquedas en Internet.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Escribir la dirección de una página web.</li>
          <li>Realizar búsquedas en Internet.</li>
          <li>Consultar la página que estamos visitando.</li>
          <li>Copiar y compartir direcciones web.</li>
          <li>Acceder nuevamente a una página utilizando su dirección.</li>
        </ul>
      </section>

      {/* Pestañas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pestañas del Navegador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las pestañas permiten abrir diferentes páginas web dentro de la
          misma ventana del navegador. Esto facilita trabajar con varios
          sitios al mismo tiempo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Con las pestañas podemos:
          </p>

          ✔ Abrir varias páginas al mismo tiempo. <br />
          ✔ Cambiar rápidamente entre diferentes sitios. <br />
          ✔ Cerrar una página sin cerrar todo el navegador. <br />
          ✔ Abrir enlaces en una nueva pestaña. <br />
          ✔ Organizar diferentes tareas en una misma ventana.
        </div>
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Navegar entre Páginas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El navegador permite desplazarnos entre diferentes páginas web
          utilizando enlaces y botones de navegación. También podemos volver
          a una página anterior o avanzar nuevamente.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Utilizar el botón Atrás para regresar a una página anterior.</li>
          <li>Utilizar el botón Adelante para volver a una página visitada.</li>
          <li>Actualizar una página cuando sea necesario.</li>
          <li>Utilizar enlaces para acceder a otras páginas.</li>
          <li>Desplazarse por el contenido utilizando la barra de desplazamiento.</li>
        </ul>
      </section>

      {/* Favoritos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar Páginas en Favoritos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los favoritos permiten guardar las direcciones de páginas web que
          visitamos con frecuencia. De esta manera podemos acceder nuevamente
          a ellas sin tener que escribir la dirección cada vez.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Los favoritos pueden utilizarse para guardar:
          </p>

          <strong>Páginas de trabajo:</strong> sitios utilizados habitualmente
          durante la jornada laboral.
          <br /><br />

          <strong>Herramientas en línea:</strong> aplicaciones o servicios
          utilizados con frecuencia.
          <br /><br />

          <strong>Sitios de consulta:</strong> páginas que contienen información
          que necesitamos consultar posteriormente.
        </div>
      </section>

      {/* Historial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Historial de Navegación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El historial registra las páginas que fueron visitadas utilizando
          el navegador. Puede resultar útil cuando necesitamos encontrar
          nuevamente un sitio que visitamos anteriormente.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Consultar páginas visitadas anteriormente.</li>
          <li>Encontrar un sitio que no guardamos en favoritos.</li>
          <li>Buscar una página visitada en una fecha determinada.</li>
          <li>Eliminar elementos del historial.</li>
          <li>Borrar todo el historial de navegación cuando sea necesario.</li>
        </ul>
      </section>

      {/* Descargas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Descargar Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los navegadores permiten descargar diferentes tipos de archivos
          desde Internet. Por ejemplo, podemos descargar documentos, imágenes,
          planillas y otros archivos disponibles en una página web.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Antes de descargar un archivo es importante:
          </p>

          ✔ Comprobar que el sitio sea confiable. <br />
          ✔ Verificar qué archivo estamos descargando. <br />
          ✔ Revisar el nombre y formato del archivo. <br />
          ✔ Evitar archivos provenientes de sitios sospechosos. <br />
          ✔ Comprobar la carpeta donde se guardó el archivo.
        </div>
      </section>

      {/* Búsqueda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Realizar Búsquedas en Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las funciones más utilizadas de un navegador es realizar
          búsquedas en Internet. Podemos escribir palabras o frases en la
          barra de direcciones para encontrar información relacionada con
          nuestras necesidades.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          Si necesitamos encontrar información sobre horarios de atención,
          podemos buscar:
          <br /><br />

          <strong>"horarios de atención"</strong>

          <br /><br />

          También podemos realizar búsquedas más específicas agregando el
          nombre de una empresa, producto, ciudad o tema que nos interese.
          <br /><br />

          Una búsqueda precisa ayuda a encontrar más rápidamente la
          información que necesitamos.
        </div>
      </section>

      {/* Privacidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Privacidad y Datos de Navegación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El navegador puede almacenar diferentes datos relacionados con
          nuestra actividad en Internet, como historial, cookies y otros
          elementos utilizados para facilitar la navegación.
          <br /><br />
          Es importante conocer estas herramientas y revisar la configuración
          de privacidad cuando utilizamos un equipo compartido o público.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Revisar las opciones de privacidad del navegador.</li>
          <li>Eliminar el historial cuando sea necesario.</li>
          <li>Controlar las cookies y otros datos del sitio.</li>
          <li>Evitar guardar contraseñas en equipos públicos.</li>
          <li>Cerrar las sesiones de las cuentas utilizadas.</li>
        </ul>
      </section>

      {/* Navegación privada */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Navegación Privada
        </h2>

        <div className="border p-6 rounded-xl">
          Los navegadores suelen ofrecer un modo de navegación privada que
          permite utilizar una ventana separada para visitar sitios web.
          <br /><br />

          Este modo puede ser útil cuando utilizamos un equipo compartido y
          no queremos que el historial de navegación quede almacenado de la
          misma manera en el navegador.
          <br /><br />

          Es importante recordar que la navegación privada no significa
          anonimato total en Internet. Los sitios web, redes y proveedores de
          servicios pueden seguir registrando determinada información.
        </div>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad al Navegar
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al navegar por Internet podemos encontrarnos con sitios falsos,
          enlaces sospechosos, ventanas emergentes o intentos de obtener
          información personal. Por eso es importante utilizar el navegador
          de manera responsable y segura.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Comprobar la dirección del sitio antes de ingresar información.</li>
          <li>Evitar hacer clic en enlaces sospechosos.</li>
          <li>No descargar archivos de sitios desconocidos.</li>
          <li>No ingresar contraseñas en páginas que parezcan falsas.</li>
          <li>Mantener actualizado el navegador.</li>
          <li>Prestar atención a posibles intentos de fraude.</li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los navegadores son herramientas fundamentales en el ámbito laboral.
          Permiten consultar información, utilizar sistemas de gestión,
          acceder al correo electrónico, realizar trámites, utilizar
          aplicaciones en línea y comunicarse mediante diferentes servicios.
          <br /><br />
          Conocer las funciones básicas del navegador permite trabajar de
          manera más rápida, organizada y segura.
        </p>
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

            Abrir un navegador web y explicar qué elementos principales
            aparecen en la ventana. Identificar la barra de direcciones,
            las pestañas y los botones de navegación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Buscar en Internet información relacionada con una empresa o
            producto. Explicar qué palabras utilizarías para realizar una
            búsqueda precisa.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Visitar una página web y guardarla en favoritos. Luego explicar
            cómo accederías nuevamente a esa página sin escribir su dirección.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imaginá que trabajás en una oficina y necesitás buscar información
          en Internet para realizar una tarea laboral.
          <br /><br />

          Deberás:
          <br /><br />

          ✔ Abrir el navegador web. <br />
          ✔ Utilizar la barra de direcciones para realizar una búsqueda. <br />
          ✔ Abrir diferentes resultados utilizando pestañas. <br />
          ✔ Identificar una página confiable. <br />
          ✔ Guardar la página más importante en favoritos. <br />
          ✔ Descargar un documento si fuera necesario. <br />
          ✔ Revisar la seguridad del sitio antes de ingresar información. <br />
          ✔ Explicar qué herramientas del navegador utilizaste durante la actividad.
        </div>
      </section>

    </div>
  );
}