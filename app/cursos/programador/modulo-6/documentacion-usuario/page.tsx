
export default function DocumentacionUsuarioPage() {
  return (
    <div className="space-y-10">

      {/* INTRODUCCIÓN */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Documentación de Usuario
        </h1>

        <p className=" leading-relaxed">
          La documentación de usuario es el conjunto de instrucciones,
          explicaciones y ayudas que permiten a una persona utilizar
          correctamente una aplicación o sistema informático.
        </p>

        <p className="leading-relaxed mt-4">
          A diferencia de la documentación técnica, que está orientada
          principalmente a desarrolladores y personal técnico, la
          documentación de usuario debe utilizar un lenguaje sencillo,
          claro y práctico.
        </p>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <p className="text-blue-900 font-medium">
            El objetivo principal es que el usuario pueda aprender a utilizar
            el sistema sin necesidad de conocer cómo fue programado.
          </p>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Objetivos de la documentación de usuario
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Explicar cómo utilizar el sistema.",
            "Facilitar el aprendizaje de las funcionalidades.",
            "Resolver dudas frecuentes.",
            "Indicar los pasos para realizar operaciones.",
            "Ayudar a solucionar problemas habituales.",
            "Reducir la necesidad de asistencia técnica.",
          ].map((item, index) => (
            <div
              key={index}
              className=" border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USUARIO DESTINATARIO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          ¿A quién está dirigida?
        </h2>

        <p className="leading-relaxed mb-5">
          Antes de elaborar un manual es importante identificar quiénes
          utilizarán el sistema. El contenido y el nivel de explicación
          deben adaptarse a sus conocimientos y necesidades.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2 text-blue-800">
              Usuario principiante
            </h3>
            <p className="">
              Necesita instrucciones detalladas y explicaciones paso a paso.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2 text-blue-800">
              Usuario habitual
            </h3>
            <p className="">
              Requiere información rápida sobre las funciones que utiliza
              con mayor frecuencia.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2 text-blue-800">
              Administrador
            </h3>
            <p className=""> 
              Puede necesitar información adicional sobre configuración,
              usuarios y mantenimiento básico.
            </p>
          </div>
        </div>
      </section>

      {/* ESTRUCTURA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Estructura de un manual de usuario
        </h2>

        <p className="mb-5">
          Un manual de usuario puede organizarse de la siguiente manera:
        </p>

        <div className="space-y-3">
          {[
            ["1", "Introducción", "Presentación general del sistema y su finalidad."],
            ["2", "Requisitos", "Elementos necesarios para utilizar la aplicación."],
            ["3", "Acceso al sistema", "Explicación de cómo iniciar la aplicación."],
            ["4", "Interfaz", "Descripción de las ventanas, botones y menús."],
            ["5", "Funcionalidades", "Explicación de las principales operaciones."],
            ["6", "Procedimientos", "Pasos necesarios para realizar tareas."],
            ["7", "Errores frecuentes", "Problemas habituales y posibles soluciones."],
            ["8", "Preguntas frecuentes", "Respuestas a dudas comunes."],
            ["9", "Contacto", "Información para solicitar asistencia."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="flex items-start gap-4  border rounded-lg p-4"
            >
              <span className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">
                {number}
              </span>

              <div>
                <h3 className="font-semibold text-blue-800">
                  {title}
                </h3>
                <p className=" text-sm mt-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERFAZ */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Descripción de la interfaz
        </h2>

        <p className="leading-relaxed mb-5">
          El manual debe explicar los elementos que aparecen en pantalla
          y qué función cumple cada uno.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 font-mono text-sm">
          <div className="text-blue-400 mb-4">
            ┌─────────────────────────────────────────────┐
          </div>
          <div>
            │              SISTEMA DE VENTAS             │
          </div>
          <div className="mt-2">
            │                                             │
          </div>
          <div>
            │  [Nuevo] [Buscar] [Modificar] [Eliminar]  │
          </div>
          <div className="mt-2">
            │                                             │
          </div>
          <div>
            │  Lista de productos                        │
          </div>
          <div>
            │  ───────────────────────────────────────   │
          </div>
          <div>
            │  Producto | Precio | Stock                 │
          </div>
          <div>
            │                                             │
          </div>
          <div className="text-blue-400 mt-4">
            └─────────────────────────────────────────────┘
          </div>
        </div>

        <p className="mt-5">
          Por ejemplo, el manual puede explicar que el botón
          <strong> Nuevo </strong>
          permite registrar un nuevo producto, mientras que
          <strong> Buscar </strong>
          permite localizar información existente.
        </p>
      </section>

      {/* PROCEDIMIENTOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Explicar procedimientos paso a paso
        </h2>

        <p className="mb-5">
          Las operaciones importantes deben explicarse mediante pasos
          ordenados. Esto facilita que el usuario pueda repetir el
          procedimiento correctamente.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">
            Ejemplo: Registrar un producto
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Ingresar al sistema.</li>
            <li>Seleccionar la opción <strong>Productos</strong>.</li>
            <li>Presionar el botón <strong>Nuevo</strong>.</li>
            <li>Completar el nombre del producto.</li>
            <li>Ingresar el precio.</li>
            <li>Indicar la cantidad disponible.</li>
            <li>Presionar <strong>Guardar</strong>.</li>
            <li>Verificar que el producto aparezca en la lista.</li>
          </ol>
        </div>
      </section>

      {/* CAPTURAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Capturas de pantalla
        </h2>

        <p className=" leading-relaxed">
          Las capturas de pantalla son muy útiles para complementar las
          instrucciones. Permiten identificar visualmente botones,
          formularios, menús y diferentes elementos de la aplicación.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-5">
          {[
            "Pantalla de inicio",
            "Formulario de registro",
            "Resultado de una operación",
          ].map((item) => (
            <div
              key={item}
              className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center"
            >
              <div className="text-4xl mb-3">🖥️</div>
              <p className="font-medium">{item}</p>
              <p className="text-sm mt-2">
                Incorporar captura de pantalla
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ERRORES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Errores y problemas frecuentes
        </h2>

        <p className=" mb-5">
          Un buen manual también debe ayudar al usuario cuando ocurre
          un problema durante el uso de la aplicación.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border p-3 text-left">
                  Problema
                </th>
                <th className="border p-3 text-left">
                  Posible causa
                </th>
                <th className="border p-3 text-left">
                  Solución
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  No se puede iniciar el sistema
                </td>
                <td className="border p-3">
                  Instalación incorrecta
                </td>
                <td className="border p-3">
                  Verificar la instalación y los requisitos.
                </td>
              </tr>

              <tr className="">
                <td className="border p-3">
                  No se puede guardar información
                </td>
                <td className="border p-3">
                  Datos incompletos
                </td>
                <td className="border p-3">
                  Revisar los campos obligatorios.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  No aparecen registros
                </td>
                <td className="border p-3">
                  Filtro o búsqueda incorrecta
                </td>
                <td className="border p-3">
                  Limpiar los filtros y realizar nuevamente la búsqueda.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {[
            [
              "¿Qué hago si olvidé un dato?",
              "Verificar la información solicitada y consultar al administrador si es necesario."
            ],
            [
              "¿Puedo modificar un registro?",
              "Sí, siempre que el sistema permita la modificación y el usuario tenga los permisos necesarios."
            ],
            [
              "¿Qué hago si aparece un mensaje de error?",
              "Leer el mensaje, verificar los datos ingresados y consultar la sección de problemas frecuentes."
            ],
          ].map(([question, answer]) => (
            <div
              key={question}
              className="border rounded-xl p-5"
            >
              <h3 className="font-bold">
                {question}
              </h3>

              <p className=" mt-2">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Documentación técnica vs. documentación de usuario
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3 text-left">
                  Documentación técnica
                </th>
                <th className="border p-3 text-left">
                  Documentación de usuario
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Dirigida a desarrolladores y técnicos.
                </td>
                <td className="border p-3">
                  Dirigida a las personas que utilizan el sistema.
                </td>
              </tr>

              <tr className="">
                <td className="border p-3">
                  Describe arquitectura y código.
                </td>
                <td className="border p-3">
                  Describe cómo utilizar las funciones.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Utiliza conceptos técnicos.
                </td>
                <td className="border p-3">
                  Utiliza lenguaje claro y sencillo.
                </td>
              </tr>

              <tr className="">
                <td className="border p-3">
                  Facilita mantenimiento y desarrollo.
                </td>
                <td className="border p-3">
                  Facilita el uso y aprendizaje.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BUENAS PRÁCTICAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Buenas prácticas
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Utilizar un lenguaje claro y sencillo.",
            "Organizar la información por temas.",
            "Utilizar pasos numerados.",
            "Incluir capturas de pantalla.",
            "Mantener actualizado el manual.",
            "Evitar explicaciones técnicas innecesarias.",
            "Incluir ejemplos reales.",
            "Agregar una sección de preguntas frecuentes.",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-green-200 rounded-lg p-4"
            >
              <span className="text-green-600 text-xl">✓</span>
              <span className="">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVIDAD */}
      <section>
        <div className="bg-blue-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Actividad práctica
          </h2>

          <p className="leading-relaxed mb-5">
            Elaborar un <strong>Manual de Usuario</strong> para el
            sistema desarrollado durante el curso.
          </p>

          <h3 className="font-bold text-lg mb-3">
            El manual debe incluir:
          </h3>

          <ul className="list-disc list-inside space-y-2 text-blue-50">
            <li>Introducción al sistema.</li>
            <li>Requisitos para utilizarlo.</li>
            <li>Descripción de la interfaz.</li>
            <li>Explicación de las principales funcionalidades.</li>
            <li>Procedimientos paso a paso.</li>
            <li>Capturas de pantalla.</li>
            <li>Problemas frecuentes y soluciones.</li>
            <li>Preguntas frecuentes.</li>
            <li>Información de contacto o asistencia.</li>
          </ul>

          <div className="mt-6 bg-white/10 rounded-xl p-5">
            <p className="font-semibold">
              Objetivo:
            </p>

            <p className="text-blue-50 mt-2">
              El manual debe permitir que una persona que nunca utilizó
              el sistema pueda aprender a realizar sus operaciones
              principales siguiendo únicamente las instrucciones
              proporcionadas.
            </p>
          </div>
        </div>
      </section>

      {/* RESUMEN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Resumen
        </h2>

        <div className="bg-gray-50 rounded-xl p-6 border">
          <p className="text-gray-700 leading-relaxed">
            La documentación de usuario permite explicar cómo utilizar
            correctamente una aplicación. Debe estar orientada a las
            necesidades de los usuarios, utilizar un lenguaje claro y
            presentar instrucciones ordenadas y fáciles de seguir.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Un buen manual puede incluir información general, requisitos,
            descripción de la interfaz, procedimientos, capturas de
            pantalla, errores frecuentes y preguntas frecuentes.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4 font-medium">
            Documentar no significa solamente explicar cómo funciona un
            sistema, sino también facilitar que otras personas puedan
            utilizarlo de manera autónoma y eficiente.
          </p>
        </div>
      </section>

    </div>
  );
}
