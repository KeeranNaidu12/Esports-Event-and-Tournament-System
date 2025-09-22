import React from "react";

function Exec() {
  return (
    <div className="bg-indigo-900 rounded-2xl font-bold w-80 h-120 m-5 ml-20 overflow-hidden">
      <div className="flex justify-center p-5 m-5">
        <img
          src="/Venom.png"
          className="w-[240px] h-[240px] object-cover rounded-full"
        ></img>
      </div>
      <h1 className="text-white text-4xl text-center">Venom</h1>
      <br />
      <div className="grid grid-cols-3 text-center bg-indigo-400 ml-5 mr-5 rounded-2xl pl-3 pr-3">
        <h2 className="text-white text-2xl">President </h2>
        <h2 className="text-white text-2xl ml-5">•</h2>
        <h2 className="text-white text-2xl ml-[-20px]">He/Him</h2>
      </div>
    </div>
  );
}

export default Exec;
