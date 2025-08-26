import React, { useEffect, useState } from "react";

function Ticker() {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    const updateTime = () => setDateTime(new Date().toLocaleString());
    updateTime();
    const timer = setInterval(updateTime, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(`Lat: ${pos.coords.latitude.toFixed(2)}, Lon: ${pos.coords.longitude.toFixed(2)}`);
      });
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-cyan-700 text-white text-sm py-2 px-4">
      <marquee>
        {dateTime} | {location} | Welcome to Beauty Of Beaches 🌊
      </marquee>
    </div>
  );
}

export default Ticker;
