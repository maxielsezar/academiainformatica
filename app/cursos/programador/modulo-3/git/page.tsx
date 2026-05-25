import CodeBlock from "@/app/components/CodeBlock";

export default function GitPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a Git y GitHub
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Git es una herramienta de control de versiones utilizada para registrar
          cambios en proyectos de software. Permite trabajar de forma segura,
          mantener un historial de modificaciones y colaborar con otros
          desarrolladores.
        </p>
      </section>

      {/* ¿Qué es Git? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Git?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Git es un sistema de control de versiones distribuido. Fue creado para
          ayudar a los programadores a trabajar en equipo y administrar cambios
          en el código fuente de un proyecto.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Con Git se puede:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Guardar versiones del proyecto.</li>
          <li>Volver a versiones anteriores.</li>
          <li>Trabajar en equipo sin perder cambios.</li>
          <li>Crear ramas para nuevas funcionalidades.</li>
          <li>Compartir proyectos fácilmente.</li>
        </ul>
      </section>

      {/* ¿Qué es GitHub? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es GitHub?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          GitHub es una plataforma online que permite almacenar repositorios Git
          en la nube. Facilita el trabajo colaborativo entre desarrolladores,
          permitiendo compartir proyectos, controlar cambios y colaborar desde
          diferentes computadoras.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Git trabaja localmente en la computadora, mientras que GitHub permite
          subir esos proyectos a internet para compartirlos.
        </p>
      </section>

      {/* Repositorio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un repositorio?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un repositorio es la carpeta donde Git almacena el proyecto y todo su
          historial de cambios. Cada vez que se realiza una modificación y se
          guarda con Git, queda registrada dentro del repositorio.
        </p>
      </section>

      {/* Git Init */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un repositorio con Git
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>git init</code> se utiliza para iniciar Git dentro
          de una carpeta.
        </p>

        <CodeBlock
          code={`git init`}
        />
      </section>

      {/* Git Status */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ver el estado del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>git status</code> muestra los archivos modificados y
          el estado actual del repositorio.
        </p>

        <CodeBlock
          code={`git status`}
        />
      </section>

      {/* Git Add */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar archivos al área de preparación
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Antes de guardar cambios, Git necesita saber qué archivos se van a
          incluir en el próximo commit.
        </p>

        <CodeBlock
          code={`git add archivo.txt

# Agregar todos los archivos
git add .`}
        />
      </section>

      {/* Git Commit */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar cambios con commit
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Un commit representa una versión guardada del proyecto.
        </p>

        <CodeBlock
          code={`git commit -m "Primer commit"`}
        />
      </section>

      {/* Git Log */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ver historial de commits
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>git log</code> permite visualizar todos los commits
          realizados en el proyecto.
        </p>

        <CodeBlock
          code={`git log`}
        />
      </section>

      {/* Git Branch */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Trabajar con ramas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las ramas permiten desarrollar nuevas funciones sin modificar la
          versión principal del proyecto.
        </p>

        <div className="mt-6">
          <CodeBlock
            code={`# Crear una rama
git branch nueva-funcion

# Cambiar de rama
git checkout nueva-funcion

# Crear y cambiar de rama al mismo tiempo
git checkout -b nueva-funcion`}
          />
        </div>
      </section>

      {/* Git Merge */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Unir ramas con merge
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>merge</code> permite combinar los cambios de una rama
          con otra.
        </p>

        <CodeBlock
          code={`git merge nueva-funcion`}
        />
      </section>

      {/* GitHub */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Subir un proyecto a GitHub
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para conectar un proyecto local con GitHub se utiliza un repositorio
          remoto.
        </p>

        <CodeBlock
          code={`# Conectar repositorio local con GitHub
git remote add origin URL_DEL_REPOSITORIO

# Subir archivos
git push -u origin main`}
        />
      </section>

      {/* Clonar repositorio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clonar un repositorio
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>git clone</code> descarga una copia de un repositorio
          desde GitHub a la computadora.
        </p>

        <CodeBlock
          code={`git clone URL_DEL_REPOSITORIO`}
        />
      </section>

      {/* Flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo básico de trabajo con Git
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Crear o modificar archivos.</li>
          <li>Verificar cambios con <code>git status</code>.</li>
          <li>Agregar archivos con <code>git add</code>.</li>
          <li>Guardar cambios con <code>git commit</code>.</li>
          <li>Subir cambios a GitHub con <code>git push</code>.</li>
        </ol>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de utilizar Git y GitHub
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permite trabajar en equipo.</li>
          <li>Evita perder cambios importantes.</li>
          <li>Facilita la organización del proyecto.</li>
          <li>Permite volver a versiones anteriores.</li>
          <li>Es utilizado profesionalmente en empresas de software.</li>
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
            Explicá con tus palabras qué es Git y para qué sirve.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Explicá la diferencia entre Git y GitHub.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá un repositorio utilizando <code>git init</code>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Realizá un commit agregando un mensaje descriptivo.
          </div>

        </div>
      </section>

    </div>
  );
}