export default function EntradaSalidaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Dispositivos de Entrada y Salida
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Para que una computadora pueda interactuar con el usuario es
          necesario utilizar dispositivos que permitan ingresar información
          al sistema y mostrar los resultados del procesamiento.
          <br /><br />
          Estos dispositivos se clasifican en
          <strong> dispositivos de entrada</strong>,
          <strong> dispositivos de salida</strong> y
          <strong> dispositivos mixtos</strong>.
        </p>
      </section>

      {/* Entrada */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Dispositivos de Entrada
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          Los dispositivos de entrada permiten ingresar datos o instrucciones
          a la computadora para que puedan ser procesados por el sistema.
        </div>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-6">
          <li>Teclado</li>
          <li>Mouse</li>
          <li>Micrófono</li>
          <li>Escáner</li>
          <li>Cámara web</li>
          <li>Lector de códigos de barras</li>
        </ul>

        <p className="text-gray-700 mt-6">
          Por ejemplo, cuando escribimos un texto en el teclado,
          estamos ingresando información a la computadora.
        </p>
      </section>

      {/* Salida */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Dispositivos de Salida
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          Los dispositivos de salida muestran al usuario el resultado
          del procesamiento de la información realizada por la computadora.
        </div>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-6">
          <li>Monitor</li>
          <li>Impresora</li>
          <li>Parlantes</li>
          <li>Auriculares</li>
          <li>Proyector</li>
        </ul>

        <p className="text-gray-700 mt-6">
          Por ejemplo, cuando un documento aparece en la pantalla,
          el monitor está mostrando información generada por la computadora.
        </p>
      </section>

      {/* Mixtos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Dispositivos de Entrada y Salida
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          Algunos dispositivos pueden funcionar tanto como entrada
          como salida de información.
        </div>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-6">
          <li>Pantalla táctil</li>
          <li>Memorias USB</li>
          <li>Discos externos</li>
          <li>Tarjetas de red</li>
        </ul>

        <p className="text-gray-700 mt-6">
          Por ejemplo, una memoria USB permite guardar información
          (salida) y también leer información previamente almacenada
          (entrada).
        </p>
      </section>

      {/* Relación con el procesamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con el procesamiento de datos
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          El funcionamiento básico de un sistema informático sigue
          el modelo:
          <br /><br />
          <strong>Entrada → Procesamiento → Salida</strong>
          <br /><br />
          Primero se ingresan los datos mediante dispositivos de entrada,
          luego la computadora procesa esa información,
          y finalmente los resultados se muestran mediante dispositivos
          de salida.
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 text-gray-700">

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribir cinco ejemplos de dispositivos de entrada.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribir cinco ejemplos de dispositivos de salida.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificar qué dispositivo se utiliza para cada acción:
            <br /><br />
            ✔ Escuchar música <br />
            ✔ Imprimir un documento <br />
            ✔ Escribir un texto
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl text-gray-700">
          Hacer una lista de todos los dispositivos de entrada y salida
          que tiene la computadora del aula o de tu casa.
          <br /><br />
          Clasificarlos en:
          <br />
          ✔ Entrada <br />
          ✔ Salida <br />
          ✔ Entrada y salida
        </div>
      </section>

    </div>
  );
}