
export default function DiagramasSecuenciaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagramas de Secuencia
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de secuencia son una herramienta de modelado utilizada
          para representar cómo interactúan los diferentes elementos de un
          sistema a lo largo del tiempo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Permiten visualizar qué objetos participan en una operación, qué
          mensajes intercambian y en qué orden se producen las acciones para
          completar una determinada funcionalidad.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un diagrama de secuencia?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un diagrama de secuencia es un tipo de diagrama UML que representa
          las interacciones entre actores y objetos de un sistema siguiendo
          una secuencia temporal.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A diferencia de otros diagramas que muestran principalmente la
          estructura del sistema, el diagrama de secuencia permite observar
          cómo se desarrolla una operación paso a paso.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900">
            Idea clave
          </p>

          <p className="mt-2 leading-relaxed">
            Un diagrama de secuencia responde principalmente a la pregunta:
            <strong> ¿qué ocurre y en qué orden ocurre?</strong>
          </p>
        </div>
      </section>

      {/* ¿Para qué sirve? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirve?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Representar el comportamiento de una funcionalidad.</li>
          <li>Mostrar la comunicación entre objetos.</li>
          <li>Identificar el orden de ejecución de las operaciones.</li>
          <li>Comprender cómo se procesan los requerimientos.</li>
          <li>Detectar responsabilidades de cada componente.</li>
          <li>Facilitar el diseño de las clases y métodos.</li>
          <li>Servir como documentación técnica del sistema.</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos principales
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actor
            </h3>

            <p className="leading-relaxed">
              Es una persona, sistema externo o dispositivo que interactúa
              con el sistema.
            </p>

            <p className="mt-3 text-sm text-gray-600">
              Ejemplo: el vendedor que utiliza el sistema de ventas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Línea de vida
            </h3>

            <p className="leading-relaxed">
              Representa la participación de un actor u objeto durante la
              ejecución de una operación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Mensaje
            </h3>

            <p className="leading-relaxed">
              Representa una comunicación o solicitud enviada de un objeto
              hacia otro.
            </p>

            <p className="mt-3 text-sm text-gray-600">
              Ejemplo: buscarProducto(), guardarVenta() o calcularTotal().
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Activación
            </h3>

            <p className="leading-relaxed">
              Indica el período durante el cual un objeto está ejecutando
              una operación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Retorno
            </h3>

            <p className="leading-relaxed">
              Representa el resultado que devuelve una operación al objeto
              que realizó la solicitud.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Tiempo
            </h3>

            <p className="leading-relaxed">
              Se representa verticalmente. Las acciones ubicadas más arriba
              ocurren antes que las ubicadas más abajo.
            </p>
          </div>

        </div>
      </section>

      {/* Lectura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo se lee?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de secuencia se leen de arriba hacia abajo. Cada
          participante se representa mediante una línea de vida y las
          comunicaciones se muestran mediante flechas.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 mt-6 max-w-4xl">
          <p className="font-semibold mb-4">
            Ejemplo simplificado:
          </p>

          <div className="font-mono text-sm space-y-2 overflow-x-auto">
            <p>Vendedor → Sistema: iniciarVenta()</p>
            <p>Sistema → Producto: buscarProducto()</p>
            <p>Producto → Sistema: devolverProducto()</p>
            <p>Sistema → Venta: agregarProducto()</p>
            <p>Sistema → Vendedor: mostrarTotal()</p>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          En este ejemplo, el vendedor inicia una venta. El sistema busca el
          producto, recibe la información, lo agrega a la venta y finalmente
          muestra el total.
        </p>
      </section>

      {/* Ejemplo sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: registrar una venta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que nuestro sistema de ventas permite registrar una
          nueva venta. El proceso puede involucrar al vendedor, la interfaz
          gráfica, el controlador, la clase de venta y la base de datos.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-5xl overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Vendedor
   |
   | registrarVenta()
   v
Interfaz
   |
   | crearVenta()
   v
Controlador
   |
   | agregarProducto()
   v
Venta
   |
   | guardar()
   v
Base de Datos
   |
   | confirmar()
   v
Controlador
   |
   | mostrarResultado()
   v
Interfaz
   |
   v
Vendedor`}
          </pre>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          Este modelo permite identificar claramente qué componente recibe
          cada solicitud y cuál es su responsabilidad dentro del proceso.
        </p>
      </section>

      {/* Relación con casos de uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con los casos de uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de secuencia se relacionan directamente con los
          casos de uso. Mientras que un caso de uso describe una funcionalidad
          desde el punto de vista del usuario, el diagrama de secuencia
          muestra cómo se implementa esa funcionalidad mediante una serie
          de interacciones.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl">

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Caso de uso
            </h3>

            <p>
              Registrar una venta.
            </p>

            <p className="mt-3 text-sm">
              Describe qué quiere realizar el usuario.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Diagrama de secuencia
            </h3>

            <p>
              Muestra cómo interactúan los componentes para registrar la
              venta.
            </p>

            <p className="mt-3 text-sm">
              Describe cómo se realiza la operación.
            </p>
          </div>

        </div>
      </section>

      {/* Relación con arquitectura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con la arquitectura del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El diagrama de secuencia también ayuda a comprender la arquitectura
          de una aplicación. Permite observar cómo se comunican diferentes
          capas o componentes.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 mt-6 max-w-4xl">
          <p className="font-semibold mb-4">
            Ejemplo de una arquitectura por capas:
          </p>

          <div className="font-mono text-sm space-y-2">
            <p>Usuario</p>
            <p>↓</p>
            <p>Interfaz gráfica</p>
            <p>↓</p>
            <p>Controlador / Servicio</p>
            <p>↓</p>
            <p>Modelo / Repositorio</p>
            <p>↓</p>
            <p>Base de datos</p>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          De esta manera, el diagrama ayuda a verificar que las
          responsabilidades estén correctamente distribuidas entre los
          distintos componentes.
        </p>
      </section>

      {/* Fragmentos combinados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fragmentos de interacción
        </h2>

        <p className="leading-relaxed max-w-3xl">
          UML permite representar situaciones más complejas utilizando
          fragmentos combinados. Algunos de los más utilizados son:
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              alt
            </h3>
            <p className="mt-2">
              Representa diferentes alternativas según una condición.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              opt
            </h3>
            <p className="mt-2">
              Representa una acción opcional.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              loop
            </h3>
            <p className="mt-2">
              Representa una acción que se repite.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              par
            </h3>
            <p className="mt-2">
              Permite representar interacciones que pueden ejecutarse en
              paralelo.
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
          <li>Representar una funcionalidad concreta por diagrama.</li>
          <li>Utilizar nombres claros para los objetos y mensajes.</li>
          <li>Mantener el orden temporal de las acciones.</li>
          <li>Evitar diagramas excesivamente grandes.</li>
          <li>Mostrar solamente las interacciones relevantes.</li>
          <li>Relacionar los mensajes con métodos reales del sistema.</li>
          <li>Mantener coherencia con los casos de uso y requisitos.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Diseñar un diagrama de secuencia
          </h3>

          <p className="leading-relaxed">
            A partir del caso de uso <strong>“Registrar una venta”</strong>,
            diseñar un diagrama de secuencia que represente el proceso
            completo.
          </p>

          <p className="font-semibold mt-5 mb-3">
            El diagrama debe incluir:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Actor que inicia la operación.</li>
            <li>Interfaz gráfica.</li>
            <li>Controlador o servicio.</li>
            <li>Objeto Venta.</li>
            <li>Producto.</li>
            <li>Base de datos.</li>
            <li>Mensajes intercambiados.</li>
            <li>Resultado de la operación.</li>
          </ul>

          <p className="mt-5 leading-relaxed">
            Finalmente, comparar el diagrama realizado con la implementación
            del sistema y verificar que cada interacción representada tenga
            correspondencia con una operación real.
          </p>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <div className="bg-blue-900 text-white rounded-xl p-6 max-w-4xl">
          <p className="leading-relaxed">
            Los diagramas de secuencia permiten representar el comportamiento
            dinámico de un sistema y comprender cómo interactúan sus
            componentes para cumplir una determinada funcionalidad.
          </p>

          <p className="leading-relaxed mt-4">
            Son especialmente útiles durante el análisis, diseño y
            documentación técnica, ya que permiten transformar los
            requerimientos y casos de uso en una representación más cercana
            a la implementación del software.
          </p>
        </div>
      </section>

    </div>
  );
}