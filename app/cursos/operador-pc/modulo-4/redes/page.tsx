export default function TopologiasRedPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Topologías de Red
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La topología de red es la forma en que los dispositivos se organizan y
          conectan dentro de una red informática. La elección de una topología
          influye en el rendimiento, la administración, la seguridad y el costo
          de implementación de la red.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Conocer las principales topologías de red, comprender cómo funcionan y
          reconocer sus ventajas y desventajas en distintos entornos.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Topología de Red?
        </h2>

        <p className="max-w-3xl">
          Una topología de red define la disposición física o lógica de los
          dispositivos conectados. Describe cómo computadoras, impresoras,
          switches, routers y otros equipos se comunican entre sí.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la Topología
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Determina la forma de comunicación entre dispositivos.</li>
          <li>Influye en la velocidad de transmisión de datos.</li>
          <li>Facilita el mantenimiento de la red.</li>
          <li>Impacta en los costos de instalación.</li>
          <li>Afecta la escalabilidad y crecimiento de la red.</li>
        </ul>
      </section>

      {/* Bus */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Topología en Bus
        </h2>

        <p className="max-w-3xl mb-4">
          Todos los dispositivos se conectan a un único cable principal llamado
          "bus". Los datos viajan por este cable y son recibidos por todos los
          equipos.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="font-mono text-center">
            PC ── PC ── PC ── PC ── PC
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Instalación sencilla.</li>
          <li>Menor cantidad de cableado.</li>
          <li>Bajo costo.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Si el cable principal falla, toda la red deja de funcionar.</li>
          <li>Difícil detectar problemas.</li>
          <li>Bajo rendimiento en redes grandes.</li>
        </ul>
      </section>

      {/* Estrella */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Topología en Estrella
        </h2>

        <p className="max-w-3xl mb-4">
          Todos los dispositivos se conectan a un equipo central, generalmente
          un switch o hub. Es la topología más utilizada actualmente.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className="text-center">
{`      PC
       |
PC -- SWITCH -- PC
       |
      PC`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Fácil administración.</li>
          <li>Si falla una computadora, el resto sigue funcionando.</li>
          <li>Buen rendimiento.</li>
          <li>Fácil expansión.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Mayor cantidad de cableado.</li>
          <li>Dependencia del dispositivo central.</li>
        </ul>
      </section>

      {/* Anillo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Topología en Anillo
        </h2>

        <p className="max-w-3xl mb-4">
          Los dispositivos forman un círculo cerrado. Los datos circulan de un
          equipo a otro hasta llegar a su destino.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="font-mono text-center">
            PC → PC → PC → PC → PC → PC
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Transmisión ordenada de datos.</li>
          <li>Menos colisiones en la red.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Una falla puede afectar toda la red.</li>
          <li>Mantenimiento más complejo.</li>
        </ul>
      </section>

      {/* Malla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Topología en Malla
        </h2>

        <p className="max-w-3xl">
          Cada dispositivo se conecta con varios o todos los demás dispositivos.
          Es muy utilizada en sistemas críticos donde se requiere alta
          disponibilidad.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Alta tolerancia a fallos.</li>
          <li>Gran confiabilidad.</li>
          <li>Múltiples rutas para transmitir información.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Instalación costosa.</li>
          <li>Configuración compleja.</li>
          <li>Gran cantidad de cableado.</li>
        </ul>
      </section>

      {/* Árbol */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Topología en Árbol
        </h2>

        <p className="max-w-3xl mb-4">
          Combina características de la topología en estrella y bus. Los
          dispositivos se organizan en niveles jerárquicos.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className="text-center">
{`        Router
           |
        Switch
       /      \
   Switch   Switch
    /  \\      /  \\
  PC  PC   PC  PC`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Fácil ampliación.</li>
          <li>Organización jerárquica.</li>
          <li>Ideal para redes empresariales.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Desventajas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Mayor complejidad.</li>
          <li>Dependencia de los nodos principales.</li>
        </ul>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación de Topologías
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="">
              <tr>
                <th className="border px-4 py-2">Topología</th>
                <th className="border px-4 py-2">Costo</th>
                <th className="border px-4 py-2">Facilidad de Administración</th>
                <th className="border px-4 py-2">Uso Actual</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Bus</td>
                <td className="border px-4 py-2">Bajo</td>
                <td className="border px-4 py-2">Media</td>
                <td className="border px-4 py-2">Muy poco frecuente</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Estrella</td>
                <td className="border px-4 py-2">Medio</td>
                <td className="border px-4 py-2">Alta</td>
                <td className="border px-4 py-2">Muy utilizada</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Anillo</td>
                <td className="border px-4 py-2">Medio</td>
                <td className="border px-4 py-2">Baja</td>
                <td className="border px-4 py-2">Poco frecuente</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Malla</td>
                <td className="border px-4 py-2">Alto</td>
                <td className="border px-4 py-2">Media</td>
                <td className="border px-4 py-2">Redes críticas</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Árbol</td>
                <td className="border px-4 py-2">Medio-Alto</td>
                <td className="border px-4 py-2">Alta</td>
                <td className="border px-4 py-2">Empresas y organizaciones</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
            {/* Alcance de las Redes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clasificación de Redes según su Alcance
        </h2>

        <p className="max-w-3xl mb-6">
          Las redes informáticas también pueden clasificarse según el área
          geográfica que cubren. Dependiendo de la distancia entre los equipos,
          encontramos distintos tipos de redes.
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Tipo de Red</th>
                <th className="border px-4 py-2">Alcance</th>
                <th className="border px-4 py-2">Ejemplo</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">PAN</td>
                <td className="border px-4 py-2">
                  Pocos metros alrededor de una persona.
                </td>
                <td className="border px-4 py-2">
                  Celular conectado a auriculares Bluetooth.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">LAN</td>
                <td className="border px-4 py-2">
                  Una habitación, hogar, oficina o edificio.
                </td>
                <td className="border px-4 py-2">
                  Red de una escuela o empresa.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">CAN</td>
                <td className="border px-4 py-2">
                  Varias LAN dentro de un campus o institución.
                </td>
                <td className="border px-4 py-2">
                  Universidad con varios edificios conectados.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">MAN</td>
                <td className="border px-4 py-2">
                  Una ciudad o área metropolitana.
                </td>
                <td className="border px-4 py-2">
                  Red que conecta dependencias municipales.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">WAN</td>
                <td className="border px-4 py-2">
                  Grandes distancias entre ciudades o países.
                </td>
                <td className="border px-4 py-2">
                  La red de Internet.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">GAN</td>
                <td className="border px-4 py-2">
                  Alcance global a nivel mundial.
                </td>
                <td className="border px-4 py-2">
                  Redes internacionales de telecomunicaciones.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Descripción de cada red */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Redes más Utilizados
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              PAN (Personal Area Network)
            </h3>
            <p>
              Es una red personal utilizada para conectar dispositivos cercanos,
              como teléfonos, relojes inteligentes, auriculares Bluetooth o
              impresoras personales.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              LAN (Local Area Network)
            </h3>
            <p>
              Es la red más común. Conecta computadoras y dispositivos dentro de
              una casa, oficina, laboratorio o escuela mediante cables Ethernet
              o Wi-Fi.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              CAN (Campus Area Network)
            </h3>
            <p>
              Conecta varias redes LAN ubicadas dentro de un mismo campus,
              universidad, parque industrial o institución de gran tamaño.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              MAN (Metropolitan Area Network)
            </h3>
            <p>
              Permite conectar redes distribuidas a lo largo de una ciudad o área
              metropolitana.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              WAN (Wide Area Network)
            </h3>
            <p>
              Interconecta redes ubicadas en diferentes ciudades, provincias o
              países. Internet es el ejemplo más conocido de una WAN.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              GAN (Global Area Network)
            </h3>
            <p>
              Es una red que opera a escala mundial y conecta múltiples redes
              WAN. Se utiliza en grandes organizaciones internacionales y
              sistemas globales de comunicación.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Práctico
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Un celular conectado a auriculares Bluetooth → PAN.</li>
            <li>La red informática de una escuela → LAN.</li>
            <li>Los edificios de una universidad conectados → CAN.</li>
            <li>Las oficinas municipales conectadas en una ciudad → MAN.</li>
            <li>La conexión entre sucursales de una empresa en distintos países → WAN.</li>
            <li>Internet conectando millones de redes en todo el mundo → GAN.</li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica con tus palabras qué es una topología de red.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Dibuja una red con topología en estrella para 5 computadoras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga qué topología utiliza el aula de informática de tu institución.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Completa una tabla comparando ventajas y desventajas de las topologías Bus, Estrella y Malla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad Integradora</p>
            Diseña una red para una oficina con 10 computadoras, una impresora y acceso a Internet. Indica qué topología utilizarías y justifica tu elección.
          </div>

        </div>
      </section>

    </div>
  );
}