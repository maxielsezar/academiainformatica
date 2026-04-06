"use client";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const enviar = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={enviar}>
      <input
        placeholder="Nombre"
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Mensaje"
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}