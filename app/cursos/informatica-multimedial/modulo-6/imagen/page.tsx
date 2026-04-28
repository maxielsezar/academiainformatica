export default function EdicionImagenPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Edición de Imagen
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La edición de imagen es el proceso de modificar una fotografía o gráfico
          para mejorar su calidad, corregir errores o adaptarla a un objetivo específico.
          Es una habilidad clave en el diseño digital y la comunicación visual.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la edición de imagen?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Consiste en aplicar cambios a una imagen utilizando herramientas digitales,
          como recortar, ajustar colores, agregar texto o eliminar elementos no deseados.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la edición
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejorar la calidad visual</li>
          <li>Corregir errores</li>
          <li>Destacar elementos importantes</li>
          <li>Transmitir un mensaje claro</li>
          <li>Crear contenido atractivo</li>
        </ul>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas básicas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Recorte:</strong> ajustar el encuadre</li>
          <li><strong>Brillo y contraste:</strong> mejorar iluminación</li>
          <li><strong>Saturación:</strong> intensificar colores</li>
          <li><strong>Filtros:</strong> aplicar efectos visuales</li>
          <li><strong>Texto:</strong> agregar información</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos básicos para editar una imagen
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abrir la imagen en el programa</li>
          <li>Recortar o ajustar el encuadre</li>
          <li>Corregir brillo, contraste y color</li>
          <li>Aplicar efectos o filtros</li>
          <li>Agregar texto si es necesario</li>
          <li>Guardar el archivo final</li>
        </ul>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de edición
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Edición básica</h3>
            <p className="leading-relaxed">
              Ajustes simples como recorte y mejora de color.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Edición avanzada</h3>
            <p className="leading-relaxed">
              Incluye efectos, montajes y manipulación de imágenes.
            </p>
          </div>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una buena edición mejora la presentación de la imagen y ayuda a comunicar
          ideas de manera más efectiva en distintos medios digitales.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Editá una imagen utilizando Photoshop. Debe incluir:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Recorte de la imagen</li>
            <li>Ajuste de brillo y contraste</li>
            <li>Aplicación de un filtro</li>
            <li>Agregar un texto</li>
            <li>Guardar en formato JPG o PNG</li>
          </ul>
        </div>
      </section>

    </div>
  );
}