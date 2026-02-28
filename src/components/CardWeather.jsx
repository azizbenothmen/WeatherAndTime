import { useState } from "react";
import axios from "axios";


const CardWeather = () => {
  const [name, setName] = useState("");
  const [value,setValue]=useState(0);
  const apiUrl = import.meta.env.VITE_API_URI;
 console.log(apiUrl);
  const fetchWeather=async(e)=>{
    console.log("SALIIII");
    e.preventDefault();
    try {
      const {data}= await axios.get(`${apiUrl} ${name}&aqi=no`);
      if(data){
        console.log(data.current.temp_c);
        setValue(data.current.temp_c);
      }
    } catch (error) {
      console.log(error.message);
      
    }

  }

  return (
    <form onSubmit={fetchWeather}>
      <div className="min-h-screen w-full  flex items-center justify-center font-serif px-4 py-8">
        <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-8 sm:p-12 bg-blue-500 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          <div className="text-4xl sm:text-5xl text-center mb-3">🌤️</div>

          <h1 className="text-center text-white text-xl sm:text-2xl font-bold tracking-wide mb-1">
            Météo
          </h1>
          <p className="text-center text-white/60 text-xs tracking-widest uppercase mb-8 sm:mb-9">
            Recherche par pays
          </p>

          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base sm:text-lg opacity-50">
              🔍
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez un pays..."
              className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/35 text-sm outline-none focus:border-blue-400/70 focus:ring-4 focus:ring-blue-400/10 transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r bg-white text-blue-700 font-semibold tracking-wide text-sm shadow-lg shadow-blue-500/30 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150"
          >
            Chercher
          </button>
          <h1>LA TEMPERTURE EST {value}</h1>
        </div>
      </div>
    </form>
  );
};

export default CardWeather;