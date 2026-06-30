import CodeBlock from "@/app/components/CodeBlock";

export default function FormasNormalesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formas Normales y Normalización de Bases de Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La normalización es el proceso de organizar una base de datos para
          reducir duplicación de información, evitar inconsistencias y mejorar
          el mantenimiento del sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Para lograrlo se utilizan reglas llamadas
          <strong> Formas Normales</strong>.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué normalizar?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una base mal diseñada puede provocar:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Datos repetidos.</li>
          <li>Errores al actualizar información.</li>
          <li>Eliminaciones accidentales.</li>
          <li>Mayor consumo de almacenamiento.</li>
          <li>Consultas más difíciles.</li>
        </ul>
      </section>

      {/* Ejemplo inicial */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Tabla No Normalizada
        </h2>

        <CodeBlock
          code={`VENTAS

id | cliente | telefono | producto | precio
--------------------------------------------
1  | Ana     | 1111     | Mouse    | 10000
2  | Ana     | 1111     | Teclado  | 25000
3  | Juan    | 2222     | Monitor  | 80000`}
        />

        <p className="leading-relaxed max-w-3xl mt-6">
          Observá que el cliente y el teléfono se repiten varias veces.
        </p>

      </section>

      {/* 1FN */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Primera Forma Normal (1FN)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla está en Primera Forma Normal cuando:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Cada columna almacena un solo valor.</li>
          <li>No existen listas dentro de una celda.</li>
          <li>Cada fila es única.</li>
        </ul>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          Una celda → Un valor
        </div>

        <CodeBlock
          code={`INCORRECTO

cliente
Ana, Juan


CORRECTO

cliente
Ana
Juan`}
        />

      </section>

      {/* 2FN */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Segunda Forma Normal (2FN)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla cumple 2FN cuando:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Ya cumple 1FN.</li>
          <li>Todos los atributos dependen completamente de la clave primaria.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-6">
          Debemos separar datos que pertenecen a entidades diferentes.
        </p>

        <CodeBlock
          code={`CLIENTES

id
nombre
telefono


VENTAS

id
cliente_id`}
        />

      </section>

      {/* 3FN */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tercera Forma Normal (3FN)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla cumple 3FN cuando:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Ya cumple 2FN.</li>
          <li>No existen dependencias transitivas.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-6">
          Es decir: una columna no debe depender de otra columna que no sea la
          clave primaria.
        </p>

        <CodeBlock
          code={`INCORRECTO

cliente
ciudad
codigo_postal


codigo_postal →
determina ciudad


CORRECTO

CLIENTE
↓

CODIGO_POSTAL`}
        />

      </section>

      {/* BCNF */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Forma Normal de Boyce-Codd (BCNF)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es una versión más estricta de 3FN.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Toda dependencia funcional debe originarse desde una clave candidata.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          Generalmente se utiliza en modelos más complejos.
        </div>

      </section>

      {/* Ejemplo completo */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Aplicado al Sistema de Ventas
        </h2>

        <CodeBlock
          code={`CLIENTES
---------
id
nombre


PRODUCTOS
---------
id
nombre
precio


VENTAS
---------
id
cliente_id


DETALLE_VENTA
---------
venta_id
producto_id
cantidad`}
        />

        <p className="leading-relaxed max-w-3xl mt-6">
          Ahora cada entidad almacena únicamente la información que le
          corresponde.
        </p>

      </section>

      {/* Ventajas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Normalizar
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Menor duplicación.</li>

          <li>Mayor consistencia.</li>

          <li>Más fácil de mantener.</li>

          <li>Consultas más claras.</li>

          <li>Menos errores.</li>

        </ul>

      </section>

      {/* Desnormalizar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Siempre conviene normalizar?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No necesariamente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En algunos sistemas grandes se desnormalizan ciertas tablas para
          mejorar rendimiento en consultas específicas.
        </p>

      </section>

      {/* Resumen */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen de Formas Normales
        </h2>

        <div className="overflow-x-auto">

          <table className="border-collapse border">

            <thead>

              <tr>

                <th className="border p-3">
                  Forma
                </th>

                <th className="border p-3">
                  Objetivo
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  1FN
                </td>

                <td className="border p-3">
                  Valores atómicos
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  2FN
                </td>

                <td className="border p-3">
                  Eliminar dependencias parciales
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  3FN
                </td>

                <td className="border p-3">
                  Eliminar dependencias transitivas
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  BCNF
                </td>

                <td className="border p-3">
                  Dependencias desde claves
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Actividades */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            Identificar problemas en una tabla no normalizada.
          </div>

          <div className="border p-6 rounded-xl">
            Transformar una tabla a 1FN.
          </div>

          <div className="border p-6 rounded-xl">
            Separar entidades para lograr 2FN.
          </div>

          <div className="border p-6 rounded-xl">
            Eliminar dependencias transitivas para llegar a 3FN.
          </div>

          <div className="border p-6 rounded-xl">
            Diseñar el modelo normalizado del sistema de ventas.
          </div>

        </div>

      </section>

    </div>
  );
}