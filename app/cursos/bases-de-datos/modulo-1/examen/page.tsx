import Link from "next/link";

export default function ExamenModulo1Page() {
  return (
    <main className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-5">
          Examen del Módulo 1: Base de datos para un aeropuerto
        </h1>

        <p className="text-lg leading-relaxed">
          En este examen práctico deberás analizar una situación real y
          diseñar una base de datos relacional utilizando Microsoft Access.
        </p>

        <p className="mt-4 leading-relaxed">
          El objetivo es aplicar los conceptos trabajados durante el módulo:
          tablas, campos, registros, claves primarias, claves secundarias,
          relaciones, normalización e integridad referencial.
        </p>
      </section>

      {/* Situación problemática */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Situación problemática
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Un aeropuerto necesita informatizar la gestión de sus operaciones.
            Actualmente, gran parte de la información se encuentra registrada
            en diferentes planillas, lo que dificulta organizar y consultar
            correctamente los datos.
          </p>

          <p className="mt-4 leading-relaxed">
            Se solicita diseñar y desarrollar una base de datos en Microsoft
            Access que permita organizar la información relacionada con los
            pasajeros, pasajes, vuelos, aeropuertos, aviones, mantenimiento,
            pilotos y personal de a bordo.
          </p>
        </div>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Objetivo del examen
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Analizar una situación problemática.",
            "Identificar las entidades necesarias.",
            "Diseñar tablas correctamente estructuradas.",
            "Definir claves primarias.",
            "Identificar claves secundarias.",
            "Establecer relaciones entre tablas.",
            "Detectar y reducir la repetición de información.",
            "Aplicar conceptos de normalización.",
            "Utilizar integridad referencial.",
            "Construir una base de datos funcional en Microsoft Access.",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl p-5"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parte 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 1: Análisis del sistema
        </h2>

        <p className="leading-relaxed mb-5">
          Antes de comenzar a crear las tablas, analizar cuidadosamente la
          situación planteada e identificar las entidades que deberían existir
          en la base de datos.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Pasajeros",
              fields: [
                "Documento",
                "Nombre",
                "Apellido",
                "Fecha de nacimiento",
                "Nacionalidad",
                "Teléfono",
                "Correo electrónico",
              ],
            },
            {
              title: "Pasajes",
              fields: [
                "Número de pasaje",
                "Pasajero",
                "Vuelo",
                "Fecha de compra",
                "Número de asiento",
                "Clase",
                "Estado",
              ],
            },
            {
              title: "Vuelos",
              fields: [
                "Número de vuelo",
                "Aeropuerto de origen",
                "Aeropuerto de destino",
                "Fecha",
                "Hora de salida",
                "Hora de llegada",
                "Avión asignado",
                "Estado del vuelo",
              ],
            },
            {
              title: "Aeropuertos",
              fields: [
                "Código IATA",
                "Nombre",
                "Ciudad",
                "Provincia o estado",
                "País",
              ],
            },
            {
              title: "Aviones",
              fields: [
                "Matrícula",
                "Modelo",
                "Fabricante",
                "Capacidad",
                "Año de fabricación",
                "Estado",
              ],
            },
            {
              title: "Mantenimiento",
              fields: [
                "Avión",
                "Fecha",
                "Tipo de mantenimiento",
                "Descripción",
                "Técnico responsable",
                "Estado",
                "Próximo mantenimiento",
              ],
            },
            {
              title: "Pilotos",
              fields: [
                "Identificación",
                "Documento",
                "Nombre",
                "Apellido",
                "Licencia",
                "Vencimiento de licencia",
                "Horas de vuelo",
              ],
            },
            {
              title: "Personal de a bordo",
              fields: [
                "Identificación",
                "Documento",
                "Nombre",
                "Apellido",
                "Cargo",
                "Fecha de ingreso",
              ],
            },
          ].map((entity) => (
            <div
              key={entity.title}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {entity.title}
              </h3>

              <ul className="list-disc pl-5 space-y-2">
                {entity.fields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Parte 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 2: Crear la base de datos
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Crear una nueva base de datos en Microsoft Access con el nombre:
          </p>

          <div className="mt-4 p-4 border rounded-lg font-mono">
            Aeropuerto.accdb
          </div>

          <p className="mt-5 leading-relaxed">
            La base deberá estar formada por diferentes tablas relacionadas.
            No se deberá almacenar toda la información en una única tabla.
          </p>
        </div>
      </section>

      {/* Tablas obligatorias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 3: Tablas obligatorias
        </h2>

        <p className="leading-relaxed mb-5">
          La base de datos deberá contener, como mínimo, las siguientes
          entidades:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Pasajeros",
            "Pasajes",
            "Vuelos",
            "Aeropuertos",
            "Aviones",
            "Mantenimiento",
            "Pilotos",
            "Personal de a bordo",
          ].map((table) => (
            <div
              key={table}
              className="border border-blue-200 rounded-xl p-5 text-center"
            >
              <p className="font-semibold text-blue-900">{table}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-4 border-blue-700 pl-5">
          <p className="leading-relaxed">
            Para cada tabla deberás decidir qué campos son necesarios, qué
            tipo de dato corresponde a cada campo y cuál será su clave
            primaria.
          </p>
        </div>
            <div className="mt-5 border border-blue-200 rounded-xl p-5">
          <p className="leading-relaxed">
            <strong>Importante:</strong> los aeropuertos deberán relacionarse
            con los vuelos tanto como aeropuerto de origen como aeropuerto de
            destino.
          </p>
        </div>
      </section>


      {/* Diseño de tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 4: Diseño de las tablas
        </h2>

        <p className="leading-relaxed mb-5">
          Para cada una de las tablas deberás determinar:
        </p>

        <div className="border rounded-xl p-6">
          <ol className="list-decimal pl-6 space-y-3">
            <li>Nombre de la tabla.</li>
            <li>Campos necesarios.</li>
            <li>Tipo de dato de cada campo.</li>
            <li>Propiedades de los campos cuando corresponda.</li>
            <li>Clave primaria.</li>
            <li>Claves secundarias.</li>
          </ol>
        </div>
      </section>

      {/* Relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 5: Relaciones entre las tablas
        </h2>

        <p className="leading-relaxed mb-5">
          Establecer las relaciones necesarias utilizando el Diseñador de
          relaciones de Microsoft Access.
        </p>

        <div className="space-y-4">
          {[
            "Pasajeros → Pasajes",
            "Vuelos → Pasajes",
            "Aviones → Vuelos",
            "Aviones → Mantenimiento",
            "Aeropuertos → Vuelos como origen",
            "Aeropuertos → Vuelos como destino",
            "Pilotos → Vuelos",
            "Personal de a bordo → Vuelos",
          ].map((relation) => (
            <div
              key={relation}
              className="border rounded-xl p-5"
            >
              <p className="font-semibold text-blue-900">{relation}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Determinar para cada relación si corresponde a una relación
            <strong> 1:N</strong> o <strong>N:N</strong>.
          </p>
        </div>
      </section>

      {/* Relaciones N:N */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 6: Relaciones muchos a muchos
        </h2>

        <p className="leading-relaxed">
          Analizar especialmente las relaciones entre <strong>Pilotos</strong>{" "}
          y <strong>Vuelos</strong>, y entre{" "}
          <strong>Personal de a bordo</strong> y <strong>Vuelos</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pilotos y vuelos
            </h3>

            <p className="leading-relaxed">
              Un piloto puede participar en diferentes vuelos y un vuelo puede
              contar con más de un piloto.
            </p>

            <p className="mt-4 font-semibold">Posible relación: N:N</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Personal de a bordo y vuelos
            </h3>

            <p className="leading-relaxed">
              Un integrante del personal puede participar en diferentes vuelos
              y un vuelo puede contar con varios integrantes.
            </p>

            <p className="mt-4 font-semibold">Posible relación: N:N</p>
          </div>
        </div>

        <div className="mt-6 border-l-4 border-blue-700 pl-5">
          <p className="leading-relaxed">
            Resolver las relaciones N:N mediante tablas intermedias.
          </p>
        </div>
      </section>

      {/* Normalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 7: Normalización
        </h2>

        <p className="leading-relaxed mb-5">
          Analizar la siguiente tabla incorrectamente diseñada:
        </p>
        <div className="flex justify-between items-center p-4 rounded-xl border">
              <div>
                <p className="font-medium">Base de Datos de Aeropuerto</p>
              </div>

              <a
                href={"/bd/Aeropuerto.accdb"}
                download
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Descargar
              </a>
        </div>
        <div className="mt-6 border rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Responder
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>¿Qué información se encuentra repetida?</li>
            <li>¿Qué problemas puede generar esa repetición?</li>
            <li>¿Qué ocurriría si cambia la matrícula del avión?</li>
            <li>¿Qué ocurriría si cambia la licencia del piloto?</li>
            <li>
              ¿Por qué no resulta conveniente almacenar toda la información en
              una única tabla?
            </li>
            <li>¿Qué tablas crearías para solucionar el problema?</li>
          </ol>
        </div>
      </section>

      {/* Integridad referencial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 8: Integridad referencial
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed mb-5">
            Configurar las relaciones utilizando la opción de{" "}
            <strong>integridad referencial</strong>.
          </p>

          <p className="leading-relaxed">
            Luego analizar qué sucede al intentar realizar las siguientes
            operaciones:
          </p>

          <ol className="list-decimal pl-6 mt-5 space-y-3">
            <li>Crear un pasaje para un pasajero inexistente.</li>
            <li>Crear un vuelo utilizando un avión inexistente.</li>
            <li>Registrar mantenimiento para un avión inexistente.</li>
            <li>Asignar un vuelo a un aeropuerto inexistente.</li>
            <li>Eliminar un avión que tenga vuelos asociados.</li>
            <li>Eliminar un pasajero que tenga pasajes registrados.</li>
          </ol>

          <p className="mt-6 font-semibold text-blue-900">
            Explicar por qué la integridad referencial es importante para
            mantener la información consistente.
          </p>
        </div>
      </section>

      {/* Carga de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 9: Carga de datos
        </h2>

        <p className="leading-relaxed mb-5">
          Una vez diseñada la estructura, cargar datos ficticios y coherentes
          entre sí.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["Pasajeros", "15"],
            ["Pasajes", "10"],
            ["Vuelos", "5"],
            ["Aeropuertos", "5"],
            ["Aviones", "4"],
            ["Mantenimientos", "8"],
            ["Pilotos", "5"],
            ["Personal de a bordo", "8"],
          ].map(([nombre, cantidad]) => (
            <div
              key={nombre}
              className="border rounded-xl p-5 text-center"
            >
              <p className="text-2xl font-bold text-blue-900">
                {cantidad}
              </p>
              <p className="mt-2">{nombre}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-4 border-blue-700 pl-5">
          <p className="leading-relaxed">
            Los datos deberán ser coherentes. Por ejemplo, no deberá existir
            un pasaje asociado a un pasajero que no esté registrado en la
            tabla correspondiente.
          </p>
        </div>
      </section>

      {/* Reflexión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 10: Reflexión final
        </h2>

        <div className="border rounded-xl p-6">
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              ¿Por qué no sería conveniente almacenar pasajeros, aviones,
              pilotos y vuelos en una única tabla?
            </li>

            <li>
              ¿Qué ventajas tiene utilizar claves primarias?
            </li>

            <li>
              ¿Qué función cumplen las claves secundarias?
            </li>

            <li>
              ¿Qué problemas pueden aparecer si se repiten los datos?
            </li>

            <li>
              ¿Por qué es importante utilizar relaciones entre tablas?
            </li>

            <li>
              ¿Qué función cumple la integridad referencial?
            </li>

            <li>
              ¿Qué diferencia existe entre una relación 1:N y una relación
              N:N?
            </li>

            <li>
              ¿Por qué algunas relaciones N:N necesitan una tabla intermedia?
            </li>
          </ol>
        </div>
      </section>

      {/* Desafío adicional */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Desafío adicional
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Agregar una nueva entidad denominada{" "}
            <strong>Terminales</strong>.
          </p>

          <p className="mt-4 leading-relaxed">
            La tabla deberá permitir registrar las diferentes terminales del
            aeropuerto.
          </p>

          <p className="mt-4 font-semibold">Deberá contener, como mínimo:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>IDTerminal</li>
            <li>NumeroTerminal</li>
            <li>Nombre</li>
            <li>Descripcion</li>
          </ul>

          <p className="mt-5 leading-relaxed">
            Analizar cómo podría relacionarse esta información con los vuelos
            y modificar el diseño de la base de datos si fuera necesario.
          </p>
        </div>
      </section>

      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Entrega del examen
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed mb-4">
            El estudiante deberá entregar:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Archivo <strong>Aeropuerto.accdb</strong>.</li>
            <li>Todas las tablas creadas.</li>
            <li>Claves primarias correctamente configuradas.</li>
            <li>Claves secundarias.</li>
            <li>Relaciones entre las tablas.</li>
            <li>Integridad referencial.</li>
            <li>Datos de prueba.</li>
            <li>Tablas intermedias para las relaciones N:N.</li>
            <li>Respuestas de las preguntas teóricas.</li>
          </ul>
        </div>
      </section>

      {/* Condición */}
      <section className="border-2 border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Condición del examen
        </h2>

        <p className="leading-relaxed">
          La estructura final de la base de datos no se entrega resuelta. El
          estudiante deberá analizar el problema y tomar las decisiones
          necesarias para determinar:
        </p>

        <ul className="list-disc pl-6 mt-5 space-y-3">
          <li>Qué tablas necesita.</li>
          <li>Qué campos debe contener cada tabla.</li>
          <li>Qué campo será la clave primaria.</li>
          <li>Qué campos serán claves secundarias.</li>
          <li>Qué relaciones existen.</li>
          <li>Qué relaciones son 1:N y cuáles N:N.</li>
          <li>Qué tablas intermedias son necesarias.</li>
          <li>Cómo evitar la repetición innecesaria de información.</li>
        </ul>
      </section>

      {/* Cierre */}
      <section className="border border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Objetivo final
        </h2>

        <p className="leading-relaxed">
          El objetivo del examen es comprobar que el estudiante puede analizar
          una situación real, identificar la información necesaria y
          transformarla en una base de datos relacional correctamente
          estructurada.
        </p>

        <p className="mt-4 leading-relaxed">
          La solución deberá demostrar la aplicación de los conceptos
          trabajados durante el módulo:
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "Tablas",
            "Campos",
            "Registros",
            "Claves",
            "Relaciones",
            "Normalización",
            "Integridad referencial",
          ].map((concepto) => (
            <span
              key={concepto}
              className="px-4 py-2 rounded-full text-blue-900 font-medium"
            >
              {concepto}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}