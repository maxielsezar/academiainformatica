export default function FormulariosGooglePage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formularios de Google
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Google Forms es una herramienta que permite crear formularios
          digitales para recopilar información de manera rápida, organizada y
          sencilla. Los formularios pueden utilizarse para realizar encuestas,
          registrar datos, recopilar inscripciones, recibir solicitudes,
          realizar evaluaciones y obtener información de usuarios o
          trabajadores.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En el ámbito administrativo, los formularios permiten reemplazar
          muchos procesos realizados en papel y centralizar las respuestas en
          un único lugar.
        </p>
      </section>

      {/* ¿Qué es Google Forms? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Google Forms?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Google Forms es una aplicación en línea que permite diseñar
          formularios personalizados y compartirlos mediante un enlace. Las
          personas que reciben el formulario pueden completar las preguntas
          desde una computadora, tablet o teléfono celular.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-3xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Algunas aplicaciones de los formularios son:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Encuestas de satisfacción.</li>
            <li>Inscripciones a cursos o actividades.</li>
            <li>Registro de datos de clientes.</li>
            <li>Solicitudes administrativas.</li>
            <li>Registro de asistencia.</li>
            <li>Evaluaciones y cuestionarios.</li>
            <li>Recolección de opiniones y sugerencias.</li>
          </ul>
        </div>
      </section>

      {/* Crear un formulario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un formulario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para crear un formulario se debe ingresar a Google Forms utilizando
          una cuenta de Google. Desde allí es posible crear un formulario en
          blanco o utilizar una plantilla.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-3xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Pasos básicos
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Ingresar a Google Forms.</li>
            <li>Crear un formulario nuevo.</li>
            <li>Asignar un título al formulario.</li>
            <li>Agregar una descripción.</li>
            <li>Crear las preguntas necesarias.</li>
            <li>Configurar las opciones de respuesta.</li>
            <li>Personalizar el formulario.</li>
            <li>Realizar una prueba.</li>
            <li>Compartir el formulario.</li>
          </ol>
        </div>
      </section>

      {/* Tipos de preguntas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de preguntas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las características más importantes de Google Forms es la
          posibilidad de seleccionar diferentes tipos de preguntas según la
          información que se desea obtener.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl">
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Respuesta corta
            </h3>
            <p className="leading-relaxed">
              Permite ingresar información breve, como nombre, apellido,
              teléfono o número de documento.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Párrafo
            </h3>
            <p className="leading-relaxed">
              Permite ingresar respuestas extensas, comentarios,
              observaciones o explicaciones.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Opción múltiple
            </h3>
            <p className="leading-relaxed">
              Permite seleccionar una única respuesta entre varias opciones.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Casillas de verificación
            </h3>
            <p className="leading-relaxed">
              Permite seleccionar varias opciones al mismo tiempo.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Lista desplegable
            </h3>
            <p className="leading-relaxed">
              Presenta una lista de opciones en un menú desplegable.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Escala lineal
            </h3>
            <p className="leading-relaxed">
              Permite valorar una situación mediante una escala numérica.
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas obligatorias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Preguntas obligatorias
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las preguntas pueden configurarse como obligatorias para evitar que
          el usuario envíe el formulario sin completar información importante.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-3xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            En un formulario de inscripción puede ser obligatorio completar
            nombre, apellido, correo electrónico y teléfono, mientras que un
            campo de observaciones puede ser opcional.
          </p>
        </div>
      </section>

      {/* Secciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización mediante secciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los formularios pueden dividirse en diferentes secciones para
          organizar mejor las preguntas. Esto resulta especialmente útil
          cuando el formulario contiene una gran cantidad de información.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-3xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo de formulario administrativo
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Sección 1: Datos personales.</li>
            <li>Sección 2: Información laboral.</li>
            <li>Sección 3: Solicitud o trámite.</li>
            <li>Sección 4: Observaciones.</li>
          </ul>
        </div>
      </section>

      {/* Respuestas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gestión de respuestas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez que las personas comienzan a completar el formulario, las
          respuestas quedan disponibles para ser consultadas y organizadas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Google Forms también permite vincular las respuestas con una hoja de
          cálculo de Google Sheets. Esto facilita el análisis y procesamiento
          de la información obtenida.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-3xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Ventajas de utilizar una hoja de cálculo
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Organizar las respuestas en filas y columnas.</li>
            <li>Ordenar y filtrar información.</li>
            <li>Realizar cálculos.</li>
            <li>Generar estadísticas.</li>
            <li>Analizar los datos obtenidos.</li>
          </ul>
        </div>
      </section>

      {/* Compartir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Compartir un formulario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando el formulario está terminado, puede compartirse mediante un
          enlace. Este enlace puede enviarse por correo electrónico, WhatsApp,
          redes sociales o incorporarse dentro de una página web.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-3xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Recomendaciones antes de compartir
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Revisar todas las preguntas.</li>
            <li>Comprobar que las preguntas obligatorias sean correctas.</li>
            <li>Realizar una prueba completando el formulario.</li>
            <li>Verificar dónde se almacenarán las respuestas.</li>
            <li>Comprobar los permisos de acceso.</li>
          </ul>
        </div>
      </section>

      {/* Uso administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formularios aplicados a la administración
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una organización, los formularios digitales pueden utilizarse
          para automatizar y ordenar diferentes procesos administrativos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl">
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Registro de clientes
            </h3>
            <p className="leading-relaxed">
              Permite recopilar datos de contacto y otra información necesaria
              para gestionar clientes.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Solicitudes internas
            </h3>
            <p className="leading-relaxed">
              Puede utilizarse para registrar pedidos de materiales,
              vacaciones, permisos o servicios.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Encuestas
            </h3>
            <p className="leading-relaxed">
              Permite recopilar opiniones de clientes, empleados o usuarios.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Inscripciones
            </h3>
            <p className="leading-relaxed">
              Facilita el registro de participantes en cursos, reuniones,
              eventos o capacitaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Utilizar títulos claros y descriptivos.
          </li>
          <li>
            Realizar preguntas simples y fáciles de comprender.
          </li>
          <li>
            Evitar solicitar información innecesaria.
          </li>
          <li>
            Ordenar las preguntas de manera lógica.
          </li>
          <li>
            Utilizar preguntas obligatorias solamente cuando sea necesario.
          </li>
          <li>
            Probar el formulario antes de enviarlo.
          </li>
          <li>
            Revisar periódicamente las respuestas recibidas.
          </li>
          <li>
            Proteger la información personal recopilada.
          </li>
        </ul>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Crear un formulario de inscripción
          </h3>

          <p className="leading-relaxed mb-4">
            Crear un formulario destinado a registrar personas interesadas en
            realizar una capacitación.
          </p>

          <h4 className="font-bold mb-3">
            El formulario debe contener:
          </h4>

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre y apellido.</li>
            <li>Correo electrónico.</li>
            <li>Número de teléfono.</li>
            <li>Edad.</li>
            <li>Curso de interés.</li>
            <li>Modalidad preferida.</li>
            <li>Disponibilidad horaria.</li>
            <li>Comentarios u observaciones.</li>
          </ul>

          <p className="leading-relaxed mt-4">
            Configurar los campos necesarios como obligatorios y vincular las
            respuestas con una hoja de cálculo.
          </p>
        </div>
      </section>

      {/* Actividad administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad: formulario para una organización
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <p className="leading-relaxed mb-4">
            Imaginar que trabajan en el área administrativa de una empresa.
            La organización necesita recopilar información de sus empleados
            para actualizar sus datos de contacto.
          </p>

          <h3 className="font-bold text-blue-900 mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Crear un nuevo formulario.</li>
            <li>Agregar un título y una descripción.</li>
            <li>Solicitar los datos necesarios.</li>
            <li>Utilizar diferentes tipos de preguntas.</li>
            <li>Establecer preguntas obligatorias.</li>
            <li>Organizar el formulario en secciones.</li>
            <li>Vincular las respuestas con Google Sheets.</li>
            <li>Compartir el formulario con un compañero.</li>
            <li>Analizar las respuestas recibidas.</li>
          </ol>
        </div>
      </section>

      {/* Desafío integrador */}
      <section>
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Desafío Integrador
          </h2>

          <p className="leading-relaxed max-w-4xl">
            Diseñar un sistema de inscripción para una actividad organizada
            por una institución. Crear un formulario de Google que permita
            registrar a los participantes y recopilar toda la información
            necesaria.
          </p>

          <p className="leading-relaxed max-w-4xl mt-4">
            El formulario deberá utilizar diferentes tipos de preguntas,
            campos obligatorios, secciones y una hoja de cálculo vinculada para
            almacenar las respuestas. Finalmente, analizar la información
            obtenida y explicar cómo esta herramienta puede mejorar el trabajo
            administrativo de la organización.
          </p>
        </div>
      </section>
    </div>
  );
}