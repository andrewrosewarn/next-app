import NavLink from "../components/NavLink";

export default function Navigation() {
  return (
    <nav className="flex gap-4 mt-3">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/my-training/1">My Training</NavLink>
      <NavLink href="/my-staff">My Staff</NavLink>
    </nav>
  );
}
