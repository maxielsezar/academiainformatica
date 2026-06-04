export default function IntroduccionInternetWebPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a Internet y la Web
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Internet es una red mundial de computadoras conectadas entre sí que
          permite intercambiar información y comunicarse desde cualquier lugar
          del mundo. Gracias a Internet podemos acceder a páginas web, enviar
          correos electrónicos, realizar videollamadas, descargar archivos y
          utilizar una gran variedad de servicios digitales.
        </p>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Internet y la Web
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>
            Aunque suelen utilizarse como sinónimos, Internet y la Web no son lo mismo:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Internet:</strong> es la infraestructura que conecta millones
              de dispositivos en todo el mundo.
            </li>
            <li>
              <strong>Web (WWW):</strong> es uno de los servicios que funciona sobre
              Internet y permite acceder a páginas y sitios web.
            </li>
          </ul>
        </div>
      </section>

      {/* Qué podemos hacer */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué podemos hacer con Internet?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Buscar información.</li>
          <li>Enviar y recibir correos electrónicos.</li>
          <li>Compartir archivos.</li>
          <li>Realizar videollamadas.</li>
          <li>Acceder a plataformas educativas.</li>
          <li>Comprar y vender productos.</li>
          <li>Utilizar redes sociales.</li>
          <li>Trabajar de forma colaborativa.</li>
        </ul>
      </section>

      {/* Conceptos importantes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conceptos Importantes
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-500">
              <tr>
                <th className="border px-4 py-2">Concepto</th>
                <th className="border px-4 py-2">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Sitio Web</td>
                <td className="border px-4 py-2">
                  Conjunto de páginas web relacionadas entre sí.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Página Web</td>
                <td className="border px-4 py-2">
                  Documento accesible mediante un navegador.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">URL</td>
                <td className="border px-4 py-2">
                  Dirección única que identifica una página web.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Servidor</td>
                <td className="border px-4 py-2">
                  Computadora que almacena y distribuye información en Internet.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Navegador</td>
                <td className="border px-4 py-2">
                  Programa utilizado para acceder a páginas web.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Sitios Web
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Google: buscador de información.</li>
          <li>YouTube: plataforma de videos.</li>
          <li>Wikipedia: enciclopedia digital.</li>
          <li>Gmail: servicio de correo electrónico.</li>
          <li>Drive: almacenamiento en la nube.</li>
        </ul>
      </section>

      {/* Beneficios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Beneficios de Internet
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Acceso rápido a información.</li>
          <li>Comunicación instantánea.</li>
          <li>Trabajo remoto y colaborativo.</li>
          <li>Educación a distancia.</li>
          <li>Acceso a servicios digitales.</li>
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
            Explica con tus palabras la diferencia entre Internet y la Web.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investiga tres sitios web que utilices frecuentemente y describe para qué sirven.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identifica la URL de una página web que visites habitualmente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Realiza una búsqueda en Internet sobre un tema de interés y registra los resultados encontrados.
          </div>

        </div>
      </section>

    </div>
  );
}