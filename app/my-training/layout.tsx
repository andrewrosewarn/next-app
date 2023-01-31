import Link from "next/link";
import { use } from "react";

async function loadLevels() {
  const response = await fetch("http://localhost:3000/api/getLevels");
  return response.json();
}

type Props = {
  children: React.ReactNode;
};

export default function MyTraining({ children }: Props) {
  const levelData = use<{ id: number; name: string }[]>(loadLevels());

  return (
    <>
      <div className="flex gap-4 mb-5">
        {levelData.map((level) => (
          <Link
            key={level.id}
            href={`/my-training/${level.id}`}
            className="border-slate-300 border flex-1 text-center p-2"
          >
            {level.name}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
