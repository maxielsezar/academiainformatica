import CodeBlock from "@/app/components/CodeBlock";

export default function ModularidadPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Modularidad en Programación
        </h1>

        <p className="max-w-3xl leading-relaxed">
          La modularidad es un principio de diseño que consiste en dividir un programa
          en partes más pequeñas llamadas módulos. Cada módulo tiene una función
          específica, lo que facilita el desarrollo, mantenimiento y reutilización del código.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la modularidad?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          La modularidad permite organizar el código separando responsabilidades en
          diferentes clases o componentes. De esta manera, cada parte del sistema
          puede desarrollarse y modificarse de forma independiente.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Divide el programa en partes independientes</li>
          <li>Reduce la complejidad del sistema</li>
          <li>Facilita el trabajo en equipo</li>
        </ul>
      </section>

      {/* Cómo se aplica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo se aplica la modularidad?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Se aplica creando clases, funciones o paquetes que cumplan tareas específicas.
          Cada módulo debe tener una única responsabilidad.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Clases separadas por responsabilidad</li>
          <li>Métodos bien definidos</li>
          <li>Uso de paquetes o carpetas</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          Veamos un ejemplo donde un sistema está dividido en módulos.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock
            code={`class Usuario {

    String nombre;

    void mostrarUsuario() {
        System.out.println("Usuario: " + nombre);
    }
}

class Autenticacion {

    boolean login(String usuario, String password) {
        return usuario.equals("admin") && password.equals("1234");
    }
}

class Main {

    public static void main(String[] args) {

        Usuario user = new Usuario();
        user.nombre = "Maxi";

        Autenticacion auth = new Autenticacion();

        if (auth.login("admin", "1234")) {
            user.mostrarUsuario();
        } else {
            System.out.println("Error de login");
        }

    }

}`}
          />
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de la modularidad
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Facilita el mantenimiento del código</li>
          <li>Permite reutilizar módulos en otros proyectos</li>
          <li>Mejora la organización del sistema</li>
          <li>Hace el código más escalable</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear módulos con una sola responsabilidad</li>
          <li>Evitar módulos demasiado grandes</li>
          <li>Nombrar claramente cada módulo</li>
          <li>Reducir dependencias entre módulos</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica qué es la modularidad con tus palabras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Divide un programa en al menos dos clases con responsabilidades distintas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea un módulo encargado solo de validar datos.
          </div>

        </div>
      </section>

    </div>
  );
}