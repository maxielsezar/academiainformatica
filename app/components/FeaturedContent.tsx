import Link from "next/link";
import ShinyText from "./ShinyText";

export default function FeaturedContent() {
  const posts = [
    {
      title: "Guía completa desde nivel inicial",
      desc: "Contenido estructurado para comenzar desde cero y avanzar paso a paso.",
      link: "/guia-inicial"
    },
    {
      title: "Conceptos fundamentales",
      desc: "Base teórica necesaria para comprender y aplicar herramientas digitales.",
      link: "/conceptos-fundamentales"
    },
    {
      title: "Aplicaciones prácticas",
      desc: "Ejemplos concretos para trasladar el aprendizaje a situaciones reales.",
      link: "/aplicaciones-practicas"
    },
    {
      title: "Primeros proyectos",
      desc: "Desarrollo de trabajos iniciales que consolidan los conocimientos adquiridos.",
      link: "/primeros-proyectos"
    }
  ];

  return (
    <section id="contenido" className="py-31">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
              text="Contenido destacado"
              speed={2}
              delay={0}
              color="#3c36fe"
              shineColor="#36d7f4"
              spread={120}
              direction="left"
            />
          </h2>

          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>

          <p className="max-w-2xl mx-auto">
            Accedé a contenidos clave diseñados para reforzar el aprendizaje y profundizar en habilidades aplicables.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {posts.map((post, index) => (
            <Link key={index} href={post.link}>
              <div className="p-8 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer h-full flex flex-col justify-between">
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">
                    {post.title}
                  </h3>

                  <p className=" leading-relaxed">
                    {post.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}