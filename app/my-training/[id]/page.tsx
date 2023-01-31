import { use } from "react";

async function loadLevel(level: number) {
  const response = await fetch(`http://localhost:3000/api/getLevel?level=${level}`);

  return response.json();
}

export default function ({ params }: { params: { id: number } }) {
  const level = use<{ id: number; name: string; description: string }>(loadLevel(params.id));

  return (
    <>
      <h2>{level.name}</h2>
      <div className="mt-4">
        <p>{level.description}</p>
      </div>
    </>
  );
}
