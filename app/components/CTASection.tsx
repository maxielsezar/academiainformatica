import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-4">
          Empezá a desarrollar habilidades digitales hoy
        </h2>

        <p className="mb-8 text-blue-100">
          Accedé a contenido práctico, ejemplos reales y herramientas que podés aplicar desde el primer día.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <Link href="#cursos">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Ver cursos
            </button>
          </Link>


        </div>

      </div>
    </section>
  );
}