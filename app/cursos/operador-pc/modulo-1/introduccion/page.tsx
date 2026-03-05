export default function IntroduccionInformaticaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a la Informática
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          La informática es la disciplina que se encarga del estudio,
          desarrollo y uso de sistemas computacionales para procesar
          información de manera automática.
          <br /><br />
          Hoy en día las computadoras se utilizan en casi todos los
          ámbitos de la vida: educación, trabajo, comunicación,
          entretenimiento y gestión de información.
        </p>
      </section>

      {/* ¿Qué es la informática? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Informática?
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          La palabra informática proviene de la combinación de los términos
          <strong> información </strong> y <strong> automática </strong>.
          <br /><br />
          Esto significa que la informática permite procesar información
          de forma automática mediante el uso de computadoras y programas.
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la Informática
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          La informática se ha convertido en una herramienta fundamental
          en la sociedad moderna. Permite mejorar la eficiencia en el trabajo,
          facilitar la comunicación y acceder a grandes cantidades de
          información.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-6">
          <li>Automatizar tareas repetitivas.</li>
          <li>Almacenar grandes cantidades de información.</li>
          <li>Acceder a internet y recursos digitales.</li>
          <li>Facilitar el trabajo en empresas y organizaciones.</li>
          <li>Permitir la comunicación a distancia.</li>
        </ul>
      </section>

      {/* Computadora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una computadora?
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          Una computadora es una máquina electrónica capaz de recibir,
          procesar y almacenar información.
          <br /><br />
          Funciona mediante programas que indican qué operaciones debe
          realizar sobre los datos que recibe.
        </div>
      </section>

      {/* Proceso de la información */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proceso de la Información
        </h2>

        <p className="text-gray-700 mb-6">
          El funcionamiento básico de una computadora se basa en tres etapas:
        </p>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">

          <p className="mb-2"><strong>Entrada de datos</strong></p>
          Se ingresan datos mediante dispositivos como el teclado o el mouse.

          <br /><br />

          <p className="mb-2"><strong>Procesamiento</strong></p>
          La computadora procesa la información mediante el procesador.

          <br /><br />

          <p className="mb-2"><strong>Salida de información</strong></p>
          Los resultados se muestran en dispositivos como el monitor
          o la impresora.

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
            Explicar con tus propias palabras qué es la informática.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribir tres ejemplos de situaciones cotidianas donde
            se utilice una computadora.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificar los tres pasos del proceso de la información
            (entrada, procesamiento y salida) en un ejemplo práctico.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl text-gray-700">
          Pensar en una actividad cotidiana (por ejemplo escribir un
          documento o buscar información en internet) e identificar:
          <br /><br />
          ✔ Qué datos se ingresan en la computadora. <br />
          ✔ Qué proceso realiza el sistema. <br />
          ✔ Qué resultado se obtiene.
        </div>
      </section>

    </div>
  );
}