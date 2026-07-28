
export default function GPUPage() {
  return (
    <main className= "space-y-14">

      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        GPU (Unidad de Procesamiento Gráfico)
      </h1>

      <p className="leading-relaxed max-w-3xl">
        La GPU es el componente encargado de procesar los gráficos de la computadora.
        Se ocupa de generar imágenes, videos y animaciones que luego se muestran en el monitor.
        Trabaja junto con el procesador para ofrecer una experiencia visual fluida.
      </p>


      {/* Funcionamiento */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué hace una GPU?
        </h2>

        <ul className="space-y-2 ">
          <li>• Procesa gráficos y animaciones.</li>
          <li>• Permite ver videos en alta definición.</li>
          <li>• Mejora el rendimiento en videojuegos.</li>
          <li>• Acelera programas de diseño y edición.</li>
          <li>• Genera las imágenes que vemos en el monitor.</li>
        </ul>
      </section>

      {/* Tipos */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de GPU
        </h2>

        <div className="space-y-6 text-lg">

          <div>
            <h3 className="text-xl text-blue-800 font-semibold mb-2">
              GPU Integrada
            </h3>

            <p>
              Está integrada dentro del procesador o de la placa madre.
              Utiliza la memoria RAM de la computadora para funcionar.
              Es común en computadoras de oficina y notebooks.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-blue-800 font-semibold mb-2">
              GPU Dedicada
            </h3>

            <p>
              Es una tarjeta gráfica independiente que se instala en la placa madre.
              Tiene su propia memoria (VRAM) y mayor potencia para juegos,
              diseño gráfico y edición de video.
            </p>
          </div>

        </div>
      </section>

      {/* Marcas */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Marcas de GPU
        </h2>

        <ul className="space-y-2">
          <li>• <strong>NVIDIA</strong></li>
          <li>• <strong>AMD</strong></li>
          <li>• <strong>Intel</strong></li>
        </ul>

        <p className="mt-4">
          Estas empresas desarrollan las principales tecnologías de procesamiento
          gráfico utilizadas en computadoras personales, notebooks y servidores.
        </p>
      </section>

      {/* Datos importantes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos importantes
        </h2>

        <ul className="space-y-2">
          <li>• La GPU se conecta a la placa madre mediante el puerto PCI Express.</li>
          <li>• Algunas tarjetas gráficas tienen ventiladores para evitar el sobrecalentamiento.</li>
          <li>• Las GPU modernas incluyen memoria dedicada llamada VRAM.</li>
          <li>• Son fundamentales para juegos, diseño gráfico y edición de video.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>


        <div className="space-y-6 ">

          
          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>

            <p>
              Investiga qué tipo de GPU tiene tu computadora.
              Puedes verlo en el administrador de dispositivos del sistema operativo.
            </p>
          </div>

   
          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>

            <p>
              Busca tres modelos de tarjetas gráficas actuales y escribe
              para qué tipo de uso están diseñadas (oficina, gaming, diseño, etc.).
            </p>
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            <p>
              Explica con tus palabras la diferencia entre una GPU integrada
              y una GPU dedicada.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}