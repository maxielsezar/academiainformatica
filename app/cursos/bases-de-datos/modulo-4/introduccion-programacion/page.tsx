
export default function IntroduccionProgramacionPage() {
  return (
    <div className="space-y-14">
      {/* ENCABEZADO */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a la programación
        </h1>

        <p className="text-lg leading-relaxed">
          En este módulo vamos a incorporar conceptos de programación para
          desarrollar nuevas funcionalidades en el sistema de gestión de
          reservas de un hotel. A través de ejemplos y actividades prácticas,
          aprenderemos a resolver problemas, automatizar tareas y mejorar el
          funcionamiento de una aplicación administrativa utilizando Microsoft
          Access.
        </p>
      </section>

      {/* OBJETIVOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la programación?
        </h2>

        <p className="leading-relaxed mb-4">
          La programación es el proceso de diseñar y escribir instrucciones
          para que una computadora realice determinadas tareas. Estas
          instrucciones permiten automatizar procesos, procesar información,
          realizar cálculos y responder ante diferentes situaciones.
        </p>

        <p className="leading-relaxed mb-4">
          Un programa informático está formado por un conjunto de instrucciones
          organizadas de manera lógica. La computadora ejecuta esas
          instrucciones para alcanzar un objetivo determinado.
        </p>

        <p className="leading-relaxed">
          En un sistema administrativo, la programación permite que las
          operaciones no dependan exclusivamente de la intervención manual
          del usuario. Por ejemplo, puede calcular importes, verificar datos,
          controlar fechas y generar resultados automáticamente.
        </p>
      </section>

      {/* APLICACIÓN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirve programar en un sistema de gestión?
        </h2>

        <p className="leading-relaxed mb-4">
          En una aplicación administrativa, la programación permite incorporar
          comportamientos y automatizaciones que facilitan el trabajo diario.
          Algunas de sus aplicaciones son:
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              titulo: "Automatizar cálculos",
              descripcion:
                "Calcular el importe de una reserva según la cantidad de noches y el precio de la habitación.",
            },
            {
              titulo: "Validar información",
              descripcion:
                "Impedir que se registre una reserva con fechas incorrectas o una cantidad de personas inválida.",
            },
            {
              titulo: "Controlar operaciones",
              descripcion:
                "Verificar si una habitación está disponible antes de confirmar una reserva.",
            },
            {
              titulo: "Procesar información",
              descripcion:
                "Buscar reservas, calcular ingresos y obtener información para la administración.",
            },
            {
              titulo: "Automatizar tareas",
              descripcion:
                "Ejecutar acciones mediante botones, macros y procedimientos.",
            },
            {
              titulo: "Mejorar la experiencia del usuario",
              descripcion:
                "Facilitar el uso del sistema mediante formularios, mensajes y opciones de navegación.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="border border-blue-200 rounded-xl p-5"
            >
              <h3 className="font-bold text-blue-900 mb-2">
                {item.titulo}
              </h3>
              <p className="leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nuestro proyecto: sistema de gestión hotelera
        </h2>

        <p className="leading-relaxed mb-4">
          Durante este módulo continuaremos desarrollando el sistema de gestión
          hotelera iniciado en el módulo anterior. Ya contamos con una estructura
          de base de datos, relaciones entre tablas, formularios e informes.
          Ahora vamos a incorporar programación para agregar funcionalidades
          y automatizar diferentes operaciones.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-blue-900">
            Funcionalidades que desarrollaremos
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Calcular automáticamente el importe de las reservas.</li>
            <li>Controlar que las fechas de entrada y salida sean correctas.</li>
            <li>Verificar la disponibilidad de habitaciones.</li>
            <li>Evitar reservas duplicadas para una misma habitación.</li>
            <li>Registrar y controlar los pagos de los huéspedes.</li>
            <li>Buscar reservas según diferentes criterios.</li>
            <li>Generar consultas para obtener información administrativa.</li>
            <li>Automatizar tareas frecuentes mediante macros y código.</li>
          </ul>
        </div>
      </section>

      {/* PROGRAMACIÓN EN ACCESS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Programación en Microsoft Access
        </h2>

        <p className="leading-relaxed mb-4">
          Microsoft Access ofrece distintas herramientas que permiten
          incorporar programación y automatización a una base de datos.
          Durante el módulo trabajaremos principalmente con tres recursos:
        </p>

        <div className="space-y-5">
          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-bold text-blue-900 mb-2">
              1. Macros
            </h3>
            <p className="leading-relaxed">
              Permiten automatizar acciones sin necesidad de escribir grandes
              cantidades de código. Por ejemplo, abrir un formulario, ejecutar
              una consulta, mostrar un mensaje o cerrar una ventana.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-bold text-blue-900 mb-2">
              2. Consultas QBE
            </h3>
            <p className="leading-relaxed">
              QBE (Query By Example) permite construir consultas mediante una
              cuadrícula de diseño. El usuario selecciona tablas, campos,
              criterios y condiciones para obtener información específica.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-5">
            <h3 className="font-bold text-blue-900 mb-2">
              3. Lenguaje SQL
            </h3>
            <p className="leading-relaxed">
              SQL (Structured Query Language) es un lenguaje utilizado para
              consultar y manipular bases de datos. Permite seleccionar,
              insertar, modificar y eliminar registros, entre otras operaciones.
            </p>
          </div>
        </div>
      </section>

      {/* EJEMPLO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: calcular el importe de una reserva
        </h2>

        <p className="leading-relaxed mb-4">
          Imaginemos que un huésped reserva una habitación cuyo precio es de
          $50.000 por noche durante 3 noches. El sistema debe calcular
          automáticamente el importe total.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Datos de la reserva
          </h3>

          <ul className="space-y-2">
            <li><strong>Precio por noche:</strong> $50.000</li>
            <li><strong>Cantidad de noches:</strong> 3</li>
            <li><strong>Operación:</strong> 50.000 × 3</li>
            <li className="text-lg font-bold text-blue-900 pt-2">
              Importe total: $150.000
            </li>
          </ul>
        </div>

        <p className="leading-relaxed mt-4">
          En lugar de realizar este cálculo manualmente cada vez que se registra
          una reserva, podemos programar el sistema para que obtenga el importe
          automáticamente a partir del precio de la habitación y la cantidad de
          noches.
        </p>
      </section>

      {/* PROCESO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo trabaja un programa?
        </h2>

        <p className="leading-relaxed mb-5">
          En términos generales, un programa recibe datos, procesa esa
          información mediante instrucciones y produce un resultado.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className=" border border-blue-200 rounded-xl p-5">
            <div className="text-3xl mb-3">📥</div>
            <h3 className="font-bold text-blue-900 mb-2">Entrada</h3>
            <p className="text-sm">
              El usuario ingresa los datos de la reserva.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-bold text-blue-900 mb-2">Proceso</h3>
            <p className="text-sm">
              El programa calcula el importe y verifica las condiciones.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <div className="text-3xl mb-3">📤</div>
            <h3 className="font-bold text-blue-900 mb-2">Salida</h3>
            <p className="text-sm">
              El sistema muestra el importe y el resultado de la validación.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 1: reconocer la programación
            </h3>
            <p className="leading-relaxed">
              Explicá con tus palabras qué es la programación y mencioná tres
              situaciones de la vida cotidiana en las que se utilicen programas
              informáticos para automatizar tareas.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 2: identificar necesidades del hotel
            </h3>
            <p className="leading-relaxed">
              Analizá el sistema de gestión hotelera y enumerá cinco tareas que
              podrían automatizarse mediante programación. Indicá qué problema
              resuelve cada una.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 3: entrada, proceso y salida
            </h3>
            <p className="leading-relaxed">
              Para una reserva de hotel, identificá los datos de entrada, las
              operaciones que debería realizar el sistema y los resultados que
              debería mostrar al usuario.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 4: cálculos de reservas
            </h3>
            <p className="leading-relaxed">
              Una habitación cuesta $65.000 por noche. Un huésped reserva
              durante 4 noches. Calculá el importe total y explicá cómo podría
              automatizarse este cálculo en Access. Repetí el ejercicio con
              una reserva de 2 noches y otra de 7 noches.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 5: herramientas de Access
            </h3>
            <p className="leading-relaxed">
              Investigá las diferencias entre macros, consultas QBE y SQL.
              Elaborá un cuadro comparativo que incluya para qué sirve cada
              herramienta y un ejemplo de aplicación en el sistema hotelero.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: planificar la automatización del hotel
        </h2>

        <p className="leading-relaxed mb-4">
          A partir de la base de datos y los formularios creados en el Módulo 3,
          elaborá una propuesta para incorporar programación al sistema de
          gestión hotelera.
        </p>

        <p className="font-semibold text-blue-900 mb-3">
          La propuesta debe incluir:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Identificar al menos cinco tareas del hotel que podrían
            automatizarse.
          </li>
          <li>
            Describir qué datos necesita cada tarea para funcionar.
          </li>
          <li>
            Explicar qué operaciones debería realizar el sistema.
          </li>
          <li>
            Indicar qué resultados debería obtener el usuario.
          </li>
          <li>
            Determinar si conviene utilizar macros, consultas QBE o SQL para
            resolver cada necesidad.
          </li>
        </ol>

        <div className=" border border-blue-200 rounded-xl p-5 mt-5">
          <p className="font-semibold text-blue-900 mb-2">
            Entrega esperada
          </p>
          <p className="leading-relaxed">
            Un documento con la planificación de las funcionalidades que se
            incorporarán al sistema hotelero durante el módulo. Esta propuesta
            servirá como guía para las próximas actividades de programación.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="border-t border-blue-200 pt-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          La programación permite transformar una base de datos en una
          aplicación capaz de realizar operaciones, controlar información y
          automatizar tareas. A lo largo de este módulo incorporaremos estas
          herramientas al sistema de gestión hotelera, avanzando desde los
          conceptos básicos hasta la creación de funcionalidades concretas.
        </p>
      </section>
    </div>
  );
}
