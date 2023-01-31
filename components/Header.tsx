import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-300">
      <h1 className="text-xl">Application Name</h1>
      <Navigation />
    </header>
  );
}
