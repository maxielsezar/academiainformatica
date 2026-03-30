"use client";
import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    await navigator.clipboard.writeText(code);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 text-white p-4 rounded-xl">
      <button
        onClick={copiar}
        className="absolute top-2 right-2 bg-blue-500 px-3 py-1 rounded"
      >
        {copiado ? "Copiado!" : "Copiar"}
      </button>

      <pre className="whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}