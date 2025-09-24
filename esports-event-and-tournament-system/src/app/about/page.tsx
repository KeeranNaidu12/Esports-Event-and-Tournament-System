import React from "react";
import NavBar from "../components/NavBar";
import Exec from "../components/Exec";

export default function About() {
  return (
    <div className="bg-indigo-500 min-h-screen">
      <NavBar />
      <main>
        <div className="flex items-center justify-center min-h-[calc(50vh-4rem)] bg-indigo-400">
          <h1 className="font-bold text-6xl text-white m-10">
            Meet the visionary leader driving OKEA's mission forward!
          </h1>
        </div>
        {/* Executives */}
        <h2 className="font-bold text-5xl text-center text-white m-10 justify-items-center">
          Executives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <Exec name="Jaiden" role="President" pronouns="He/Him" />
          <Exec name="Mark" role="VP Internal" pronouns="He/Him" />
          <Exec name="Yug" role="VP Events" pronouns="He/Him" />
          <Exec name="Nathan" role="VP Finance" pronouns="He/Him" />
          <Exec name="Ali" role="Esports Director" pronouns="He/Him" />
          <Exec name="Lexi" role="Graphics & Socials" pronouns="She/Her" />
          <Exec name="Pho" role="Event Coordinator" pronouns="They/Them" />
        </div>
        {/* Game Coordinators */}
        <h2 className="font-bold text-5xl text-center text-white m-10 justify-items-center">
          Game Coordinators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <Exec name="Adrian" role="Valorant Director" pronouns="He/Him" />
          <Exec
            name="Jacky"
            role="League of Legends Director"
            pronouns="He/Him"
          />
          <Exec
            name="Jason"
            role="League of Legends Director"
            pronouns="He/Him"
          />
          <Exec
            name="Fissure"
            role="Rocket League Director"
            pronouns="He/Him"
          />
          <Exec
            name="Jacob"
            role="Super Smash Bros Director"
            pronouns="He/Him"
          />
          <Exec name="Yug" role="Strategy Games Director" pronouns="He/Him" />
        </div>
      </main>
    </div>
  );
}
