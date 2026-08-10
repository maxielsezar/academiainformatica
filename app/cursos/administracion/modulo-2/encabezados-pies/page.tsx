
export default function EncabezadosPiePaginaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Encabezados y Pie de Página
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los encabezados y pies de página permiten agregar información que se
          repetirá automáticamente en las distintas páginas de un documento.
          <br /><br />
          Son herramientas muy utilizadas en documentos administrativos,
          informes, trabajos prácticos y documentos institucionales, ya que
          permiten identificar el contenido y mantener una presentación
          organizada y profesional.
        </p>
      </section>

      {/* ¿Qué es un encabezado? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Encabezado?
        </h2>

        <div className="border p-6 rounded-xl">
          El encabezado es un área ubicada en la parte superior de cada página
          del documento.
          <br /><br />
          Puede utilizarse para colocar información que se desea mantener
          visible a lo largo del documento, como el nombre de una empresa,
          institución, curso, informe o título.
        </div>
      </section>

      {/* Información encabezado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Información que Puede Contener
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre de la empresa o institución.</li>
            <li>Nombre del curso.</li>
            <li>Título del documento.</li>
            <li>Nombre del departamento.</li>
            <li>Logotipo de la organización.</li>
            <li>Fecha.</li>
            <li>Información de contacto.</li>
          </ul>

        </div>
      </section>

      {/* Pie de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Pie de Página?
        </h2>

        <div className="border p-6 rounded-xl">
          El pie de página es el área ubicada en la parte inferior de las
          páginas de un documento.
          <br /><br />
          Se utiliza principalmente para incluir información complementaria,
          números de página, fechas, referencias o datos institucionales.
        </div>
      </section>

      {/* Información pie */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Información que Puede Contener
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li>Número de página.</li>
            <li>Nombre del documento.</li>
            <li>Nombre de la empresa.</li>
            <li>Fecha de elaboración.</li>
            <li>Datos de contacto.</li>
            <li>Información institucional.</li>
            <li>Notas o referencias.</li>
          </ul>

        </div>
      </section>

      {/* Insertar encabezado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Insertar un Encabezado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En la mayoría de los procesadores de texto, el encabezado puede
          agregarse desde la pestaña <strong>Insertar</strong>.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Encabezado</strong>.</li>
            <li>Elegir un diseño.</li>
            <li>Escribir la información correspondiente.</li>
            <li>Seleccionar la opción para cerrar el encabezado.</li>
          </ol>

        </div>
      </section>

      {/* Insertar pie */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Insertar un Pie de Página
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Pie de página</strong>.</li>
            <li>Elegir un diseño.</li>
            <li>Escribir la información necesaria.</li>
            <li>Cerrar la edición del pie de página.</li>
          </ol>

        </div>
      </section>

      {/* Numeración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Numeración de Páginas
        </h2>

        <div className="border p-6 rounded-xl">
          La numeración de páginas permite identificar rápidamente cada página
          de un documento.
          <br /><br />
          Generalmente se incorpora desde la opción
          <strong> Insertar → Número de página</strong>.
          <br /><br />
          El número puede ubicarse en la parte superior o inferior de la página
          y puede utilizar diferentes formatos.
        </div>
      </section>

      {/* Primera página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Primera Página Diferente
        </h2>

        <div className="border p-6 rounded-xl">
          Algunos documentos requieren que la primera página tenga un diseño
          diferente al resto.
          <br /><br />
          Por ejemplo, una portada puede no mostrar el mismo encabezado o
          número de página que las páginas siguientes.
          <br /><br />
          Los procesadores de texto permiten configurar una
          <strong> primera página diferente</strong> para estos casos.
        </div>
      </section>

      {/* Secciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Encabezados Diferentes por Sección
        </h2>

        <div className="border p-6 rounded-xl">
          En documentos extensos es posible dividir el contenido en secciones
          y utilizar diferentes encabezados y pies de página en cada una.
          <br /><br />
          Esta función resulta útil cuando un informe contiene capítulos,
          anexos o partes con información diferente.
        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Encabezados y Pies
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los encabezados y pies de página pueden recibir diferentes formatos
          para integrarse correctamente con el diseño general del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Cambiar el tipo y tamaño de fuente.</li>
            <li>Aplicar negrita, cursiva o subrayado.</li>
            <li>Cambiar el color del texto.</li>
            <li>Alinear el contenido.</li>
            <li>Agregar líneas o bordes.</li>
            <li>Insertar imágenes o logotipos.</li>
          </ul>

        </div>
      </section>

      {/* Uso administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso en Documentos Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En el ámbito administrativo, estas herramientas permiten mantener
          identificados los documentos y facilitar su organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Informes empresariales.</li>
            <li>Notas administrativas.</li>
            <li>Manuales de procedimientos.</li>
            <li>Contratos y documentos institucionales.</li>
            <li>Presupuestos.</li>
            <li>Trabajos prácticos.</li>
            <li>Documentación interna.</li>
          </ul>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Organización
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-2">
            Encabezado:
          </p>

          Empresa Informática S.A. — Departamento Administrativo

          <br /><br />

          <p className="font-semibold mb-2">
            Contenido:
          </p>

          Informe mensual de actividades administrativas.

          <br /><br />

          <p className="font-semibold mb-2">
            Pie de página:
          </p>

          Informe Administrativo — Página 1

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mantener un diseño simple y profesional.</li>
          <li>Utilizar información relevante.</li>
          <li>No sobrecargar el encabezado.</li>
          <li>Utilizar números de página en documentos extensos.</li>
          <li>Mantener el mismo formato en todo el documento.</li>
          <li>Verificar que el encabezado no interfiera con el contenido.</li>
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

            Crear un documento de tres páginas e insertar un encabezado con
            el nombre de una empresa ficticia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Insertar un pie de página con el nombre del documento y el número
            de página.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Modificar el formato del encabezado aplicando una fuente,
            alineación y tamaño adecuados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Configurar la primera página como diferente para crear una portada
            sin el mismo encabezado que las páginas siguientes.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Elabora un informe administrativo de al menos tres páginas.
          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Una portada con diseño diferente. <br />
          ✔ Un encabezado con el nombre de una empresa ficticia. <br />
          ✔ Un pie de página con el nombre del documento. <br />
          ✔ Numeración automática de páginas. <br />
          ✔ Texto correctamente organizado y formateado. <br />
          ✔ Un diseño uniforme y profesional.
          <br /><br />

          Al finalizar, revisa todas las páginas para comprobar que el
          encabezado, el pie de página y la numeración se muestran
          correctamente.
        </div>
      </section>

    </div>
  );
}
