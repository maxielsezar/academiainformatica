export default function Modulo5InicioPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Módulo 5: Texto e Hipertexto
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Comprensión, organización y uso del texto y el hipertexto en entornos digitales.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De qué trata este módulo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este módulo vas a aprender qué es el texto digital y cómo se
          diferencia del texto tradicional. También conocerás el concepto
          de hipertexto, cómo funciona la navegación mediante enlaces
          y de qué manera se organiza la información en la web.
          Estos conocimientos te permitirán crear contenidos claros,
          estructurados y fáciles de navegar.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos que vas a ver
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">El Texto Digital</h3>
            Características del texto en entornos digitales y su diferencia con el texto impreso.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Hipertexto</h3>
            Definición de hipertexto y su funcionamiento mediante enlaces.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Hipervínculos</h3>
            Tipos de enlaces y cómo permiten la navegación entre contenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Estructura de la Información</h3>
            Organización del contenido mediante títulos, párrafos y jerarquías.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Lectura en Pantalla</h3>
            Cómo leen los usuarios en entornos digitales y buenas prácticas.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Navegación Web</h3>
            Uso del hipertexto para facilitar la experiencia del usuario.
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender qué es el texto digital</li>
          <li>Entender el concepto de hipertexto</li>
          <li>Reconocer la función de los hipervínculos</li>
          <li>Organizar correctamente la información</li>
          <li>Mejorar la lectura en pantalla</li>
          <li>Diseñar contenidos fáciles de navegar</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades que vas a realizar
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            Análisis de páginas web para identificar estructuras de texto e hipertexto.
          </div>

          <div className="border p-6 rounded-xl">
            Creación de contenidos con enlaces internos y externos.
          </div>

          <div className="border p-6 rounded-xl">
            Organización de información utilizando títulos y jerarquías.
          </div>

          <div className="border p-6 rounded-xl">
            Ejercicios prácticos de navegación y diseño de contenido digital.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este módulo te permitirá comprender cómo se organiza la información
          en la web y cómo utilizar el texto y el hipertexto para comunicar
          ideas de forma clara, estructurada y eficiente.
        </div>
      </section>

    </div>
  );
}