"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("mudou nome");
  }, [name]);

  return (
    <>
      <p>Meu nome é {name}</p>
      <input value={name} onChange={(ev) => setName(ev.target.value)} />
    </>
  );
}
