import { useState, useEffect } from "react";

const Elemento2 = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setLaps(laps + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [laps]);

  return (
    <section className="max-w-md mx-auto mt-10 p-8 bg-yellow-100 rounded-lg shadow-lg border border-gray-200">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cronómetro</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-5xl font-mono font-bold text-blue-600 mb-2">
            {time}s
          </p>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Tiempo
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <p className="text-3xl font-bold text-green-600 mb-2">{laps}</p>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Vueltas
          </p>
        </div>

        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-extrabold py-5 px-8 rounded-xl shadow-xl hover:from-pink-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 active:scale-95 ring-2 ring-pink-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
        >
          Nueva Vuelta
        </button>
      </div>
    </section>
  );
};

export default Elemento2;
