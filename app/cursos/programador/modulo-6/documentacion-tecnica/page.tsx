
export default function DocumentacionTecnicaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Documentación Técnica
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La documentación técnica es el conjunto de documentos que describen
          cómo está construido, configurado, instalado y mantenido un sistema
          de software.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Su objetivo es permitir que otros desarrolladores, técnicos o
          responsables del sistema puedan comprender su funcionamiento y
          realizar tareas de mantenimiento sin depender exclusivamente de
          las personas que participaron en su desarrollo.
        </p>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900">
            Idea clave
          </p>

          <p className="mt-2 leading-relaxed">
            Un sistema bien documentado no solamente explica
            <strong> qué hace</strong>, sino también
            <strong> cómo está construido, cómo se instala y cómo se mantiene.</strong>
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la documentación técnica
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Explicar la estructura del sistema.</li>
          <li>Describir sus principales componentes.</li>
          <li>Documentar las tecnologías utilizadas.</li>
          <li>Facilitar la instalación y configuración.</li>
          <li>Facilitar el mantenimiento del software.</li>
          <li>Registrar decisiones importantes de diseño.</li>
          <li>Permitir que nuevos desarrolladores comprendan el proyecto.</li>
          <li>Servir como referencia ante futuros cambios.</li>
        </ul>
      </section>

      {/* Documentación técnica vs usuario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documentación técnica y documentación de usuario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No toda la documentación de un sistema está dirigida al mismo
          público. Es importante diferenciar la documentación técnica de la
          documentación destinada a los usuarios finales.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Documentación técnica
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Dirigida a desarrolladores y técnicos.</li>
              <li>Describe la arquitectura.</li>
              <li>Explica el código y componentes.</li>
              <li>Documenta la base de datos.</li>
              <li>Describe configuraciones.</li>
              <li>Explica procedimientos de mantenimiento.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Documentación de usuario
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Dirigida a los usuarios finales.</li>
              <li>Explica cómo utilizar el sistema.</li>
              <li>Describe las funcionalidades.</li>
              <li>Incluye instrucciones paso a paso.</li>
              <li>Utiliza lenguaje sencillo.</li>
              <li>Puede incluir capturas de pantalla.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contenido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué debe contener?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación técnica puede variar según el tipo de proyecto.
          Sin embargo, existen algunos elementos que resultan especialmente
          útiles en la mayoría de los sistemas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 max-w-5xl">

          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              1. Descripción general
            </h3>
            <p className="text-sm mt-2">
              Explica qué problema resuelve el sistema y cuál es su objetivo.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              2. Requerimientos
            </h3>
            <p className="text-sm mt-2">
              Detalla los requisitos funcionales y no funcionales.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              3. Arquitectura
            </h3>
            <p className="text-sm mt-2">
              Describe cómo están organizados los componentes del sistema.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              4. Modelo de datos
            </h3>
            <p className="text-sm mt-2">
              Describe tablas, relaciones y estructuras de la base de datos.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              5. Instalación
            </h3>
            <p className="text-sm mt-2">
              Explica cómo instalar y configurar el sistema.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              6. Pruebas
            </h3>
            <p className="text-sm mt-2">
              Registra los casos de prueba y sus resultados.
            </p>
          </div>

        </div>
      </section>

      {/* Descripción del sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Descripción general del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación debe comenzar con una descripción general que
          permita comprender rápidamente el propósito de la aplicación.
        </p>

        <div className=" border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="font-semibold text-blue-900 mb-4">
            Ejemplo: Sistema de Ventas
          </h3>

          <p className="leading-relaxed">
            El sistema de ventas permite administrar productos, clientes y
            operaciones de venta. La aplicación permite registrar productos,
            consultar información, generar ventas y mantener actualizados
            los datos almacenados.
          </p>

          <p className="leading-relaxed mt-4">
            La aplicación está desarrollada utilizando Java y JavaFX para
            la interfaz gráfica y utiliza una base de datos para almacenar
            la información de manera persistente.
          </p>
        </div>
      </section>

      {/* Tecnologías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tecnologías utilizadas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación debe indicar qué herramientas, lenguajes,
          bibliotecas y tecnologías fueron utilizadas para desarrollar
          el sistema.
        </p>

        <div className="overflow-x-auto mt-6 max-w-4xl">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-4 text-left">
                  Tecnología
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Utilización
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Java
                </td>
                <td className="border border-gray-300 p-4">
                  Lenguaje principal de desarrollo.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  JavaFX
                </td>
                <td className="border border-gray-300 p-4">
                  Desarrollo de la interfaz gráfica.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  JDBC
                </td>
                <td className="border border-gray-300 p-4">
                  Comunicación entre la aplicación y la base de datos.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  SQLite
                </td>
                <td className="border border-gray-300 p-4">
                  Almacenamiento persistente de información.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  IntelliJ IDEA
                </td>
                <td className="border border-gray-300 p-4">
                  Entorno de desarrollo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Arquitectura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documentación de la arquitectura
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La arquitectura describe cómo está organizado internamente el
          sistema y cómo se relacionan sus principales componentes.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-4xl">
          <pre className="text-sm leading-relaxed">
{`┌─────────────────────┐
│    Interfaz JavaFX  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Controladores       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Lógica de negocio   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Acceso a datos      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Base de datos       │
└─────────────────────┘`}
          </pre>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          La documentación debe explicar qué responsabilidad tiene cada
          componente y cómo se comunican entre sí.
        </p>
      </section>

      {/* Base de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documentación de la base de datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una aplicación utiliza una base de datos, la documentación
          debe explicar su estructura y las relaciones existentes entre las
          diferentes entidades.
        </p>

        <div className=" border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="font-semibold text-blue-900 mb-4">
            Información que se puede documentar
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Nombre de la base de datos.</li>
            <li>Tablas existentes.</li>
            <li>Campos de cada tabla.</li>
            <li>Tipos de datos.</li>
            <li>Claves primarias.</li>
            <li>Claves foráneas.</li>
            <li>Relaciones entre tablas.</li>
            <li>Índices.</li>
            <li>Restricciones.</li>
          </ul>
        </div>
      </section>

      {/* Estructura del proyecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          También es recomendable documentar cómo está organizado el código
          fuente del proyecto.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-4xl overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`src/
├── main/
│   ├── java/
│   │   └── com.example.ventas/
│   │       ├── controller/
│   │       ├── model/
│   │       ├── repository/
│   │       └── service/
│   │
│   └── resources/
│       ├── fxml/
│       └── css/
│
└── test/
    └── java/`}
          </pre>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          La estructura concreta dependerá de la arquitectura utilizada,
          pero el objetivo es que otro desarrollador pueda localizar
          rápidamente cada parte del sistema.
        </p>
      </section>

      {/* Procedimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documentación de procedimientos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los procedimientos describen cómo realizar tareas específicas
          relacionadas con el sistema.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6 max-w-5xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Instalación
            </h3>
            <p className="text-sm mt-2">
              Pasos necesarios para instalar la aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Configuración
            </h3>
            <p className="text-sm mt-2">
              Parámetros que deben configurarse antes de utilizar el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Copias de seguridad
            </h3>
            <p className="text-sm mt-2">
              Procedimiento para realizar y recuperar respaldos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Actualización
            </h3>
            <p className="text-sm mt-2">
              Procedimiento para instalar nuevas versiones del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Recuperación
            </h3>
            <p className="text-sm mt-2">
              Acciones necesarias ante errores o pérdida de información.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Mantenimiento
            </h3>
            <p className="text-sm mt-2">
              Tareas necesarias para conservar el sistema funcionando.
            </p>
          </div>

        </div>
      </section>

      {/* Versionado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Control de versiones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación también debe permitir conocer qué versión del
          software se está utilizando y cuáles fueron los cambios realizados
          entre versiones.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="font-semibold text-blue-900 mb-4">
            Ejemplo de historial
          </h3>

          <div className="space-y-3 text-sm">
            <div>
              <strong>Versión 1.0</strong> — Primera versión funcional.
            </div>

            <div>
              <strong>Versión 1.1</strong> — Corrección de errores en
              el registro de ventas.
            </div>

            <div>
              <strong>Versión 1.2</strong> — Incorporación de búsqueda
              de productos.
            </div>
          </div>
        </div>
      </section>

      {/* Calidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de una buena documentación
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Clara
            </h3>
            <p>
              La información debe poder comprenderse fácilmente.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Precisa
            </h3>
            <p>
              Debe reflejar correctamente el funcionamiento real del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actualizada
            </h3>
            <p>
              Debe modificarse cuando cambian las funcionalidades o la
              arquitectura.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Accesible
            </h3>
            <p>
              Debe encontrarse fácilmente cuando un desarrollador necesita
              consultarla.
            </p>
          </div>

        </div>
      </section>

      {/* Errores frecuentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores frecuentes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No documentar las decisiones importantes del proyecto.</li>
          <li>Utilizar información demasiado técnica para usuarios finales.</li>
          <li>Dejar la documentación desactualizada.</li>
          <li>No documentar los requisitos de instalación.</li>
          <li>No explicar la estructura del proyecto.</li>
          <li>No registrar las configuraciones necesarias.</li>
          <li>No documentar los procedimientos de mantenimiento.</li>
          <li>Suponer que otro desarrollador conoce el proyecto.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className=" border border-blue-200 rounded-xl p-6 max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Crear la documentación técnica del proyecto
          </h3>

          <p className="leading-relaxed">
            Elaborar la documentación técnica completa del sistema de ventas
            desarrollado durante el curso.
          </p>

          <p className="font-semibold mt-5 mb-3">
            El documento debe incluir:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Descripción general del sistema.</li>
            <li>Objetivos y alcance.</li>
            <li>Requisitos funcionales y no funcionales.</li>
            <li>Casos de uso.</li>
            <li>Diagramas de actividades.</li>
            <li>Diagramas de secuencia.</li>
            <li>Arquitectura del sistema.</li>
            <li>Modelo de datos.</li>
            <li>Estructura del proyecto.</li>
            <li>Tecnologías utilizadas.</li>
            <li>Procedimiento de instalación.</li>
            <li>Configuración inicial.</li>
            <li>Plan y resultados de pruebas.</li>
            <li>Procedimientos de mantenimiento.</li>
            <li>Historial de versiones.</li>
          </ul>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <div className="bg-blue-900 text-white rounded-xl p-6 max-w-4xl">
          <p className="leading-relaxed">
            La documentación técnica es una parte fundamental de un proyecto
            de software. Permite comprender la estructura, funcionamiento,
            instalación, configuración y mantenimiento de una aplicación.
          </p>

          <p className="leading-relaxed mt-4">
            Una documentación clara y actualizada facilita el trabajo de los
            desarrolladores, reduce los problemas durante el mantenimiento y
            permite que el conocimiento del proyecto no dependa de una única
            persona.
          </p>

          <p className="leading-relaxed mt-4">
            Documentar correctamente también forma parte del proceso
            profesional de desarrollo de software y debe realizarse durante
            todo el ciclo de vida del sistema.
          </p>
        </div>
      </section>

    </div>
  );
}
