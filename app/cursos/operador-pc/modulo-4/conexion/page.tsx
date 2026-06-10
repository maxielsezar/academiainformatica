export default function ConexionInternetPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cómo Conectarse a Internet: Cable Ethernet, Switch y Router
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Para acceder a Internet es necesario contar con una red que permita la
          comunicación entre los dispositivos y el proveedor del servicio. En una
          red doméstica o empresarial intervienen diferentes equipos, entre ellos
          el cable Ethernet, el switch y el router.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Comprender cómo funciona una conexión a Internet e identificar los
          principales dispositivos utilizados en una red informática.
        </p>
      </section>

      {/* Internet */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo Llega Internet a Nuestra Computadora?
        </h2>

        <p className="max-w-3xl mb-4">
          El proveedor de Internet (ISP) envía la conexión hasta nuestro hogar o
          empresa. Desde allí, el router distribuye la conexión a los diferentes
          dispositivos mediante cables de red o Wi-Fi.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="font-semibold">
            Proveedor de Internet → Router → Switch (opcional) → Computadoras y Dispositivos
          </p>
        </div>
      </section>

      {/* Ethernet */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Cable Ethernet?
        </h2>

        <p className="max-w-3xl">
          El cable Ethernet es un medio físico utilizado para transmitir datos
          entre dispositivos de una red. Permite una conexión estable y rápida,
          generalmente más confiable que una conexión inalámbrica.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características del Cable Ethernet
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utiliza conectores RJ-45.</li>
          <li>Transmite datos a alta velocidad.</li>
          <li>Reduce interferencias respecto al Wi-Fi.</li>
          <li>Es ampliamente utilizado en hogares y empresas.</li>
          <li>Permite conexiones más estables para juegos y trabajo.</li>
        </ul>
      </section>

      {/* Categorías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Categorías de Cables Ethernet
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Categoría</th>
                <th className="border px-4 py-2">Velocidad Aproximada</th>
                <th className="border px-4 py-2">Uso Habitual</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Cat5e</td>
                <td className="border px-4 py-2">1 Gbps</td>
                <td className="border px-4 py-2">Redes domésticas</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Cat6</td>
                <td className="border px-4 py-2">1 a 10 Gbps</td>
                <td className="border px-4 py-2">Hogares y oficinas</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Cat6a</td>
                <td className="border px-4 py-2">10 Gbps</td>
                <td className="border px-4 py-2">Empresas y servidores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Router */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Router?
        </h2>

        <p className="max-w-3xl">
          El router es el dispositivo encargado de conectar una red local con
          Internet. Recibe la señal del proveedor y la distribuye a computadoras,
          teléfonos, televisores y otros equipos conectados.
        </p>
      </section>

      {/* Funciones Router */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones del Router
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Distribuir la conexión a Internet.</li>
          <li>Asignar direcciones IP a los dispositivos.</li>
          <li>Crear redes Wi-Fi.</li>
          <li>Gestionar el tráfico de datos.</li>
          <li>Brindar funciones básicas de seguridad.</li>
        </ul>
      </section>

      {/* Switch */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Switch?
        </h2>

        <p className="max-w-3xl">
          Un switch es un dispositivo de red que permite conectar múltiples
          computadoras y equipos mediante cables Ethernet dentro de una misma red
          local. Es muy utilizado en oficinas, escuelas y empresas.
        </p>
      </section>

      {/* Funciones switch */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones del Switch
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Conectar varios dispositivos en una red local.</li>
          <li>Transmitir datos entre equipos de manera eficiente.</li>
          <li>Expandir la cantidad de puertos disponibles.</li>
          <li>Mejorar el rendimiento de la red interna.</li>
        </ul>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre Router y Switch
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Router</th>
                <th className="border px-4 py-2">Switch</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Conecta la red local con Internet.
                </td>
                <td className="border px-4 py-2">
                  Conecta dispositivos dentro de la red local.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Asigna direcciones IP.
                </td>
                <td className="border px-4 py-2">
                  Transmite datos entre equipos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Generalmente incluye Wi-Fi.
                </td>
                <td className="border px-4 py-2">
                  Generalmente funciona solo mediante cable.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de una Red de Oficina
        </h2>

        <div className="border p-6 rounded-xl">
          <p>
            Una oficina recibe Internet mediante un router. Como el router tiene
            pocos puertos disponibles, se conecta un switch para ampliar la
            cantidad de conexiones. Luego se conectan las computadoras mediante
            cables Ethernet al switch para que todas puedan acceder a Internet.
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de una Red Cableada
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mayor estabilidad de conexión.</li>
          <li>Menor latencia.</li>
          <li>Mayor velocidad de transferencia.</li>
          <li>Menos interferencias que las redes Wi-Fi.</li>
          <li>Mayor seguridad en determinados entornos.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Identifica en tu hogar o institución educativa dónde se encuentra el router.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Observa un cable Ethernet e identifica el conector RJ-45.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga cuántos puertos Ethernet posee tu router.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Realiza un esquema simple mostrando cómo se conectan el proveedor de Internet, el router, el switch y las computadoras.
          </div>

        </div>
      </section>

    </div>
  );
}