"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [text, setText] = useState("");

  return (
    <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email-field" className="mb-1 block">
        Email
      </label>
      <input
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        id="email-field"
        className="border border-slate-300 block mb-2 p-1"
      />
      <button className="border border-slate-300 px-5 py-1 rounded">Register</button>
    </form>
  );
}
