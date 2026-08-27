export default function ModeloDatosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diseño del Modelo de Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Antes de construir una aplicación es necesario determinar qué
          información deberá manejar el sistema, cómo se organizarán los datos
          y qué relaciones existirán entre ellos. El modelo de datos permite
          representar esta información de manera estructurada.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo utilizaremos el modelo de datos como una herramienta
          de diseño y documentación. A partir de los requerimientos del sistema
          podremos identificar las entidades, sus atributos y las relaciones
          existentes entre ellas.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un modelo de datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un modelo de datos es una representación de la información que
          necesita manejar un sistema y de las relaciones que existen entre
          los diferentes elementos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Su objetivo es organizar los datos antes de implementarlos en una
          base de datos. De esta manera, los desarrolladores pueden comprender
          qué información debe almacenarse y cómo se relaciona.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Un modelo de datos permite definir:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Qué información necesita el sistema.</li>
            <li>Qué entidades existen.</li>
            <li>Qué atributos tiene cada entidad.</li>
            <li>Cómo se relacionan las entidades.</li>
            <li>Qué datos identifican de forma única cada registro.</li>
            <li>Qué información depende de otra.</li>
          </ul>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué diseñar el modelo de datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Diseñar el modelo de datos antes de crear la base de datos permite
          detectar problemas y tomar decisiones sobre la organización de la
          información antes de comenzar la implementación.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Organización
            </h3>

            <p>
              Permite organizar la información de manera estructurada y
              coherente.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Comunicación
            </h3>

            <p>
              Facilita la comunicación entre desarrolladores, analistas y
              usuarios.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Detección de errores
            </h3>

            <p>
              Permite detectar datos repetidos, relaciones incorrectas o
              información innecesaria.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Documentación
            </h3>

            <p>
              Proporciona una representación clara de la estructura de datos
              utilizada por el sistema.
            </p>
          </div>

        </div>
      </section>

      {/* Entidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entidades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una entidad representa un objeto, persona, concepto o elemento
          importante sobre el cual el sistema necesita almacenar información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En una base de datos relacional, generalmente una entidad se
          representa mediante una tabla.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplos de entidades
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Cliente.</li>
            <li>Producto.</li>
            <li>Venta.</li>
            <li>DetalleVenta.</li>
            <li>Usuario.</li>
            <li>Proveedor.</li>
          </ul>
        </div>
      </section>

      {/* Atributos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atributos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los atributos representan las características o propiedades de una
          entidad. Cada entidad posee un conjunto de atributos que permiten
          describirla.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplo: entidad Cliente
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>id</li>
            <li>nombre</li>
            <li>apellido</li>
            <li>dni</li>
            <li>telefono</li>
            <li>email</li>
          </ul>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          En una implementación relacional, estos atributos normalmente se
          transformarán en columnas de una tabla.
        </p>
      </section>

      {/* Identificadores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Identificación de las entidades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada entidad necesita una forma de identificar de manera única cada
          uno de sus registros. Para esto se utiliza normalmente una clave
          primaria.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplo
          </h3>

          <p>
            Si tenemos varios clientes llamados "Juan Pérez", el nombre no
            resulta suficiente para identificar un registro de manera única.
          </p>

          <div className="bg-blue-50 border rounded-lg p-4 mt-4">
            <p className="font-medium">
              Cliente → id, nombre, apellido, email
            </p>
          </div>

          <p className="mt-4">
            El atributo <strong>id</strong> permite distinguir cada cliente de
            los demás.
          </p>
        </div>
      </section>

      {/* Relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relaciones entre entidades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las entidades de un sistema normalmente no funcionan de manera
          independiente. Una de las principales tareas del modelado consiste
          en identificar cómo se relacionan entre sí.
        </p>

        <div className="space-y-4 max-w-3xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Cliente y Venta
            </h3>

            <p>
              Un cliente puede realizar varias ventas y cada venta pertenece a
              un cliente.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Venta y DetalleVenta
            </h3>

            <p>
              Una venta puede contener varios detalles, mientras que cada
              detalle pertenece a una venta.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Producto y DetalleVenta
            </h3>

            <p>
              Un producto puede aparecer en diferentes detalles de venta y cada
              detalle hace referencia a un producto.
            </p>
          </div>

        </div>
      </section>

      {/* Cardinalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cardinalidad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La cardinalidad permite indicar cuántos elementos de una entidad
          pueden estar relacionados con elementos de otra entidad.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Uno a uno — 1:1
            </h3>

            <p>
              Un elemento de una entidad se relaciona con un único elemento de
              otra entidad.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4 text-center">
              <p>Persona ↔ DNI</p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Uno a muchos — 1:N
            </h3>

            <p>
              Un elemento puede relacionarse con muchos elementos de otra
              entidad.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4 text-center">
              <p>Cliente → Ventas</p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Muchos a muchos — N:M
            </h3>

            <p>
              Muchos elementos de una entidad pueden relacionarse con muchos
              elementos de otra.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4 text-center">
              <p>Productos ↔ Ventas</p>
            </div>
          </div>

        </div>
      </section>

      {/* Modelo del sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modelo de datos del sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para nuestro sistema de ventas podemos identificar las principales
          entidades y sus relaciones.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

          <h3 className="font-semibold mb-4">
            Entidades principales
          </h3>

          <div className="space-y-4">

            <div className="border rounded-lg p-4">
              <p className="font-semibold">
                Cliente
              </p>

              <p className="mt-2">
                id, nombre, apellido, dni, teléfono, email
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold">
                Producto
              </p>

              <p className="mt-2">
                id, nombre, descripción, precio, stock
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold">
                Venta
              </p>

              <p className="mt-2">
                id, fecha, cliente_id, total
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold">
                DetalleVenta
              </p>

              <p className="mt-2">
                id, venta_id, producto_id, cantidad, precio
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Relaciones del sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relaciones del sistema de ventas
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Cliente → Venta
            </h3>

            <p>
              Un cliente puede realizar muchas ventas. Cada venta pertenece a
              un único cliente.
            </p>

            <p className="mt-3 font-medium">
              Cardinalidad: 1:N
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Venta → DetalleVenta
            </h3>

            <p>
              Una venta puede contener uno o varios productos mediante sus
              detalles.
            </p>

            <p className="mt-3 font-medium">
              Cardinalidad: 1:N
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Producto → DetalleVenta
            </h3>

            <p>
              Un producto puede formar parte de diferentes ventas a través de
              los registros de detalle.
            </p>

            <p className="mt-3 font-medium">
              Cardinalidad: 1:N
            </p>
          </div>

        </div>
      </section>

      {/* Modelo conceptual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modelo conceptual, lógico y físico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El diseño de datos puede realizarse en diferentes niveles. Cada nivel
          representa un mayor grado de detalle hasta llegar a la implementación
          concreta en una base de datos.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Modelo conceptual
            </h3>

            <p>
              Representa las entidades principales, sus características y
              relaciones sin preocuparse todavía por una tecnología específica.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Modelo lógico
            </h3>

            <p>
              Define con mayor detalle las tablas, atributos, claves y
              relaciones que formarán parte de la estructura de datos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Modelo físico
            </h3>

            <p>
              Representa cómo se implementará realmente la estructura en un
              motor de base de datos determinado.
            </p>
          </div>

        </div>
      </section>

      {/* Documentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El modelo de datos como documentación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El modelo de datos también forma parte de la documentación técnica
          del sistema. Permite que un desarrollador pueda comprender rápidamente
          cómo se organiza la información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Cuando otro programador necesita modificar el sistema, agregar una
          funcionalidad o realizar una consulta sobre la base de datos, el
          modelo documentado sirve como referencia.
        </p>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A partir de los requerimientos definidos para el sistema de ventas,
          elaborar un modelo de datos que represente las entidades, atributos y
          relaciones principales.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Identificar las entidades del sistema.</li>
            <li>Definir los atributos de cada entidad.</li>
            <li>Determinar la clave primaria de cada entidad.</li>
            <li>Identificar las relaciones entre las entidades.</li>
            <li>Determinar la cardinalidad de cada relación.</li>
            <li>Representar el modelo mediante un diagrama.</li>
            <li>Explicar brevemente las decisiones tomadas.</li>
          </ol>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El modelo de datos permite representar y organizar la información que
          necesita un sistema. Para construirlo debemos identificar entidades,
          atributos, claves, relaciones y cardinalidades.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Un modelo correctamente diseñado facilita la implementación de la
          base de datos y forma parte de la documentación técnica del proyecto.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Antes de crear las tablas, debemos comprender qué información
            necesita el sistema y cómo se relaciona.
          </p>
        </div>
      </section>

    </div>
  );
}