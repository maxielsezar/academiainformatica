export default function ProyectoMultimediaPage() {
  return (
    <div className="space-y-12">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Proyecto Multimedia: Presentación de un Producto
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          En esta actividad desarrollarás un proyecto multimedia completo para
          promocionar un producto de tu elección. El objetivo es combinar texto,
          imágenes, audio y video para comunicar información de manera atractiva
          y efectiva, utilizando herramientas digitales y técnicas de producción
          de contenidos para la Web.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un proyecto multimedia?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un proyecto multimedia es una producción que integra diferentes tipos
          de contenido digital, como textos, imágenes, gráficos, audio, video y
          animaciones. Su finalidad es transmitir información de forma dinámica
          y captar la atención del público mediante distintos recursos visuales
          y sonoros.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En esta actividad cada estudiante seleccionará un producto y creará una
          presentación multimedia destinada a promocionarlo en Internet.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna de trabajo
        </h2>

        <div className="border p-6 rounded-xl bg-blue-50">
          Elegí un producto de tu interés (tecnológico, alimenticio, deportivo,
          educativo, artesanal, entre otros) y desarrollá una presentación
          multimedia que permita mostrar sus características, beneficios y
          posibles usos. El proyecto deberá incluir distintos tipos de recursos
          digitales y estar preparado para su publicación en la Web.
        </div>
      </section>

      {/* Etapas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapas del proyecto
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              1. Selección del producto
            </h3>
            Elegí un producto que te interese promocionar y definí cuál será el
            público al que estará dirigido.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              2. Investigación
            </h3>
            Reuní información sobre el producto: características, ventajas,
            funcionamiento, precio, público objetivo y competidores.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              3. Recolección de recursos
            </h3>
            Buscá o creá imágenes, videos, sonidos y otros elementos visuales
            que ayuden a presentar el producto.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              4. Producción multimedia
            </h3>
            Diseñá una presentación, video o sitio web que integre todos los
            recursos recopilados.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              5. Publicación
            </h3>
            Prepará el material para compartirlo mediante un blog o plataforma
            web.
          </div>

        </div>
      </section>

      {/* Recursos obligatorios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recursos obligatorios
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Texto descriptivo del producto.</li>
          <li>Al menos 3 imágenes relacionadas.</li>
          <li>Un logotipo o diseño gráfico.</li>
          <li>Audio o narración explicativa (opcional pero recomendado).</li>
          <li>Video promocional o presentación animada.</li>
          <li>Portada con nombre del producto y autor del trabajo.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de proyecto
        </h2>

        <div className="border p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-3">
            Producto: Auriculares Inalámbricos
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Presentación del producto.</li>
            <li>Descripción de características técnicas.</li>
            <li>Galería de imágenes.</li>
            <li>Video demostrativo de uso.</li>
            <li>Comparación con otros modelos.</li>
            <li>Beneficios para el usuario.</li>
            <li>Conclusión y recomendación final.</li>
          </ul>
        </div>
      </section>

      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrega del trabajo
        </h2>

        <div className="border p-6 rounded-xl">
          El proyecto deberá entregarse en formato digital y posteriormente
          publicarse en el blog del curso. Se valorará la calidad de los
          contenidos, la creatividad, el uso adecuado de recursos multimedia y
          la claridad de la comunicación.
        </div>
      </section>

      {/* Evaluación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            Calidad y organización de la información.
          </div>

          <div className="border p-6 rounded-xl">
            Integración correcta de recursos multimedia.
          </div>

          <div className="border p-6 rounded-xl">
            Creatividad y diseño visual.
          </div>

          <div className="border p-6 rounded-xl">
            Claridad en la presentación del producto.
          </div>

          <div className="border p-6 rounded-xl">
            Cumplimiento de los requisitos solicitados.
          </div>

          <div className="border p-6 rounded-xl">
            Preparación adecuada para su publicación web.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section>
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este proyecto te permitirá aplicar todos los conocimientos adquiridos
          sobre producción multimedia, planificación de contenidos y publicación
          web, desarrollando una presentación profesional de un producto de tu
          elección.
        </div>
      </section>

    </div>
  );
}