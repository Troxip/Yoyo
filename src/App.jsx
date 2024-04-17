import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-700 p-10 w-screen h-screen">
      <div className="flex justify-center">
        <img
          className="w-4/12"
          src="https://capnco.gg/_app/immutable/assets/CapCompanyLogo.wEV2_GJJ.webp"
          alt="logo"
        ></img>
      </div>
      <div className="gap-4 grid grid-cols-4 mt-20">
        <figure className="bg-auto bg-slate-400 p-4 rounded-xl h-52">
          <h1 className="font-bold text-3xl text-center">Ship 1</h1>
          <h2 className="font-bold text-3xl text-center text-white">GR33DY</h2>
        </figure>
      </div>
    </div>
  );
}

export default App;
