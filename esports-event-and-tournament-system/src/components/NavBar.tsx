import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-full top-0 bg-blue-600">
      <div className="p-5 text-white font-weight space-x-5 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/stuff">Events</Link>
        <Link href="/tournaments">Tournaments</Link>
      </div>
    </nav>
  );
}

export default NavBar;
