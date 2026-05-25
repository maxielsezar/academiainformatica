import CodeBlock from "@/app/components/CodeBlock";

export default function RamasGitPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Trabajo con Ramas en Git
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las ramas en Git permiten desarrollar nuevas funcionalidades sin
          modificar la versión principal del proyecto. Son fundamentales para
          el trabajo colaborativo, ya que varios desarrolladores pueden trabajar
          al mismo tiempo en distintas partes del sistema.
        </p>
      </section>

      {/* ¿Qué es una rama? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una rama?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una rama es una línea de desarrollo independiente dentro de un
          repositorio. Cada rama puede contener cambios distintos sin afectar
          el código principal.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Generalmente, la rama principal se llama <code>main</code> o
          <code>master</code>, y desde ella se crean nuevas ramas para agregar
          funciones, corregir errores o realizar pruebas.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de utilizar ramas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permiten trabajar sin afectar la versión principal.</li>
          <li>Facilitan el trabajo en equipo.</li>
          <li>Ayudan a organizar nuevas funcionalidades.</li>
          <li>Permiten probar cambios de forma segura.</li>
          <li>Facilitan la resolución de errores.</li>
        </ul>
      </section>

      {/* Crear rama */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una rama
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>git branch</code> permite crear una nueva rama.
        </p>

        <CodeBlock
          code={`git branch nueva-funcion`}
        />
      </section>

      {/* Ver ramas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ver las ramas del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para visualizar todas las ramas existentes se utiliza:
        </p>

        <CodeBlock
          code={`git branch`}
        />
      </section>

      {/* Cambiar de rama */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cambiar de rama
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El comando <code>git checkout</code> permite moverse entre ramas.
        </p>

        <CodeBlock
          code={`git checkout nueva-funcion`}
        />
      </section>

      {/* Crear y cambiar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear y cambiar de rama al mismo tiempo
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Git permite crear y acceder a una rama con un solo comando.
        </p>

        <CodeBlock
          code={`git checkout -b nueva-funcion`}
        />
      </section>

      {/* Trabajo en conjunto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo se trabaja en equipo con ramas?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En proyectos colaborativos, cada integrante trabaja en su propia
          rama. De esta manera, varias personas pueden modificar el proyecto
          simultáneamente sin sobrescribir el trabajo de los demás.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Un desarrollador trabaja en el login.</li>
          <li>Otro desarrolla el panel de usuarios.</li>
          <li>Otro corrige errores del sistema.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-4">
          Cada uno utiliza una rama diferente y luego los cambios se combinan
          con la rama principal.
        </p>
      </section>

      {/* Flujo colaborativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo básico de trabajo colaborativo
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Actualizar el proyecto desde GitHub.</li>
          <li>Crear una nueva rama.</li>
          <li>Realizar cambios en el código.</li>
          <li>Guardar cambios con commits.</li>
          <li>Subir la rama a GitHub.</li>
          <li>Combinar cambios con la rama principal.</li>
        </ol>
      </section>

      {/* Push */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Subir una rama a GitHub
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para compartir una rama con el equipo se utiliza:
        </p>

        <CodeBlock
          code={`git push origin nueva-funcion`}
        />
      </section>

      {/* Merge */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar ramas con merge
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Cuando una funcionalidad está terminada, se pueden unir los cambios
          con la rama principal utilizando <code>merge</code>.
        </p>

        <CodeBlock
          code={`# Cambiar a la rama principal
git checkout main

# Combinar cambios
git merge nueva-funcion`}
        />
      </section>

      {/* Conflictos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conflictos entre ramas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A veces dos personas modifican la misma línea de código. Git detecta
          este problema y genera un conflicto que debe resolverse manualmente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Resolver conflictos es una parte normal del trabajo colaborativo y
          permite mantener organizado el proyecto.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas al trabajar con ramas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear ramas con nombres descriptivos.</li>
          <li>Realizar commits pequeños y organizados.</li>
          <li>Actualizar frecuentemente la rama principal.</li>
          <li>No trabajar directamente sobre <code>main</code>.</li>
          <li>Eliminar ramas que ya no se utilizan.</li>
        </ul>
      </section>

      {/* Eliminar ramas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Eliminar una rama
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una vez finalizado el trabajo, la rama puede eliminarse.
        </p>

        <CodeBlock
          code={`git branch -d nueva-funcion`}
        />
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá qué es una rama en Git.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Creá una rama llamada <code>login</code>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Realizá un commit dentro de una rama nueva.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Uní una rama con <code>main</code> utilizando merge.
          </div>

        </div>
      </section>

    </div>
  );
}