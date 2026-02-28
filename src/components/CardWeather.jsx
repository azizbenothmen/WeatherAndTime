import { useState } from "react";

const CardWeather = () => {
  const [name, setName] = useState("");

  return (
    <div className="h-screen w-screen -translate-x-120 bg-blue-400 flex items-center justify-center font-serif">
      <div className="relative w-[420px] rounded-3xl p-12 bg-white/8 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">

       
        <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

        <div className="text-5xl text-center mb-3">🌤️</div>

        <h1 className="text-center text-white text-2xl font-bold tracking-wide mb-1">
          Météo
        </h1>
        <p className="text-center text-white text-xs tracking-widest uppercase mb-9">
          Recherche par pays
        </p>

        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg opacity-50">🔍</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez un pays..."
            className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/35 text-sm outline-none focus:border-blue-400/70 focus:ring-4 focus:ring-blue-400/10 transition-all duration-200"
          />
        </div>

        <button
          type="button"
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold tracking-wide text-sm shadow-lg shadow-blue-500/30 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150"
        >
          Chercher
        </button>
      </div>
    </div>
  );
};

export default CardWeather;