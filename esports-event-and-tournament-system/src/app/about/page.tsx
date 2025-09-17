import React from "react";
import NavBar from "../../components/NavBar";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NavBar />
      <main>
        <div>
          <h1>
            Learn more about the folks behind OKEA and the story behind OKEA!
          </h1>
        </div>
      </main>
    </div>
  );
}
