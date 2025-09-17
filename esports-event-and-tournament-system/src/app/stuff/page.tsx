import React from "react";
import NavBar from "../../components/NavBar";

export default function Events() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NavBar />
      <main>
        <div>
          <h1>Events!</h1>
        </div>
      </main>
    </div>
  );
}
