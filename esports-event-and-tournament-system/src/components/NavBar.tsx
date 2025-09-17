import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 z-50 p-5">
      <div className="text-white font-weight space-x-5 text-lg font-medium">
        <div></div>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/stuff">Events</Link>
        <Link href="/tournaments">Tournaments</Link>
      </div>
    </nav>
  );
}

export default NavBar;
