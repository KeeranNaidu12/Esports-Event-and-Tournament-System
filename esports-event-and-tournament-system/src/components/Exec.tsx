import React from "react";

interface ExecProps {
  name: string;
  role: string;
  pronouns: string;
}

function Exec({ name, role, pronouns }: ExecProps) {
  return (
    <div className="bg-indigo-900 rounded-2xl font-bold w-80  m-5 ml-20">
      <div className="flex justify-center p-5 m-5">
        <img
          src="/Venom.png"
          className="w-[240px] h-[240px] object-cover rounded-full"
        ></img>
      </div>
      <h1 className="text-white text-4xl text-center">{name}</h1>
      <div className="text-center bg-indigo-400 ml-20 mr-20 mt-3 rounded-2xl white">
        <h2 className="text-white text-2xl text-center">{pronouns}</h2>
      </div>
      <br />
      <div className="text-center text-3xl mb-10 ml-5 mr-5 rounded-2xl white">
        <h2 className="text-white text-2xl">{role} </h2>
      </div>
    </div>
  );
}

export default Exec;
