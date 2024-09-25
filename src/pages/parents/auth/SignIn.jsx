import { Button } from "flowbite-react";
import React from "react";

function SignIn() {
  return (
    <>
      <div className="flex justify-center w-screen h-screen items-center m-auto">
        <div className=" bg-white md:w-2/5 h-96 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center">

          <h1 className="uppercase text-3xl text-primary  py-6 font-black">vaxwise</h1>
          <p>Hey, please login to continue</p>
          <div className="flex flex-col space-y-12 w-full px-12 mt-12">
            <input typeof="text" placeholder="Please enter your phone number" className="rounded-lg w-full text-gray-500 p-3 border border-gray-200 focus:border-gray-200 outline-none"/>
            <button className="w-full bg-primary p-3 rounded-lg hover:bg-primary/75 text-white">Login</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
