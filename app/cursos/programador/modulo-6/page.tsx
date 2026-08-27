export default function Modulo6Page() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Módulo 6: Documentación, Requerimientos y Diseño de Sistemas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo aprenderemos a documentar un sistema de software de
          manera profesional. La documentación es una parte fundamental del
          desarrollo, ya que permite comprender cómo funciona una aplicación,
          cuáles son sus objetivos, qué necesidades debe resolver y cómo debe
          utilizarse.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A partir de los requerimientos funcionales y técnicos recibidos, los
          estudiantes aprenderán a analizar las necesidades de un sistema,
          diseñar modelos de datos, representar la arquitectura de la
          aplicación y elaborar documentación técnica y documentación destinada
          a los usuarios.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Comprender la importancia de la documentación en el desarrollo de
            software.
          </li>
          <li>
            Analizar y especificar los requerimientos de un sistema.
          </li>
          <li>
            Diferenciar requisitos funcionales y no funcionales.
          </li>
          <li>
            Diseñar y documentar el modelo de datos.
          </li>
          <li>
            Representar la arquitectura general de un sistema.
          </li>
          <li>
            Elaborar diagramas de casos de uso.
          </li>
          <li>
            Elaborar diagramas de contexto.
          </li>
          <li>
            Documentar procedimientos del sistema.
          </li>
          <li>
            Crear procedimientos de instalación y pruebas.
          </li>
          <li>
            Elaborar documentación técnica y documentación para usuarios.
          </li>
        </ul>
      </section>

      {/* Sistema de referencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sistema de referencia del módulo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante este módulo continuaremos trabajando sobre el sistema de
          ventas desarrollado en los módulos anteriores. El objetivo será
          analizar el sistema como un producto de software completo y generar
          la documentación necesaria para su desarrollo, instalación,
          mantenimiento y utilización.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Aspectos que documentaremos
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Objetivo general del sistema.</li>
            <li>Requisitos funcionales.</li>
            <li>Requisitos no funcionales.</li>
            <li>Modelo de datos.</li>
            <li>Arquitectura del sistema.</li>
            <li>Casos de uso.</li>
            <li>Contexto del sistema.</li>
            <li>Procedimientos de instalación.</li>
            <li>Procedimientos de prueba.</li>
            <li>Manual técnico.</li>
            <li>Manual de usuario.</li>
          </ul>
        </div>
      </section>

      {/* Qué es la documentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la documentación de software?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación de software es el conjunto de documentos,
          diagramas, especificaciones e instrucciones que describen un sistema
          informático. Su objetivo es dejar registrada la información necesaria
          para comprender, desarrollar, utilizar, instalar, probar y mantener
          una aplicación.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una buena documentación permite que otras personas puedan comprender
          el funcionamiento del sistema sin necesidad de conocer todo el código
          fuente. También facilita el trabajo en equipo y el mantenimiento
          futuro de la aplicación.
        </p>
      </section>

      {/* Requerimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requerimientos del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de desarrollar o modificar un sistema es necesario conocer qué
          necesita el usuario y qué problemas debe resolver la aplicación.
          Estas necesidades se expresan mediante los requerimientos del sistema.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Requisitos funcionales
            </h3>

            <p>
              Describen las funciones y acciones que el sistema debe poder
              realizar.
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Registrar clientes.</li>
              <li>Registrar productos.</li>
              <li>Realizar ventas.</li>
              <li>Consultar información.</li>
              <li>Modificar registros.</li>
              <li>Generar reportes.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Requisitos no funcionales
            </h3>

            <p>
              Describen características y condiciones de calidad que debe
              cumplir el sistema.
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Seguridad.</li>
              <li>Rendimiento.</li>
              <li>Facilidad de uso.</li>
              <li>Compatibilidad.</li>
              <li>Disponibilidad.</li>
              <li>Mantenibilidad.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del módulo
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Especificación de Requerimientos
            </h3>

            <p>
              Análisis de las necesidades del sistema y definición de los
              requisitos funcionales y no funcionales.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Diseño del Modelo de Datos
            </h3>

            <p>
              Documentación de las entidades, atributos, relaciones y
              estructura de la información utilizada por el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Arquitectura del Sistema
            </h3>

            <p>
              Organización general de la aplicación, sus componentes y la forma
              en que interactúan entre sí.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Diagramas de Casos de Uso
            </h3>

            <p>
              Representación de las funcionalidades del sistema y de la
              interacción entre los usuarios y la aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Diagramas de Contexto
            </h3>

            <p>
              Representación del sistema dentro de su entorno y de las
              entidades externas que interactúan con él.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Especificación de Procedimientos
            </h3>

            <p>
              Documentación paso a paso de los procesos y operaciones
              importantes que realiza el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Procedimientos de Instalación
            </h3>

            <p>
              Instrucciones necesarias para instalar, configurar y poner en
              funcionamiento el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Procedimientos de Prueba
            </h3>

            <p>
              Definición de pruebas para verificar el correcto funcionamiento
              de las diferentes partes del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Documentación Técnica
            </h3>

            <p>
              Información destinada a programadores y personal técnico sobre la
              arquitectura, instalación, configuración y mantenimiento de la
              aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Documentación de Usuario
            </h3>

            <p>
              Manuales e instrucciones destinadas a las personas que utilizarán
              el sistema en sus tareas cotidianas.
            </p>
          </div>

        </div>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas que utilizaremos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>IntelliJ IDEA.</li>
          <li>Java.</li>
          <li>JavaFX.</li>
          <li>SQLite.</li>
          <li>Draw.io para la creación de diagramas.</li>
          <li>Documentos de texto para la elaboración de manuales.</li>
          <li>Herramientas de modelado de sistemas.</li>
        </ul>
      </section>

      {/* Aplicación práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación práctica en el sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Como proyecto práctico, los estudiantes elaborarán la documentación
          completa del sistema de ventas desarrollado durante el curso. Se
          describirán sus funcionalidades, estructura de datos, arquitectura,
          procesos principales y procedimientos de instalación.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Además, se crearán diagramas que permitan representar gráficamente el
          funcionamiento del sistema y se elaborarán manuales destinados tanto
          al personal técnico como a los usuarios finales.
        </p>
      </section>

      {/* Metodología */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodología de trabajo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada unidad combinará conceptos teóricos con actividades prácticas.
          Los estudiantes analizarán un sistema, identificarán requerimientos,
          diseñarán diagramas y producirán documentación profesional utilizando
          el sistema de ventas como caso de estudio.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El trabajo se realizará de manera progresiva, construyendo un
          documento final que reúna toda la información técnica y funcional del
          proyecto.
        </p>
      </section>

      {/* Resultado esperado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resultado esperado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar el módulo, los estudiantes serán capaces de interpretar
          requerimientos funcionales y técnicos, documentar un sistema de
          software, elaborar modelos de datos, representar la arquitectura de
          una aplicación y crear diagramas de casos de uso y contexto.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          También podrán elaborar procedimientos de instalación y pruebas,
          documentación técnica para desarrolladores y documentación destinada
          a los usuarios, aplicando estos conocimientos a proyectos reales de
          desarrollo de software.
        </p>
      </section>

    </div>
  );
}