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

        setShowBanner(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={fetchWeather}>
      <div className="min-h-screen w-full flex items-center justify-center px-4">
        <div className="relative w-full max-w-xs rounded-2xl p-5 bg-blue-500 backdrop-blur-2xl border border-white/10 shadow-xl overflow-hidden translate-y-20">

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
            <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50">
              🔍
            </span>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez un pays..."
              className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/40 text-sm outline-none focus:border-blue-400/70 transition"
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
                  <p className="text-white text-xs uppercase">
                    🌍 {city}
                  </p>
                  <p className="text-white text-2xl font-bold">
                    {value}°C
                  </p>
                </div>

                <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                  <p className="text-white text-2xl font-bold">
                    {Time}
                  </p>
                  <p className="text-white/60 text-xs">
                    Heure locale
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                  <p className="text-white text-lg font-bold">
                    {SunRise}
                  </p>
                  <p className="text-white/60 text-xs">
                    Lever du soleil
                  </p>
                </div>

                <div className="bg-white/15 border border-white/25 rounded-xl p-3 text-center flex-1">
                  <p className="text-white text-lg font-bold">
                    {SunSet}
                  </p>
                  <p className="text-white/60 text-xs">
                    Coucher du soleil
                  </p>
                </div>
              </div>

            </div>
          )}

          <h2 className="text-center text-white/70 text-xs mt-4">
            © 2026 AzizBenothmen
          </h2>

        </div>
      </div>
    </form>
  );
};

export default CardWeather;