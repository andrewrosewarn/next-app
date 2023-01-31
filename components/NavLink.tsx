"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

type Props = {
  href: string;
  children: string;
};

export default function NavLink({ href, children }: Props) {
  const segments = useSelectedLayoutSegments();

  let isActive = false;
  if (href === "/" && segments.length === 0) {
    isActive = true;
  }

  if (href.includes("/my-training") && segments[0] === "my-training") {
    isActive = true;
  }

  if (href === `/${segments[0]}`) {
    isActive = true;
  }

  return (
    <Link className={isActive ? "bg-slate-300 rounded px-2 py-1" : "py-1"} href={href}>
      {children}
    </Link>
  );
}
