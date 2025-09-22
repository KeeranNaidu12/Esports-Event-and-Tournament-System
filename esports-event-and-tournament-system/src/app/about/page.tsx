import React from "react";
import NavBar from "../../components/NavBar";
import Exec from "../../components/Exec";

export default function About() {
  return (
    <div className="bg-indigo-500 min-h-screen">
      <NavBar />
      <main className="">
        <div className="flex items-center justify-center min-h-[calc(50vh-4rem)]">
          <h1 className="font-bold text-6xl text-white m-10">
            Meet the visionary leader driving OKEA's mission forward!
          </h1>
        </div>
        {/* Executives */}
        <h2 className="font-bold text-5xl text-center text-white m-10 justify-items-center">
          Executives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <Exec />
          <Exec />
          <Exec />
          <Exec />
          <Exec />
          <Exec />
          <Exec />
        </div>
        {/* Game Coordinators */}
        <h2 className="font-bold text-5xl text-center text-white m-10 justify-items-center">
          Game Coordinators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <Exec />
          <Exec />
          <Exec />
          <Exec />
        </div>
      </main>
    </div>
  );
}
