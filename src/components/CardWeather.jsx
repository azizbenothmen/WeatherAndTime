import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CardWeather = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);
  const [city, setCity] = useState("");
  const [Time, setTime] = useState("");
  const [Icon, SetIcon] = useState("");
  const [SunRise, SetSunRise] = useState("");
  const [SunSet, SetSunSet] = useState("");
  const [chanceRain, setchanceRain] = useState(null);
  const[totalPrec,settotalPrec]=useState(null);
  const[wind,setWind]=useState(null);
  const [humidity,sethumidity]=useState(null);
  const [showMore, setShowMore] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URI;

  const fetchWeather = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`${apiUrl}${name}&aqi=no`);

      if (data) {
        toast.success(data.location.country);

        SetIcon(data.current.condition.icon);
        setTime(data.location.localtime.substr(-5));
        setValue(data.current.temp_c);
        setCity(data.location.name);
        SetSunRise(data.forecast.forecastday[0].astro.sunrise);
        SetSunSet(data.forecast.forecastday[0].astro.sunset);
        setchanceRain(data.forecast.forecastday[0].day.daily_chance_of_rain);
        settotalPrec(data.forecast.forecastday[0].day.totalprecip_mm);
        setWind(data.current.wind_kph);
        sethumidity(data.current.humidity);


        setShowBanner(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={fetchWeather}>
        <div className="min-h-screen w-full flex items-center justify-center px-4">
          <div
            className={`relative w-full max-w-xs rounded-2xl p-5 bg-blue-500 backdrop-blur-2xl border border-white/10 shadow-xl overflow-hidden translate-y-20 transition ${
              showMore ? "blur-sm" : ""
            }`}
          >
            <div className="text-center mb-2">
              {Icon && (
                <img
                  src={Icon}
                  alt="weather icon"
                  className="mx-auto h-20 w-20"
                />
              )}
            </div>

            <h1 className="text-center text-white text-lg font-bold mb-1">
              Météo
            </h1>

            <p className="text-center text-white/60 text-xs uppercase mb-5">
              Recherche par pays
            </p>

            <div className="relative mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrez un pays..."
                className="w-full pl-3 pr-3 py-2 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm outline-none focus:border-blue-400/70 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-xl bg-white text-blue-700 font-semibold text-sm shadow-md hover:opacity-90 transition"
            >
              Chercher
            </button>

            {showBanner && value !== null && (
              <div className="mt-4 space-y-3">
                <div className="flex justify-between gap-2">
                  <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                    <p className="text-white text-xs uppercase">🌍 {city}</p>
                    <p className="text-white text-2xl font-bold">{value}°C</p>
                  </div>

                  <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                    <p className="text-white text-2xl font-bold">{Time}</p>
                    <p className="text-white/60 text-xs">Heure locale</p>
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                    <p className="text-white text-lg font-bold">{SunRise}</p>
                    <p className="text-white/60 text-xs">Lever du soleil</p>
                  </div>

                  <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                    <p className="text-white text-lg font-bold">{SunSet}</p>
                    <p className="text-white/60 text-xs">Coucher du soleil</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowMore(true)}
                  className="w-full py-2 rounded-xl bg-white text-blue-700 font-semibold text-sm shadow-md hover:opacity-90 transition"
                >
                  Plus d'informations
                </button>
              </div>
            )}

            <h2 className="text-center text-white/70 text-xs mt-4">
              © 2026 AzizBenothmen
            </h2>
          </div>
        </div>
      </form>

     {showMore && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">

    <div className="relative w-full max-w-sm rounded-2xl p-6 bg-blue-500 backdrop-blur-2xl border border-white/10 shadow-xl text-white">
    <div className="text-center mb-2">
              {Icon && (
                <img
                  src={Icon}
                  alt="weather icon"
                  className="mx-auto h-20 w-20"
                />
              )}
            </div>

      <h2 className="text-center text-lg font-bold mb-6">
        Informations détaillées
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/15 border border-white/25 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold">{chanceRain}%</p>
          <p className="text-white/70 text-xs uppercase">
            Chance de pluie
          </p>
        </div>

        <div className="bg-white/15 border border-white/25 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold">{totalPrec} mm</p>
          <p className="text-white/70 text-xs uppercase">
            Précipitations
          </p>
        </div>

        <div className="bg-white/15 border border-white/25 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold">{wind} kph</p>
          <p className="text-white/70 text-xs uppercase">
            Vent
          </p>
        </div>

        <div className="bg-white/15 border border-white/25 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold">{humidity}%</p>
          <p className="text-white/70 text-xs uppercase">
            Humidité
          </p>
        </div>

      </div>

      <button
        onClick={() => setShowMore(false)}
        className="mt-6 w-full py-2 rounded-xl bg-white text-blue-600 font-semibold shadow-md hover:opacity-90 transition"
      >
        Retour
      </button>

    </div>

  </div>
)}
    </>
  );
};

export default CardWeather;