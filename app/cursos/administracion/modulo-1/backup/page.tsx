export default function BackupPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Backup y Copias de Seguridad
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El backup, también conocido como copia de seguridad, es el proceso
          de crear una copia adicional de archivos y datos importantes con
          el objetivo de poder recuperarlos en caso de pérdida, daño o
          eliminación accidental.
          <br /><br />
          En el ámbito administrativo, realizar copias de seguridad es
          fundamental para proteger documentos, planillas, facturas,
          presupuestos, bases de datos y otros archivos utilizados
          diariamente por una organización.
          <br /><br />
          Una estrategia adecuada de backup permite reducir el riesgo de
          perder información importante y facilita la recuperación de los
          datos ante diferentes situaciones.
        </p>
      </section>

      {/* ¿Qué es un backup? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Backup?
        </h2>

        <div className="border p-6 rounded-xl">
          Un <strong>backup</strong> es una copia de seguridad de la
          información original almacenada en otro dispositivo o ubicación.
          <br /><br />
          Su objetivo principal es permitir la recuperación de los datos
          cuando los archivos originales se pierden, se dañan o dejan de
          estar disponibles.
          <br /><br />
          Por ejemplo, una empresa puede realizar una copia de seguridad
          de sus documentos administrativos y almacenarla en un disco
          externo o en un servicio de almacenamiento en la nube.
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las Copias de Seguridad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La información digital puede perderse por diferentes motivos.
          Una falla del disco, un error humano, un virus informático o
          la eliminación accidental de un archivo pueden provocar la
          pérdida de información.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Las copias de seguridad permiten:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Recuperar archivos eliminados accidentalmente.</li>
            <li>Proteger documentos importantes.</li>
            <li>Reducir el impacto de fallos de hardware.</li>
            <li>Recuperar información después de un incidente de seguridad.</li>
            <li>Mantener una copia adicional de los datos importantes.</li>
            <li>Continuar trabajando después de una pérdida de información.</li>
          </ul>

        </div>
      </section>

      {/* Riesgos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Riesgos de Pérdida de Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes situaciones que pueden provocar la pérdida
          o inaccesibilidad de los archivos almacenados en una computadora.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Fallas de hardware
            </p>

            Un disco duro o una unidad SSD pueden presentar fallas que
            impidan acceder a los archivos almacenados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Eliminación accidental
            </p>

            Un usuario puede eliminar un archivo o una carpeta por error
            y necesitar recuperar la información posteriormente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Software malicioso
            </p>

            Algunos programas maliciosos pueden dañar, eliminar o impedir
            el acceso a determinados archivos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Daños físicos
            </p>

            Un dispositivo puede dañarse como consecuencia de golpes,
            incendios, inundaciones u otros accidentes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Errores humanos
            </p>

            Una modificación incorrecta o la eliminación de información
            puede provocar la pérdida de datos importantes.
          </div>

        </div>
      </section>

      {/* Tipos de backup */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Backup
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes formas de realizar copias de seguridad.
          La elección depende de la cantidad de información, la frecuencia
          de los cambios y las necesidades de cada organización.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Backup completo
            </p>

            Consiste en realizar una copia de todos los archivos y datos
            seleccionados.
            <br /><br />
            Es sencillo de comprender y permite recuperar toda la
            información desde una única copia, aunque requiere más tiempo
            y espacio de almacenamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Backup incremental
            </p>

            Guarda los archivos que fueron modificados o creados desde
            la última copia de seguridad realizada.
            <br /><br />
            Permite reducir el espacio necesario y realizar copias de
            manera más rápida.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Backup diferencial
            </p>

            Guarda los archivos que fueron modificados o creados desde
            la última copia de seguridad completa.
            <br /><br />
            Puede requerir más espacio que un backup incremental, pero
            facilita el proceso de recuperación.
          </div>

        </div>
      </section>

      {/* Medios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Medios para Realizar Copias de Seguridad
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Disco externo
            </p>

            Los discos externos permiten almacenar grandes cantidades
            de información y pueden utilizarse para realizar copias
            periódicas de los archivos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Memoria USB
            </p>

            Las memorias USB pueden utilizarse para guardar y transportar
            archivos, aunque su capacidad puede ser limitada para grandes
            cantidades de información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Almacenamiento en la nube
            </p>

            Permite almacenar copias de archivos en servidores accesibles
            mediante Internet.
            <br /><br />
            Puede facilitar el acceso a la información desde diferentes
            dispositivos y ubicaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Servidores de respaldo
            </p>

            En organizaciones y empresas pueden utilizarse servidores
            específicos para almacenar copias de seguridad de diferentes
            equipos y sistemas.
          </div>

        </div>
      </section>

      {/* Regla 3-2-1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Regla 3-2-1 de las Copias de Seguridad
        </h2>

        <div className="border p-6 rounded-xl">
          Una estrategia ampliamente utilizada para mejorar la protección
          de la información es la regla <strong>3-2-1</strong>.
          <br /><br />

          Esta estrategia propone mantener:

          <br /><br />

          <strong>3</strong> copias de los datos importantes. <br />
          <strong>2</strong> medios o dispositivos de almacenamiento diferentes. <br />
          <strong>1</strong> copia almacenada en una ubicación diferente.

          <br /><br />

          El objetivo es evitar que un único incidente pueda afectar
          simultáneamente a todas las copias de seguridad.
        </div>
      </section>

      {/* Frecuencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Frecuencia de las Copias
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La frecuencia con la que se debe realizar un backup depende
          de la importancia de los datos y de la cantidad de cambios
          que se realizan diariamente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>
              Los archivos que cambian diariamente pueden necesitar
              copias frecuentes.
            </li>

            <li>
              Los documentos administrativos importantes deben respaldarse
              de forma periódica.
            </li>

            <li>
              La frecuencia debe adaptarse a las necesidades de cada
              organización.
            </li>

            <li>
              Las copias automáticas pueden facilitar la realización
              periódica de backups.
            </li>
          </ul>

        </div>
      </section>

      {/* Verificación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación de las Copias de Seguridad
        </h2>

        <div className="border p-6 rounded-xl">
          Realizar una copia de seguridad no garantiza por sí solo que
          la información pueda recuperarse correctamente.
          <br /><br />
          Es importante comprobar periódicamente que los archivos
          respaldados se encuentren disponibles y puedan restaurarse.
          <br /><br />
          Una copia dañada o incompleta podría no ser útil en el momento
          en que sea necesario recuperar la información.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Comprobar que el backup se haya realizado correctamente.</li>
          <li>Verificar que los archivos estén disponibles.</li>
          <li>Realizar pruebas de restauración periódicamente.</li>
          <li>Comprobar que los archivos recuperados puedan abrirse correctamente.</li>
        </ul>
      </section>

      {/* Restauración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Restauración de Información
        </h2>

        <div className="border p-6 rounded-xl">
          La restauración es el proceso mediante el cual se recuperan
          archivos desde una copia de seguridad.
          <br /><br />
          El proceso puede variar dependiendo del sistema utilizado
          para realizar el backup.
          <br /><br />
          Antes de restaurar información es importante identificar qué
          archivos se necesitan recuperar y desde qué copia de seguridad
          se realizará la restauración.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Proceso general de restauración:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Identificar los archivos que se necesitan recuperar.</li>
            <li>Localizar la copia de seguridad correspondiente.</li>
            <li>Seleccionar los archivos que serán restaurados.</li>
            <li>Elegir la ubicación de destino.</li>
            <li>Comprobar que los archivos recuperados funcionen correctamente.</li>
          </ol>

        </div>
      </section>

      {/* Backup en administración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Backup en un Entorno Administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina se pueden almacenar grandes cantidades de
          información que resulta importante para el funcionamiento
          de la organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunos ejemplos de información que debería protegerse:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Documentos administrativos.</li>
            <li>Planillas de cálculo.</li>
            <li>Facturas y comprobantes.</li>
            <li>Presupuestos.</li>
            <li>Información de clientes.</li>
            <li>Información de proveedores.</li>
            <li>Base de datos de la organización.</li>
            <li>Documentación de proyectos.</li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas para Realizar Backups
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Realizar copias de seguridad periódicamente.</li>
          <li>Utilizar más de un medio de almacenamiento.</li>
          <li>Mantener al menos una copia en una ubicación diferente.</li>
          <li>Verificar que las copias puedan restaurarse.</li>
          <li>Organizar correctamente los archivos respaldados.</li>
          <li>Proteger las copias contra accesos no autorizados.</li>
          <li>Definir qué información es prioritaria para respaldar.</li>
          <li>Establecer una frecuencia de backup adecuada.</li>
          <li>Documentar el procedimiento de recuperación de información.</li>
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
            Identificar cinco archivos importantes de una computadora
            que deberían incluirse en una copia de seguridad.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Investigar las diferencias entre un backup completo,
            incremental y diferencial.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Diseñar una estrategia de backup para una pequeña oficina
            que almacena documentos administrativos y planillas de cálculo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Investigar diferentes medios de almacenamiento que pueden
            utilizarse para realizar copias de seguridad.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Explicar con tus propias palabras qué significa la regla
            3-2-1 de las copias de seguridad.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que trabajas como operador de informática en una empresa
          que almacena información de clientes, proveedores, facturas,
          presupuestos y documentos administrativos.
          <br /><br />

          Un día, la computadora principal deja de funcionar y el equipo
          de trabajo necesita recuperar rápidamente toda la información.
          <br /><br />

          Diseña una estrategia de backup que permita proteger los datos
          de la organización.
          <br /><br />

          Tu propuesta deberá contemplar:

          <br /><br />

          ✔ Qué información debería respaldarse. <br />
          ✔ Con qué frecuencia se realizarían las copias. <br />
          ✔ Qué tipo de backup utilizarías. <br />
          ✔ En qué dispositivos almacenarías las copias. <br />
          ✔ Dónde guardarías una copia adicional. <br />
          ✔ Cómo verificarías que los backups funcionan correctamente. <br />
          ✔ Cómo realizarías la restauración de los archivos en caso de pérdida.
          <br /><br />

          Finalmente, explica cómo aplicarías la regla 3-2-1 para proteger
          la información de la empresa y reducir el riesgo de pérdida
          de datos.
        </div>
      </section>

    </div>
  );
}