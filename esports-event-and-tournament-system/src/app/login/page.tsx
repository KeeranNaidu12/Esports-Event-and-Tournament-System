import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/ubco.png')" }}
    >
      <NavBar />
      <main>
        <div className="mt-10 bg-indigo-900 p-5 rounded">
          <h1 className="text-white font-bold text-2xl mb-5">
            Are you a member of OKEA?
            <br />
            Log into your account to access exclusive features!
          </h1>
          <div className="flex flex-col items-center space-x-5">
            <Image
              className="flex justify-center mb-5 border-2 border-blue-500 w-30 h-30 rounded"
              src="/OKEA_Logo_Shine.png.gif"
              alt="UBCO_gif"
              width={150}
              height={100}
              unoptimized
            />
            <form>
              <div className="">
                <div className="m-1">
                  <label className="text-white font-semibold">Email: </label>
                  <br />
                  <input
                    className="bg-gray-300 font-semibold rounded-2xl text-blue-600 pl-2"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <br />
                <div className="m-1">
                  <label className="text-white font-semibold">Password: </label>
                  <br />
                  <input
                    className="bg-gray-300 font-semibold text-blue-600 rounded-2xl pl-2"
                    type="password"
                    name="password"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
