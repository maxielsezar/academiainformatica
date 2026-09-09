export default function ArchivosEjecutablesPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Archivos Ejecutables
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los archivos ejecutables son archivos que contienen instrucciones que
          pueden ser interpretadas y ejecutadas por un sistema operativo. Se
          utilizan para iniciar programas, herramientas y diferentes procesos
          en una computadora.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Debido a que un archivo ejecutable puede iniciar acciones en el
          equipo, es importante conocer sus características y tener precaución
          al descargar, abrir o ejecutar archivos provenientes de Internet.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un archivo ejecutable?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un archivo ejecutable es aquel que puede iniciar un programa o
          ejecutar instrucciones en un sistema. Al abrirlo, el sistema
          operativo puede cargar y ejecutar las instrucciones contenidas en el
          archivo.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplos de extensiones ejecutables
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>.exe</strong> — ejecutables habituales de Windows.
            </li>
            <li>
              <strong>.msi</strong> — paquetes utilizados para instalar
              aplicaciones en Windows.
            </li>
            <li>
              <strong>.bat</strong> — archivos por lotes que ejecutan una
              secuencia de comandos.
            </li>
            <li>
              <strong>.cmd</strong> — archivos de comandos utilizados por
              Windows.
            </li>
            <li>
              <strong>.ps1</strong> — scripts utilizados por PowerShell.
            </li>
          </ul>
        </div>
      </section>

      {/* Diferencia con otros archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Archivos ejecutables y archivos de datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No todos los archivos almacenados en una computadora tienen la misma
          función. Algunos contienen datos o información, mientras que otros
          pueden ejecutar instrucciones.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Archivos de datos
            </h3>

            <p className="leading-relaxed">
              Generalmente contienen información que será utilizada por una
              persona o por una aplicación.
            </p>

            <p className="mt-4 text-sm">
              Ejemplos: documentos, imágenes, planillas y archivos PDF.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Archivos ejecutables
            </h3>

            <p className="leading-relaxed">
              Pueden iniciar programas o ejecutar instrucciones en el sistema
              operativo.
            </p>

            <p className="mt-4 text-sm">
              Ejemplos: programas, instaladores y determinados scripts.
            </p>
          </div>
        </div>
      </section>

      {/* Riesgos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Riesgos de los archivos ejecutables
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El hecho de que un archivo sea ejecutable no significa que sea
          peligroso. Sin embargo, un programa malicioso también puede utilizar
          un archivo ejecutable para realizar acciones no deseadas en el
          equipo.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Software malicioso
            </h3>

            <p className="leading-relaxed">
              Un ejecutable puede contener software diseñado para dañar el
              equipo, alterar información o realizar acciones no autorizadas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Robo de información
            </h3>

            <p className="leading-relaxed">
              Algunos programas maliciosos pueden intentar obtener información
              almacenada en el dispositivo.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Modificación del sistema
            </h3>

            <p className="leading-relaxed">
              Un programa no confiable puede modificar configuraciones o
              archivos del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Instalación no deseada
            </h3>

            <p className="leading-relaxed">
              Algunos instaladores pueden incorporar programas adicionales que
              el usuario no esperaba instalar.
            </p>
          </div>
        </div>
      </section>

      {/* Archivos recibidos por correo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejecutables recibidos por correo electrónico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una situación frecuente de riesgo consiste en recibir un archivo
          ejecutable mediante correo electrónico. El nombre del archivo o el
          mensaje que lo acompaña pueden intentar convencer al usuario de que
          debe abrirlo inmediatamente.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Antes de abrir un archivo
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Verificar quién envió el mensaje.</li>
            <li>Comprobar si realmente se esperaba el archivo.</li>
            <li>Analizar el nombre y la extensión.</li>
            <li>No abrir archivos inesperados.</li>
            <li>Utilizar herramientas de seguridad para analizarlo.</li>
            <li>Consultar al área técnica ante cualquier duda.</li>
          </ol>
        </div>
      </section>

      {/* Extensiones ocultas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atención a las extensiones de los archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los sistemas operativos pueden ocultar las extensiones conocidas de
          los archivos. Esto puede dificultar la identificación del tipo real
          de un archivo.
        </p>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Un archivo podría tener un nombre aparentemente inofensivo, pero
            terminar con una extensión ejecutable. Por este motivo, es
            recomendable configurar el sistema para poder identificar
            correctamente las extensiones de los archivos cuando sea necesario.
          </p>
        </div>
      </section>

      {/* Fuentes confiables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Descargar programas de forma segura
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando necesitamos instalar un programa, debemos obtenerlo desde una
          fuente confiable. Descargar ejecutables desde sitios desconocidos
          aumenta el riesgo de instalar software malicioso o programas
          modificados.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Buenas prácticas
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar sitios oficiales cuando sea posible.</li>
            <li>Evitar páginas de descargas desconocidas.</li>
            <li>Verificar el nombre del programa antes de instalarlo.</li>
            <li>Analizar los archivos descargados.</li>
            <li>Mantener actualizado el sistema operativo.</li>
            <li>Leer las opciones del instalador antes de aceptar.</li>
          </ul>
        </div>
      </section>

      {/* Antivirus */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Análisis con herramientas de seguridad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de seguridad pueden analizar archivos para detectar
          comportamientos o características asociadas con software malicioso.
          Por eso, cuando se recibe un ejecutable de origen desconocido, es
          recomendable analizarlo antes de ejecutarlo.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Recordá
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              Un antivirus no reemplaza la responsabilidad del usuario.
            </li>
            <li>
              Un archivo desconocido no debe ejecutarse simplemente porque
              parece importante.
            </li>
            <li>
              Las herramientas de seguridad deben mantenerse actualizadas.
            </li>
            <li>
              Ante una duda, es preferible consultar antes de ejecutar el
              archivo.
            </li>
          </ul>
        </div>
      </section>

      {/* Scripts */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Archivos de comandos y scripts
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Además de los programas tradicionales, existen archivos que contienen
          comandos o instrucciones que pueden ser ejecutados por el sistema.
          Entre ellos se encuentran los archivos BAT, CMD y determinados
          scripts.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <p className="leading-relaxed">
            Estos archivos pueden ser útiles para automatizar tareas, pero
            también deben tratarse con precaución cuando provienen de fuentes
            desconocidas.
          </p>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina administrativa puede ser necesario instalar programas
          para realizar tareas específicas. También pueden recibirse archivos
          adjuntos de compañeros, proveedores o instituciones.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Situación laboral
          </h3>

          <p className="leading-relaxed">
            Un empleado recibe un correo electrónico de un supuesto proveedor
            con un archivo llamado{" "}
            <strong>“Factura_2026.exe”</strong>.
          </p>

          <p className="leading-relaxed mt-4">
            Antes de abrirlo, debe verificar el remitente, confirmar si
            realmente esperaba la factura, analizar el archivo y consultar con
            la persona responsable de informática si existen dudas.
          </p>
        </div>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Identificando archivos
          </h3>

          <p className="leading-relaxed">
            Clasificá los siguientes archivos según consideres que son
            ejecutables o archivos de datos:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4 font-mono">
              informe.pdf
            </div>

            <div className="border rounded-lg p-4 font-mono">
              programa.exe
            </div>

            <div className="border rounded-lg p-4 font-mono">
              presupuesto.xlsx
            </div>

            <div className="border rounded-lg p-4 font-mono">
              instalador.msi
            </div>

            <div className="border rounded-lg p-4 font-mono">
              respaldo.zip
            </div>

            <div className="border rounded-lg p-4 font-mono">
              tareas.bat
            </div>
          </div>

          <p className="leading-relaxed mt-6">
            Luego explicá qué precauciones tomarías antes de abrir o ejecutar
            cada archivo.
          </p>
        </div>
      </section>

      {/* Análisis de situación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad de análisis
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-4">
            ¿Abrir o no abrir?
          </h3>

          <p className="leading-relaxed">
            Analizá las siguientes situaciones y decidí qué debería hacer el
            usuario.
          </p>

          <ol className="list-decimal list-inside space-y-4 mt-6">
            <li>
              Recibís un instalador de un programa desde la página oficial del
              desarrollador.
            </li>

            <li>
              Recibís un archivo ejecutable inesperado desde una dirección de
              correo desconocida.
            </li>

            <li>
              Un compañero te envía un archivo BAT sin explicar para qué sirve.
            </li>

            <li>
              Descargás un programa desde una página desconocida que promete
              una versión gratuita de un software comercial.
            </li>
          </ol>

          <p className="leading-relaxed mt-6">
            En cada caso, justificá tu decisión teniendo en cuenta la seguridad
            del equipo y de la información.
          </p>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed">
          Elaborá una guía titulada{" "}
          <strong>“Uso seguro de archivos ejecutables”</strong>.
        </p>

        <p className="leading-relaxed mt-4">
          La guía deberá incluir:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>Qué es un archivo ejecutable.</li>
          <li>Algunos ejemplos de extensiones ejecutables.</li>
          <li>Diferencias entre archivos ejecutables y archivos de datos.</li>
          <li>Riesgos asociados a ejecutables desconocidos.</li>
          <li>Recomendaciones para descargar programas.</li>
          <li>Precauciones al recibir archivos por correo electrónico.</li>
          <li>Importancia del antivirus y otras herramientas de seguridad.</li>
          <li>Buenas prácticas para el ámbito laboral.</li>
        </ul>
      </section>
    </div>
  );
}