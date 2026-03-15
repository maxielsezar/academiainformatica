import Link from "next/link";
import AnimatedContent from './AnimatedContent'

interface Props {
  titulo: string;
  descripcion: string;
  duracion: string;
  slug: string; 
}



export default function CursoCard({
  titulo,
  descripcion,
  duracion,
  slug,
}: Props) {
  return (
    <AnimatedContent
  distance={100}
  direction="vertical"
  reverse={false}
  duration={0.8}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0.5}
>
    <div className="group border border-gray-200 p-10 rounded-2xl hover:shadow-xl transition-all duration-300">
      

      <h3 className="text-xl font-bold dark:text-blue-600 text-blue-900 mb-4 group-hover:text-blue-700 transition">
        {titulo}
      </h3>

      <p className=" mb-6 leading-relaxed">
        {descripcion}
      </p>

      <p className="text-sm font-medium dark:text-gray-300 text-gray-500 mb-8">
        Duración: {duracion}
      </p>

      <Link
        href={`/cursos/${slug}`}
        className="text-blue-900 dark:text-blue-600 font-semibold border-b-2 border-blue-900 hover:border-blue-600 transition"
      >
        Ver programa →
      </Link>
    </div>
    
</AnimatedContent>
  );
}