export default function VirusAntivirusPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Virus y Antivirus
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La seguridad informática es un aspecto fundamental en el uso
          cotidiano de las computadoras. Los equipos pueden estar expuestos
          a diferentes amenazas capaces de afectar el funcionamiento del
          sistema o comprometer la información almacenada.
          <br /><br />
          Los virus informáticos forman parte de este conjunto de amenazas.
          Para reducir los riesgos es importante conocer cómo funcionan,
          cómo pueden propagarse y qué medidas de seguridad pueden aplicarse.
          <br /><br />
          Los antivirus y otras herramientas de seguridad ayudan a detectar
          y prevenir diferentes tipos de software malicioso.
        </p>
      </section>

      {/* ¿Qué es un virus? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Virus Informático?
        </h2>

        <div className="border p-6 rounded-xl">
          Un <strong>virus informático</strong> es un tipo de programa
          malicioso diseñado para realizar acciones no deseadas en un
          sistema informático.
          <br /><br />
          Algunos virus pueden modificar archivos, afectar el funcionamiento
          de una computadora o propagarse hacia otros archivos y dispositivos.
          <br /><br />
          Los virus suelen necesitar algún tipo de interacción para ejecutarse
          y propagarse, aunque existen otras amenazas informáticas que pueden
          actuar de diferentes maneras.
        </div>
      </section>

      {/* Malware */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Malware?
        </h2>

        <div className="border p-6 rounded-xl">
          El término <strong>malware</strong> se utiliza para describir
          diferentes tipos de software malicioso creado con la intención
          de dañar sistemas, obtener información, interrumpir actividades
          o realizar acciones no autorizadas.
          <br /><br />
          Los virus son solamente uno de los diferentes tipos de malware
          que pueden afectar a una computadora.
        </div>
      </section>

      {/* Tipos de amenazas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Software Malicioso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes tipos de amenazas informáticas. Cada una puede
          utilizar métodos distintos para afectar a los usuarios o sistemas.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Virus
            </p>

            Programas maliciosos que pueden propagarse mediante archivos
            y realizar modificaciones no deseadas en un sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Gusanos informáticos
            </p>

            Programas capaces de propagarse automáticamente a través
            de redes o sistemas, sin necesidad de depender de la misma
            forma que un virus tradicional de un archivo anfitrión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Troyanos
            </p>

            Programas que aparentan ser legítimos o útiles, pero que
            pueden realizar acciones maliciosas cuando son ejecutados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Spyware
            </p>

            Software diseñado para recopilar información sobre la actividad
            del usuario sin su conocimiento o consentimiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Ransomware
            </p>

            Tipo de malware que puede bloquear el acceso a sistemas o
            archivos y exigir algún tipo de pago para recuperar el acceso.
          </div>

        </div>
      </section>

      {/* Cómo se propagan */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo se Propagan los Virus y el Malware?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las amenazas informáticas pueden utilizar diferentes medios
          para llegar a una computadora.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Archivos descargados desde Internet.</li>
            <li>Programas de origen desconocido.</li>
            <li>Archivos adjuntos en correos electrónicos.</li>
            <li>Dispositivos USB infectados.</li>
            <li>Páginas web maliciosas.</li>
            <li>Enlaces engañosos.</li>
            <li>Archivos compartidos a través de redes.</li>
            <li>Aplicaciones descargadas desde fuentes no confiables.</li>
          </ul>

        </div>
      </section>

      {/* Síntomas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Posibles Síntomas de una Infección
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una computadora infectada puede presentar diferentes
          comportamientos anormales. Estos síntomas no siempre significan
          que exista un virus, pero pueden indicar la necesidad de realizar
          una revisión de seguridad.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Disminución inesperada del rendimiento.</li>
            <li>Comportamientos extraños del sistema.</li>
            <li>Aparición de ventanas o mensajes inesperados.</li>
            <li>Programas que se ejecutan sin autorización del usuario.</li>
            <li>Archivos que desaparecen o se modifican.</li>
            <li>Consumo inusual de recursos del sistema.</li>
            <li>Cambios inesperados en la configuración.</li>
          </ul>

        </div>
      </section>

      {/* Antivirus */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Antivirus?
        </h2>

        <div className="border p-6 rounded-xl">
          Un <strong>antivirus</strong> es un programa de seguridad diseñado
          para ayudar a detectar, bloquear y eliminar diferentes tipos de
          software malicioso.
          <br /><br />
          Los antivirus pueden analizar archivos, programas y diferentes
          elementos del sistema para identificar posibles amenazas.
          <br /><br />
          Es importante mantener las herramientas de seguridad actualizadas
          para mejorar su capacidad de detectar amenazas conocidas.
        </div>
      </section>

      {/* Funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones de un Antivirus
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Detección
            </p>

            Analiza archivos y actividades para identificar posibles
            amenazas informáticas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Prevención
            </p>

            Puede bloquear determinadas acciones o archivos que representen
            un riesgo para el sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Eliminación
            </p>

            Permite eliminar o poner en cuarentena determinados archivos
            identificados como maliciosos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Análisis del sistema
            </p>

            Permite realizar análisis para buscar amenazas presentes
            en diferentes ubicaciones de la computadora.
          </div>

        </div>
      </section>

      {/* Tipos de análisis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Análisis Antivirus
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Análisis rápido
            </p>

            Revisa las ubicaciones del sistema donde es más probable
            encontrar amenazas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Análisis completo
            </p>

            Examina una mayor cantidad de archivos y ubicaciones del
            sistema para realizar una revisión más profunda.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Análisis personalizado
            </p>

            Permite seleccionar archivos, carpetas o unidades específicas
            que se desean analizar.
          </div>

        </div>
      </section>

      {/* Cuarentena */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cuarentena
        </h2>

        <div className="border p-6 rounded-xl">
          La cuarentena es una función de seguridad que permite aislar
          archivos sospechosos para evitar que puedan ejecutarse o afectar
          al resto del sistema.
          <br /><br />
          De esta manera, el archivo queda separado mientras el usuario
          o la herramienta de seguridad determina qué acción realizar.
        </div>
      </section>

      {/* Windows Defender */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad en Windows
        </h2>

        <div className="border p-6 rounded-xl">
          Los sistemas operativos modernos incluyen herramientas de
          seguridad que ayudan a proteger el equipo frente a diferentes
          amenazas.
          <br /><br />
          En Windows, la aplicación de seguridad integrada permite
          realizar análisis del sistema y administrar diferentes opciones
          relacionadas con la protección del dispositivo.
          <br /><br />
          Es recomendable mantener activadas las funciones de seguridad
          disponibles y revisar periódicamente el estado de protección
          del equipo.
        </div>
      </section>

      {/* Prevención */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo Prevenir Infecciones?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La prevención es una de las mejores formas de reducir el riesgo
          de sufrir problemas relacionados con malware y otras amenazas.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Mantener actualizado el sistema operativo.</li>
          <li>Mantener actualizadas las herramientas de seguridad.</li>
          <li>Descargar programas desde fuentes confiables.</li>
          <li>Evitar abrir archivos adjuntos sospechosos.</li>
          <li>No hacer clic en enlaces desconocidos.</li>
          <li>Utilizar contraseñas seguras.</li>
          <li>Realizar copias de seguridad periódicas.</li>
          <li>Analizar dispositivos externos antes de utilizarlos.</li>
          <li>No instalar programas de procedencia dudosa.</li>
          <li>Prestar atención a mensajes y ventanas inesperadas.</li>
        </ul>
      </section>

      {/* Virus en oficinas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad Informática en Entornos Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina, una infección informática puede afectar no solo
          a una computadora, sino también a la información y a otros
          equipos conectados a la organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Por este motivo es importante:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Mantener actualizados los equipos.</li>
            <li>Utilizar herramientas de seguridad.</li>
            <li>Realizar copias de seguridad periódicas.</li>
            <li>Evitar instalar programas desconocidos.</li>
            <li>Capacitar a los usuarios sobre riesgos informáticos.</li>
            <li>Prestar atención a correos electrónicos sospechosos.</li>
            <li>Informar rápidamente cualquier comportamiento extraño.</li>
          </ul>

        </div>
      </section>

      {/* Qué hacer ante una infección */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué Hacer ante una Posible Infección?
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Desconectar el equipo de la red si existe riesgo de propagación.</li>
            <li>Evitar continuar utilizando archivos sospechosos.</li>
            <li>Realizar un análisis de seguridad.</li>
            <li>Seguir las recomendaciones de la herramienta de seguridad.</li>
            <li>Eliminar o poner en cuarentena las amenazas detectadas.</li>
            <li>Comprobar que el sistema funcione correctamente.</li>
            <li>Revisar las copias de seguridad disponibles.</li>
            <li>Solicitar asistencia técnica si el problema no puede resolverse.</li>
          </ol>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Seguridad
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mantener actualizado el sistema operativo.</li>
          <li>Utilizar herramientas de seguridad confiables.</li>
          <li>Realizar análisis periódicos del equipo.</li>
          <li>Descargar software únicamente desde fuentes confiables.</li>
          <li>No abrir archivos sospechosos.</li>
          <li>Evitar utilizar dispositivos USB desconocidos.</li>
          <li>Realizar copias de seguridad de información importante.</li>
          <li>Utilizar contraseñas seguras y únicas.</li>
          <li>Mantenerse atento a mensajes y correos sospechosos.</li>
          <li>Informar cualquier incidente de seguridad.</li>
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
            Explicar con tus propias palabras qué es un virus informático
            y qué diferencia existe entre un virus y un antivirus.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Investigar cinco tipos diferentes de malware y explicar
            qué características tiene cada uno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Identificar qué herramientas de seguridad están disponibles
            en una computadora con Windows.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Realizar un análisis de seguridad del equipo siguiendo las
            indicaciones del docente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Elaborar una lista de diez recomendaciones para prevenir
            infecciones informáticas en una oficina.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que trabajas como operador de informática en una oficina.
          Un empleado informa que abrió un archivo adjunto recibido por
          correo electrónico y, poco después, la computadora comenzó a
          mostrar comportamientos extraños.
          <br /><br />

          Diseña un procedimiento de actuación que permita reducir el
          riesgo para la computadora y la información de la empresa.
          <br /><br />

          Tu propuesta deberá contemplar:

          <br /><br />

          ✔ Qué acciones realizarías inmediatamente. <br />
          ✔ Cómo comprobarías si existe una amenaza. <br />
          ✔ Qué herramientas de seguridad utilizarías. <br />
          ✔ Cómo actuarías ante un archivo sospechoso. <br />
          ✔ Qué medidas tomarías para proteger la información. <br />
          ✔ Cuándo solicitarías asistencia técnica especializada.
          <br /><br />

          Finalmente, explica qué medidas preventivas implementarías
          en la oficina para reducir la posibilidad de que una situación
          similar vuelva a ocurrir.
        </div>
      </section>

    </div>
  );
}