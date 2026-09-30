export default function FuncionesTextoPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones de Texto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de texto permiten trabajar con información formada
          por caracteres, palabras y frases dentro de una planilla de cálculo.
          Son especialmente útiles para organizar datos administrativos,
          limpiar información, combinar textos y obtener partes específicas
          de un dato.
        </p>
      </section>

      {/* ¿Qué son? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las funciones de texto?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Son funciones que permiten modificar, analizar o extraer
          información contenida en una celda. Pueden utilizarse para
          transformar nombres, apellidos, códigos, direcciones, correos
          electrónicos y otros datos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Si una celda contiene el texto:
          </p>

          <p className="font-mono mt-3">
            "JUAN PEREZ"
          </p>

          <p className="leading-relaxed mt-4">
            podemos utilizar diferentes funciones para convertirlo a
            minúsculas, extraer una parte del texto, contar sus caracteres
            o combinarlo con otro dato.
          </p>
        </div>
      </section>

      {/* MAYUSC */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          MAYUSC
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>MAYUSC</strong> convierte un texto a letras
          mayúsculas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =MAYUSC(A2)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene <strong>"juan pérez"</strong>, el resultado será:
          </p>

          <p className="font-mono mt-3">
            JUAN PÉREZ
          </p>
        </div>
      </section>

      {/* MINUSC */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          MINUSC
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>MINUSC</strong> convierte un texto a letras
          minúsculas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =MINUSC(A2)
          </p>

          <p className="leading-relaxed">
            Por ejemplo, si A2 contiene:
          </p>

          <p className="font-mono mt-3">
            JUAN PÉREZ
          </p>

          <p className="leading-relaxed mt-4">
            el resultado será:
          </p>

          <p className="font-mono mt-3">
            juan pérez
          </p>
        </div>
      </section>

      {/* NOMPROPIO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          NOMPROPIO
        </h2>

        <p className="leading-relaxed max-w-3xl">
          <strong>NOMPROPIO</strong> convierte la primera letra de cada
          palabra en mayúscula y el resto en minúscula.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =NOMPROPIO(A2)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene:
          </p>

          <p className="font-mono mt-3">
            JUAN PEREZ
          </p>

          <p className="leading-relaxed mt-4">
            el resultado será:
          </p>

          <p className="font-mono mt-3">
            Juan Perez
          </p>
        </div>
      </section>

      {/* LARGO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          LARGO
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>LARGO</strong> permite conocer la cantidad de
          caracteres que contiene un texto, incluyendo los espacios.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =LARGO(A2)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene:
          </p>

          <p className="font-mono mt-3">
            Esquel
          </p>

          <p className="leading-relaxed mt-4">
            el resultado será:
          </p>

          <p className="font-mono mt-3">
            6
          </p>
        </div>
      </section>

      {/* IZQUIERDA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          IZQUIERDA
        </h2>

        <p className="leading-relaxed max-w-3xl">
          <strong>IZQUIERDA</strong> permite extraer una cantidad determinada
          de caracteres desde el comienzo de un texto.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =IZQUIERDA(A2;4)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene:
          </p>

          <p className="font-mono mt-3">
            ADMINISTRACION
          </p>

          <p className="leading-relaxed mt-4">
            el resultado será:
          </p>

          <p className="font-mono mt-3">
            ADMI
          </p>
        </div>
      </section>

      {/* DERECHA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DERECHA
        </h2>

        <p className="leading-relaxed max-w-3xl">
          <strong>DERECHA</strong> extrae una cantidad determinada de
          caracteres desde el final de un texto.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =DERECHA(A2;4)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene:
          </p>

          <p className="font-mono mt-3">
            ADMINISTRACION
          </p>

          <p className="leading-relaxed mt-4">
            el resultado será:
          </p>

          <p className="font-mono mt-3">
            CION
          </p>
        </div>
      </section>

      {/* EXTRAE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          EXTRAE
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>EXTRAE</strong> permite obtener una parte de un
          texto indicando desde qué posición comenzar y cuántos caracteres
          extraer.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =EXTRAE(A2;3;5)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene:
          </p>

          <p className="font-mono mt-3">
            INFORMACION
          </p>

          <p className="leading-relaxed mt-4">
            la función comienza en el tercer carácter y extrae cinco
            caracteres.
          </p>
        </div>
      </section>

      {/* CONCATENAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          CONCATENAR
        </h2>

        <p className="leading-relaxed max-w-3xl">
          <strong>CONCATENAR</strong> permite unir diferentes textos o
          contenidos de celdas en un único resultado.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =CONCATENAR(A2;" ";B2)
          </p>

          <p className="leading-relaxed">
            Si A2 contiene <strong>"Juan"</strong> y B2 contiene
            <strong> "Pérez"</strong>, el resultado será:
          </p>

          <p className="font-mono mt-3">
            Juan Pérez
          </p>
        </div>
      </section>

      {/* Operador & */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Unir textos con el operador &
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Otra forma sencilla de unir textos es utilizar el operador
          <strong> &amp;</strong>.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =A2&amp;" "&amp;B2
          </p>

          <p className="leading-relaxed mt-4">
            Esta fórmula permite unir el contenido de A2 y B2 colocando un
            espacio entre ambos.
          </p>
        </div>
      </section>

      {/* ESPACIOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ESPACIOS
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>ESPACIOS</strong> elimina los espacios
          innecesarios de un texto, dejando un único espacio entre las
          palabras.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =ESPACIOS(A2)
          </p>

          <p className="leading-relaxed">
            Es útil cuando los datos fueron copiados desde diferentes
            documentos o sistemas y contienen espacios adicionales.
          </p>
        </div>
      </section>

      {/* SUSTITUIR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          SUSTITUIR
        </h2>

        <p className="leading-relaxed max-w-3xl">
          <strong>SUSTITUIR</strong> permite reemplazar una parte de un
          texto por otra.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =SUSTITUIR(A2;"SA";"SRL")
          </p>

          <p className="leading-relaxed">
            Puede utilizarse para corregir o actualizar información repetida
            dentro de una planilla.
          </p>
        </div>
      </section>

      {/* ENCONTRAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ENCONTRAR
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>ENCONTRAR</strong> permite determinar la
          posición en la que aparece un texto dentro de otro texto.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono mb-3">
            =ENCONTRAR("@";A2)
          </p>

          <p className="leading-relaxed">
            Puede utilizarse, por ejemplo, para localizar la posición del
            símbolo <strong>@</strong> dentro de una dirección de correo
            electrónico.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de texto son especialmente útiles cuando se recibe
          información proveniente de formularios, correos electrónicos,
          sistemas administrativos o archivos externos que necesitan ser
          organizados.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo: organización de clientes
          </h3>

          <p className="leading-relaxed mb-4">
            Una planilla contiene el nombre y apellido de cada cliente en
            columnas separadas:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Nombre</th>
                  <th className="border p-3 text-left">Apellido</th>
                  <th className="border p-3 text-left">Nombre completo</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Juan</td>
                  <td className="border p-3">Pérez</td>
                  <td className="border p-3 font-mono">
                    =A2&amp;" "&amp;B2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            De esta manera se puede generar automáticamente una columna con
            el nombre completo sin tener que escribir nuevamente los datos.
          </p>
        </div>
      </section>

      {/* Combinación de funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar funciones de texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones pueden combinarse para resolver tareas más
          complejas. Por ejemplo, se puede limpiar un texto y luego
          convertirlo a un formato determinado.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =NOMPROPIO(ESPACIOS(A2))
          </p>

          <p className="leading-relaxed mt-4">
            Primero se eliminan los espacios innecesarios y luego se aplica
            el formato de nombre propio.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Mantener los datos originales antes de realizar transformaciones.
          </li>
          <li>
            Utilizar funciones en lugar de modificar manualmente grandes
            cantidades de información.
          </li>
          <li>
            Verificar los espacios y caracteres especiales.
          </li>
          <li>
            Utilizar nombres de columnas claros.
          </li>
          <li>
            Combinar funciones cuando sea necesario.
          </li>
          <li>
            Comprobar los resultados antes de utilizar los datos en informes.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 1: Normalizar nombres
            </h3>

            <p className="leading-relaxed">
              Crear una lista de 15 nombres escritos de diferentes maneras.
              Utilizar <strong>MAYUSC</strong>, <strong>MINUSC</strong> y
              <strong> NOMPROPIO</strong> para generar diferentes formatos.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Crear nombres completos
            </h3>

            <p className="leading-relaxed">
              Crear columnas separadas para nombre y apellido. Utilizar
              <strong> CONCATENAR</strong> o el operador <strong>&amp;</strong>
              para generar automáticamente el nombre completo.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Analizar códigos
            </h3>

            <p className="leading-relaxed">
              Crear una lista de códigos de productos. Utilizar
              <strong> IZQUIERDA</strong>, <strong>DERECHA</strong> y
              <strong> EXTRAE</strong> para obtener diferentes partes de
              cada código.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Limpiar información
            </h3>

            <p className="leading-relaxed">
              Crear una lista con nombres que contengan espacios adicionales
              y diferentes formatos de escritura. Utilizar
              <strong> ESPACIOS</strong> y <strong>NOMPROPIO</strong> para
              normalizar la información.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Gestión de correos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 15 direcciones de correo
              electrónico. Utilizar funciones de texto para analizar sus
              contenidos y localizar caracteres como el símbolo
              <strong> @</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una empresa posee una lista de clientes cuyos nombres fueron
          cargados de diferentes maneras. Algunos aparecen completamente en
          mayúsculas, otros en minúsculas y otros contienen espacios
          innecesarios.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Crear una planilla que permita organizar y normalizar los datos.
          Utilizar <strong>ESPACIOS</strong>, <strong>NOMPROPIO</strong>,
          <strong> MAYUSC</strong>, <strong>MINUSC</strong>,
          <strong> IZQUIERDA</strong>, <strong>DERECHA</strong>,
          <strong> EXTRAE</strong> y funciones para unir textos cuando
          corresponda.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, presentar una tabla con la información original y otra
          con los datos procesados, explicando qué función se utilizó para
          resolver cada transformación.
        </p>
      </section>

    </div>
  );
}