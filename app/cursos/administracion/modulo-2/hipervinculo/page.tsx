export default function HipervinculosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Hipervínculos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los hipervínculos son elementos que permiten acceder rápidamente
          a otra ubicación al hacer clic sobre ellos.
          <br /><br />
          Pueden utilizarse para conectar documentos, páginas web, archivos,
          direcciones de correo electrónico o diferentes partes de un mismo
          documento.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Hipervínculo?
        </h2>

        <div className="border p-6 rounded-xl">
          Un hipervínculo es un enlace que permite acceder a un recurso
          determinado mediante un clic.
          <br /><br />

          En Microsoft Word, los hipervínculos suelen aparecer como texto
          subrayado y de un color diferente, aunque su apariencia puede
          modificarse.
          <br /><br />

          Por ejemplo:
          <br /><br />

          <span className="text-blue-700 underline">
            Visitar sitio web
          </span>
        </div>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirven?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los hipervínculos permiten organizar y conectar información de
          manera rápida, especialmente en documentos digitales.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Acceder a páginas web.</li>
            <li>Abrir archivos almacenados en la computadora.</li>
            <li>Enviar correos electrónicos.</li>
            <li>Acceder a diferentes partes de un documento.</li>
            <li>Crear índices y documentos interactivos.</li>
            <li>Relacionar información complementaria.</li>
          </ul>
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Hipervínculos
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Página Web
            </p>

            Permite acceder a un sitio o página de internet.

            <br /><br />

            Ejemplo:
            <br />

            <span className="text-blue-700 underline">
              www.ejemplo.com
            </span>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Archivo
            </p>

            Permite crear un enlace hacia un archivo almacenado en una
            computadora o ubicación determinada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Correo electrónico
            </p>

            Permite crear un enlace que abre el programa de correo
            electrónico para enviar un mensaje a una dirección determinada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Lugar dentro del documento
            </p>

            Permite acceder directamente a otra sección del mismo documento,
            por ejemplo, a un título, capítulo o apartado.
          </div>

        </div>
      </section>

      {/* Crear */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Hipervínculo en Word
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-4">

            <li>
              Seleccionar el texto que se desea convertir en hipervínculo.
            </li>

            <li>
              Ir a la opción <strong>Insertar</strong>.
            </li>

            <li>
              Seleccionar <strong>Vínculo</strong> o
              <strong> Hipervínculo</strong>.
            </li>

            <li>
              Indicar el destino del enlace.
            </li>

            <li>
              Comprobar que la dirección sea correcta.
            </li>

            <li>
              Confirmar la creación del hipervínculo.
            </li>

          </ol>

        </div>
      </section>

      {/* Ejemplo web */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Enlace a una Página Web
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Podemos seleccionar el texto:
          </p>

          <p className="text-blue-700 underline mb-6">
            Visitar el sitio web de la institución
          </p>

          <p>
            Luego se puede asociar una dirección web para que, al hacer clic
            sobre el texto, se abra la página correspondiente.
          </p>

        </div>
      </section>

      {/* Modificar eliminar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar o Eliminar un Hipervínculo
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Modificar
            </p>

            Se puede seleccionar el hipervínculo y utilizar la opción para
            modificar el vínculo, cambiando su dirección o destino.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Eliminar
            </p>

            Se puede utilizar la opción de eliminar el hipervínculo para
            conservar el texto pero quitar el enlace asociado.
          </div>

        </div>
      </section>

      {/* Documentos administrativos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Hipervínculos en Documentos Administrativos
        </h2>

        <div className="border p-6 rounded-xl">

          Los hipervínculos pueden ser muy útiles en documentos
          administrativos digitales.

          <br /><br />

          Por ejemplo, un informe puede incluir enlaces hacia:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>El sitio web de una institución.</li>
            <li>Un formulario digital.</li>
            <li>Un archivo complementario.</li>
            <li>Una dirección de correo electrónico.</li>
            <li>Una sección específica del documento.</li>
            <li>Documentación relacionada.</li>
          </ul>

        </div>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Práctico
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-4">
            Informe Administrativo
          </p>

          <p className="mb-4">
            Para obtener información adicional sobre las actividades
            realizadas, consulte el siguiente documento:
          </p>

          <p className="text-blue-700 underline mb-6">
            Ver documentación complementaria
          </p>

          <p>
            También se puede agregar un enlace para comunicarse con el
            responsable del informe:
          </p>

          <br />

          <p className="text-blue-700 underline">
            Contactar al responsable
          </p>

        </div>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li>Comprobar que los enlaces funcionen correctamente.</li>
            <li>Utilizar textos descriptivos para los enlaces.</li>
            <li>Evitar direcciones excesivamente largas dentro del texto.</li>
            <li>Revisar los enlaces antes de compartir el documento.</li>
            <li>Evitar colocar demasiados hipervínculos innecesarios.</li>
            <li>Utilizar enlaces relacionados con el contenido.</li>
          </ul>

        </div>
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

            Crear un documento de Word e insertar un hipervínculo hacia una
            página web.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear un hipervínculo hacia una dirección de correo electrónico.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Crear un documento con diferentes secciones y agregar
            hipervínculos que permitan desplazarse entre ellas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crear un pequeño informe administrativo que incluya al menos
            tres hipervínculos relacionados con el contenido.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>documento administrativo interactivo</strong>
          utilizando Microsoft Word.

          <br /><br />

          El documento deberá contener:

          <br /><br />

          ✔ Un título principal. <br />
          ✔ Diferentes secciones. <br />
          ✔ Un hipervínculo hacia una página web. <br />
          ✔ Un hipervínculo hacia una dirección de correo electrónico. <br />
          ✔ Un hipervínculo hacia otra parte del documento. <br />
          ✔ Un enlace hacia un archivo complementario. <br />
          ✔ Formato profesional. <br />
          ✔ Revisión de todos los enlaces antes de entregar.

          <br /><br />

          <strong>Objetivo:</strong> aprender a utilizar hipervínculos para
          conectar información y crear documentos digitales más completos,
          organizados e interactivos.

        </div>

      </section>

    </div>
  );
}