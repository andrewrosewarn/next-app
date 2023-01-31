import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Training Center</h1>
      <div className="mt-5">
        <Link href="/my-training/1" className="border border-slate-300 p-2">
          My Training
        </Link>
      </div>
    </>
  );
}
