export default function ArquitecturaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Arquitectura del Sistema
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La arquitectura de un sistema de software describe cómo está
          organizado internamente y cómo se relacionan sus diferentes
          componentes. Permite definir una estructura clara para que la
          aplicación pueda desarrollarse, mantenerse y evolucionar de manera
          ordenada.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo aprenderemos a identificar los principales componentes
          de una aplicación y a representar cómo se comunican entre sí.
          Utilizaremos como referencia el sistema de ventas desarrollado a lo
          largo del curso.
        </p>
      </section>

      {/* Qué es arquitectura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la arquitectura de software?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La arquitectura de software es la organización de alto nivel de un
          sistema. Define sus componentes principales, las responsabilidades de
          cada uno y las relaciones o comunicaciones que existen entre ellos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una arquitectura bien diseñada permite separar responsabilidades,
          reducir el acoplamiento entre componentes y facilitar el
          mantenimiento del sistema.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Una arquitectura permite definir:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Qué componentes forman parte del sistema.</li>
            <li>Qué responsabilidad tiene cada componente.</li>
            <li>Cómo se comunican los componentes.</li>
            <li>Dónde se encuentra cada parte de la aplicación.</li>
            <li>Cómo se accede y almacena la información.</li>
            <li>Cómo se organiza el código fuente.</li>
          </ul>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante definir una arquitectura?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A medida que una aplicación crece, aumenta la cantidad de clases,
          funcionalidades y datos que debe manejar. Si todos los componentes
          están mezclados, el sistema puede resultar difícil de comprender y
          mantener.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Organización
            </h3>

            <p>
              Permite distribuir las responsabilidades del sistema de manera
              clara.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Mantenimiento
            </h3>

            <p>
              Facilita encontrar y modificar una parte específica de la
              aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Escalabilidad
            </h3>

            <p>
              Permite agregar nuevas funcionalidades sin tener que modificar
              todo el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Trabajo en equipo
            </h3>

            <p>
              Facilita que diferentes desarrolladores puedan trabajar sobre
              distintas partes del proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de un sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una aplicación puede estar formada por diferentes componentes, cada
          uno con una responsabilidad específica. Separar estos componentes
          permite mantener un código más organizado.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Interfaz de usuario
            </h3>

            <p>
              Es la parte con la que interactúa directamente el usuario. En
              nuestro proyecto utilizaremos JavaFX para construir las ventanas,
              formularios, botones, tablas y demás elementos visuales.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Lógica de negocio
            </h3>

            <p>
              Contiene las reglas y procesos que determinan cómo debe
              comportarse el sistema.
            </p>

            <p className="mt-3">
              Por ejemplo, verificar que una venta tenga productos y calcular
              correctamente su importe total.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Acceso a datos
            </h3>

            <p>
              Se encarga de comunicarse con la base de datos para guardar,
              consultar, modificar y eliminar información.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Base de datos
            </h3>

            <p>
              Es el componente encargado de almacenar de forma permanente la
              información utilizada por la aplicación.
            </p>
          </div>

        </div>
      </section>

      {/* Arquitectura por capas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Arquitectura por capas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las formas más utilizadas para organizar aplicaciones es la
          arquitectura por capas. Cada capa tiene una responsabilidad
          determinada y se comunica con las demás siguiendo una estructura
          definida.
        </p>

        <div className="space-y-4 max-w-3xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Capa de presentación
            </h3>

            <p>
              Se ocupa de la interfaz gráfica y de la interacción con el
              usuario.
            </p>

            <p className="mt-3 font-medium">
              Ejemplo: JavaFX.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Capa de lógica de negocio
            </h3>

            <p>
              Contiene las reglas y procesos propios de la aplicación.
            </p>

            <p className="mt-3 font-medium">
              Ejemplo: cálculo de una venta, validación de stock o aplicación
              de descuentos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Capa de acceso a datos
            </h3>

            <p>
              Se encarga de realizar las operaciones necesarias para comunicarse
              con la base de datos.
            </p>

            <p className="mt-3 font-medium">
              Ejemplo: JDBC y clases DAO.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Capa de datos
            </h3>

            <p>
              Contiene la información persistente utilizada por la aplicación.
            </p>

            <p className="mt-3 font-medium">
              Ejemplo: base de datos SQLite o MySQL.
            </p>
          </div>

        </div>
      </section>

      {/* Flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo de información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando un usuario realiza una acción, la información atraviesa las
          diferentes capas del sistema hasta completar el proceso.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

          <div className="space-y-4">

            <div className="border rounded-lg p-4 text-center">
              <p className="font-semibold">
                Usuario
              </p>
            </div>

            <div className="text-center">
              ↓
            </div>

            <div className="border rounded-lg p-4 text-center">
              <p className="font-semibold">
                Interfaz JavaFX
              </p>
            </div>

            <div className="text-center">
              ↓
            </div>

            <div className="border rounded-lg p-4 text-center">
              <p className="font-semibold">
                Lógica de negocio
              </p>
            </div>

            <div className="text-center">
              ↓
            </div>

            <div className="border rounded-lg p-4 text-center">
              <p className="font-semibold">
                Acceso a datos
              </p>
            </div>

            <div className="text-center">
              ↓
            </div>

            <div className="border rounded-lg p-4 text-center">
              <p className="font-semibold">
                Base de datos
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Arquitectura del sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Arquitectura del sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para nuestro sistema de ventas podemos organizar la aplicación en
          diferentes capas. Cada una tendrá una responsabilidad específica.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Presentación
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Ventanas.</li>
              <li>Formularios.</li>
              <li>Botones.</li>
              <li>Tablas.</li>
              <li>Mensajes al usuario.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Negocio
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Clientes.</li>
              <li>Productos.</li>
              <li>Ventas.</li>
              <li>Validaciones.</li>
              <li>Cálculos.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Acceso a datos
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Conexión a la base de datos.</li>
              <li>Consultas SQL.</li>
              <li>Inserciones.</li>
              <li>Modificaciones.</li>
              <li>Eliminaciones.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Datos
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Tabla Cliente.</li>
              <li>Tabla Producto.</li>
              <li>Tabla Venta.</li>
              <li>Tabla DetalleVenta.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Separación de responsabilidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Separación de responsabilidades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Uno de los principios fundamentales de una buena arquitectura es
          evitar que una misma clase tenga demasiadas responsabilidades.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo, una ventana de JavaFX no debería encargarse directamente
          de ejecutar todas las consultas SQL de la aplicación. Es preferible
          separar la interfaz, la lógica y el acceso a datos.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <h3 className="font-semibold mb-4">
            Ejemplo de una correcta separación
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Vista:</strong> muestra la información y recibe acciones
              del usuario.
            </li>
            <li>
              <strong>Servicio:</strong> aplica las reglas del negocio.
            </li>
            <li>
              <strong>DAO:</strong> realiza las operaciones con la base de
              datos.
            </li>
            <li>
              <strong>Modelo:</strong> representa los datos del sistema.
            </li>
          </ul>

        </div>
      </section>

      {/* Acoplamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Acoplamiento y dependencia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los componentes de una aplicación necesitan comunicarse entre sí,
          pero es conveniente evitar dependencias innecesarias. Cuando un
          componente depende demasiado de otro, cualquier modificación puede
          provocar problemas en diferentes partes del sistema.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Alto acoplamiento
            </h3>

            <p>
              Los componentes están fuertemente relacionados. Un cambio en una
              parte puede afectar muchas otras partes del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Bajo acoplamiento
            </h3>

            <p>
              Los componentes tienen responsabilidades bien separadas y
              dependen lo menos posible unos de otros.
            </p>
          </div>

        </div>
      </section>

      {/* Arquitectura como documentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La arquitectura como documentación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La arquitectura no solamente sirve para organizar el código. También
          forma parte de la documentación técnica del sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Un nuevo desarrollador puede consultar la arquitectura para
          comprender rápidamente cuáles son las principales partes de la
          aplicación y cómo se comunican.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Una documentación de arquitectura puede incluir:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Componentes principales.</li>
            <li>Capas del sistema.</li>
            <li>Responsabilidades.</li>
            <li>Relaciones entre componentes.</li>
            <li>Tecnologías utilizadas.</li>
            <li>Flujo de información.</li>
            <li>Diagramas de arquitectura.</li>
          </ul>
        </div>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Utilizando como referencia el sistema de ventas desarrollado durante
          el curso, diseñar una propuesta de arquitectura que permita
          representar cómo se organizan sus diferentes componentes.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Identificar los principales componentes del sistema.
            </li>
            <li>
              Definir las responsabilidades de cada componente.
            </li>
            <li>
              Separar la aplicación en capas.
            </li>
            <li>
              Determinar cómo se comunican las capas.
            </li>
            <li>
              Identificar dónde se encuentra la base de datos.
            </li>
            <li>
              Representar la arquitectura mediante un diagrama.
            </li>
            <li>
              Explicar brevemente el funcionamiento de la arquitectura.
            </li>
          </ol>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La arquitectura de software define la organización general de una
          aplicación, sus componentes, responsabilidades y relaciones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una arquitectura correctamente diseñada permite desarrollar sistemas
          más organizados, mantenibles y fáciles de ampliar. Además, constituye
          una parte importante de la documentación técnica de un proyecto.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Una buena arquitectura define cómo se organiza el sistema antes de
            que su complejidad haga difícil mantenerlo.
          </p>
        </div>
      </section>

    </div>
  );
}