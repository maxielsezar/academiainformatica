import CodeBlock from "@/app/components/CodeBlock";

export default function CleanCodePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
            Código Limpio (Clean Code)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Clean Code (código limpio) es una forma de escribir programas que sean
          fáciles de leer, entender y mantener. No se trata solo de que el código
          funcione, sino de que cualquier desarrollador pueda comprenderlo rápidamente.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Definición
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El Clean Code es un conjunto de buenas prácticas que buscan mejorar la
          calidad del software, haciendo el código más claro, organizado y
          mantenible a lo largo del tiempo.
        </p>
      </section>

      {/* Principios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principios básicos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>El código debe ser fácil de leer</li>
          <li>Debe tener nombres claros y descriptivos</li>
          <li>Las funciones deben ser pequeñas y cumplir una sola tarea</li>
          <li>Evitar duplicación de código</li>
          <li>Comentar solo cuando sea necesario</li>
        </ul>
      </section>

      {/* Principios clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principios clave de Clean Code
        </h2>

        <ul className="list-disc list-inside space-y-4 max-w-3xl">
          <li>
            <strong>DRY (Don't Repeat Yourself):</strong> evitar repetir código.
          </li>
          <li>
            <strong>Regla del Boy Scout:</strong> dejar el código mejor de como lo encontraste.
          </li>
          <li>
            <strong>KISS (Keep It Simple, Stupid):</strong> mantener el código simple.
          </li>
          <li>
            <strong>SRP (Single Responsibility Principle):</strong> cada clase o función debe tener una sola responsabilidad.
          </li>
          <li>
            <strong>Open/Closed Principle:</strong> el código debe estar abierto a extensión pero cerrado a modificación.
          </li>
          <li>
            <strong>YAGNI (You Aren't Gonna Need It):</strong> no agregar funcionalidades innecesarias.
          </li>
          <li>
            <strong>Separación de responsabilidades:</strong> dividir el sistema en partes independientes.
          </li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de mal código vs buen código
        </h2>

        <CodeBlock code=
{`// MAL CÓDIGO (múltiples responsabilidades)
class Usuario {
    void guardarUsuario() {}
    void enviarEmail() {}
}

// BUEN CÓDIGO (SRP)
class Usuario {
    void guardarUsuario() {}
}

class EmailService {
    void enviarEmail() {}
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El código se escribe una vez pero se lee muchas veces. Un código limpio
          permite trabajar en equipo, evitar errores y facilitar futuras mejoras
          en el sistema.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar nombres significativos</li>
          <li>Evitar funciones largas</li>
          <li>Eliminar código innecesario</li>
          <li>Seguir una estructura ordenada</li>
          <li>Aplicar principios de la programación orientada a objetos</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es como escribir un texto bien redactado: con títulos claros, párrafos
          organizados y sin información innecesaria. Esto facilita que cualquier
          persona pueda entenderlo sin dificultad.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá qué es Clean Code.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá un caso donde se aplique DRY.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Aplicá SRP en un ejemplo propio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Simplificá un código aplicando KISS.
          </div>

        </div>
      </section>

    </div>
  );
}