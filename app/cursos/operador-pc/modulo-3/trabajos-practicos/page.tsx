
export default function DescargasPage() {
  const archivos = [
    {
      nombre: "Trabajo Práctico Excel 1",
      tipo: "Word",
      url: "/archivos/Trabajo Práctico Excel 1.docx",
    },
    {
      nombre: "Consignas BUSCARV ",
      tipo: "Word",
      url: "/archivos/TP_BUSCARV_Consignas.docx",
    },
    {
      nombre: "Tabla BUSCARV",
      tipo: "Excel",
      url: "/archivos/TP_BUSCARV.xlsx",
    },
    {
      nombre: "Consignas Control Stock",
      tipo: "Word",
      url: "/archivos/Control_Stock.docx",
    },
    {
      nombre: "Tabla de Control Stock",
      tipo: "Excel",
      url: "/archivos/Control_Stock_Productos.xlsx",
    },
    {
      nombre: "Consignas Funciones Logicas",
      tipo: "Word",
      url: "/archivos/Trabajo Practico Funciones Logicas.docx",
    },
    {
      nombre: "Tabla Funciones Logicas",
      tipo: "Excel",
      url: "/archivos/Trabajo Practico Funciones Logicas.xlsx",
    },
       {
      nombre: "Consignas Funciones Texto",
      tipo: "Word",
      url: "/archivos/Funciones Texto.docx",
    },
    {
      nombre: "Tabla Funciones Texto",
      tipo: "Excel",
      url: "/archivos/Funciones Texto.xlsx",
    },
    
  ];

  return (
      
    <div className="">
      {/* Header */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">
          Descargas de Archivos
        </h1>
        <p className="">
          Accedé a todos los ejecicios practicos
        </p>
      </section>

      {/* Lista */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {archivos.map((archivo, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 rounded-xl hover:scale-105 border transition"
            >
              <div>
                <p className="font-medium">{archivo.nombre}</p>
                <span className="text-sm text-gray-400">
                  {archivo.tipo}
                </span>
              </div>

              <a
                href={archivo.url}
                download
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Descargar
              </a>
            </div>
          ))}
        </div>
      </section>
      </div>
  );
}