export default function WindowsPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Sistema Operativo Windows
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Windows es uno de los sistemas operativos más utilizados en el mundo.
          Permite que el usuario interactúe con la computadora de manera visual
          mediante ventanas, iconos, menús y herramientas gráficas.
        </p>

        <p className="mt-4 leading-relaxed max-w-3xl">
          Su función principal es administrar los recursos del equipo como el
          procesador, la memoria, los dispositivos y los archivos del sistema,
          facilitando el uso de programas y aplicaciones.
        </p>
      </section>

      {/* Qué es un sistema operativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Sistema Operativo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un sistema operativo es el software principal de una computadora.
          Es el encargado de controlar el hardware y permitir que los usuarios
          utilicen programas y aplicaciones.
        </p>

        <p className="mt-4 leading-relaxed max-w-3xl">
          Sin un sistema operativo, la computadora no podría funcionar de forma
          útil para el usuario.
        </p>
      </section>

      {/* Elementos principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos principales de Windows
        </h2>

        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Escritorio:</strong> es la pantalla principal donde aparecen
            los iconos y ventanas de trabajo.
          </li>

          <li>
            <strong>Barra de tareas:</strong> se encuentra generalmente en la
            parte inferior y muestra los programas abiertos.
          </li>

          <li>
            <strong>Menú Inicio:</strong> permite acceder a programas,
            configuraciones y archivos del sistema.
          </li>

          <li>
            <strong>Iconos:</strong> representan programas, carpetas o archivos.
          </li>

          <li>
            <strong>Ventanas:</strong> cada programa se ejecuta dentro de una
            ventana que puede moverse, minimizarse o cerrarse.
          </li>
        </ul>
      </section>

      {/* Explorador de archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Explorador de archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El Explorador de archivos es la herramienta que permite organizar
          carpetas y archivos dentro del sistema.
        </p>

        <p className="mt-4 leading-relaxed max-w-3xl">
          Desde allí se pueden realizar acciones como:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>Crear carpetas</li>
          <li>Copiar archivos</li>
          <li>Mover documentos</li>
          <li>Eliminar archivos</li>
          <li>Buscar información dentro del equipo</li>
        </ul>
      </section>

      {/* Operaciones básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operaciones básicas en Windows
        </h2>

        <ul className="list-disc list-inside space-y-4">
          <li>Abrir programas desde el menú inicio.</li>
          <li>Crear y organizar carpetas.</li>
          <li>Copiar y pegar archivos.</li>
          <li>Renombrar documentos.</li>
          <li>Eliminar archivos que ya no se necesitan.</li>
        </ul>
      </section>

      {/* Atajos de teclado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atajos de teclado útiles
        </h2>

        <div className="bg-[#0f172a] text-white p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`Ctrl + C   Copiar
Ctrl + V   Pegar
Ctrl + X   Cortar
Ctrl + Z   Deshacer
Alt + Tab  Cambiar entre programas
Windows + E  Abrir explorador de archivos`}
          </pre>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Identificar en la computadora el escritorio, la barra de tareas
            y el menú inicio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crear una carpeta llamada <strong>Practica</strong> en el escritorio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crear tres archivos dentro de la carpeta y luego renombrarlos.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Organizar una carpeta personal que contenga:
          <br />
          ✔ Documentos <br />
          ✔ Imágenes <br />
          ✔ Archivos de práctica
          <br /><br />
          Cada tipo de archivo debe guardarse en una carpeta distinta.
        </div>
      </section>

    </div>
  );
}