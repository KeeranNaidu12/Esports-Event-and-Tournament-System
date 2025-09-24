import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-900 z-50 p-5">
      <div className="text-white font-semibold space-x-5 text-lg font-medium">
        <div className="position absolute left-10 top-5">
          <img
            src="/OKEA_Esports_Logo_Official.png"
            className="h-30"
            alt="Logo"
          />
        </div>

        <div className="mt-5 p-5 flex justify-center space-x-6 text-3xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/stuff">Events</Link>
          <Link href="/tournaments">Tournaments</Link>
        </div>
        <div className="position absolute p-5 font-semibold right-5 top-5 mt-5 text-2xl">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
