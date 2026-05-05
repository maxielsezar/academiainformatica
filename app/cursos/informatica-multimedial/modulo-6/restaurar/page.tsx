import Diagrama from "@/app/components/Diagrama";
export default function RestauracionImagenesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad: Restauración de Imágenes
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad vas a restaurar imágenes dañadas o antiguas utilizando
          herramientas de edición como el tampón de clonar, pincel corrector y ajustes
          de color. El objetivo es mejorar la calidad visual y recuperar detalles.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo de la actividad
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Aprender a corregir imperfecciones en imágenes</li>
          <li>Utilizar herramientas de restauración</li>
          <li>Mejorar brillo, contraste y color</li>
          <li>Desarrollar precisión en la edición</li>
        </ul>
      </section>

      {/* Imágenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Imágenes a restaurar
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl text-center">
            <Diagrama
                src="/imagenes/restaurar.png"
                alt="restaurar"
            />
            <Diagrama
                src="/imagenes/fachada-casa-minimalista.jpg"
                alt="fachada-casa-minimalista"
            />
            <Diagrama
                src="/imagenes/showcase1.jpg"
                alt="showcase1"
            />
        </div>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl space-y-4">
          <p>
            Utilizando Photoshop, debés restaurar las imágenes proporcionadas.
          </p>

          <p className="font-semibold">Tu trabajo debe incluir:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Eliminación de manchas o daños</li>
            <li>Corrección de imperfecciones</li>
            <li>Mejora de brillo y contraste</li>
            <li>Ajuste de colores si es necesario</li>
            <li>Resultado final limpio y mejorado</li>
          </ul>
        </div>
      </section>

      {/* Herramientas recomendadas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas recomendadas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Tampón de clonar:</strong> para reconstruir zonas dañadas</li>
          <li><strong>Pincel corrector:</strong> para eliminar imperfecciones</li>
          <li><strong>Parche:</strong> para reemplazar áreas</li>
          <li><strong>Ajustes de imagen:</strong> brillo, contraste, color</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos sugeridos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abrir la imagen en Photoshop</li>
          <li>Duplicar la capa original</li>
          <li>Corregir zonas dañadas con herramientas de restauración</li>
          <li>Ajustar iluminación y color</li>
          <li>Revisar detalles finales</li>
          <li>Guardar la imagen restaurada</li>
        </ul>
      </section>

      {/* Entrega */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Forma de entrega
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Guardar la imagen final en formato JPG o PNG</li>
            <li>Entregar junto con la imagen original</li>
            <li>Opcional: mostrar antes y después</li>
          </ul>
        </div>
      </section>

    </div>
  );
}