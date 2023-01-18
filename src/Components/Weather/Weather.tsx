import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Weather = () => {
  const [lat, setLat] = useState<number>(18.4635801);
  const [lon, setLon] = useState<number>(-69.9848061);
  const { isLoading, error, data } = useQuery(
    "Weather",

    () => {
      return axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=68e058a125057ab9646f38c8e5f07a09`
        )
        .then((results) => results.data)
        .catch((error) => {
          console.log(error);
        });
    }
  );

  return (
    <div className="flex flex-1 justify-center items-center flex-col md:flex-row gap-5  md:gap-9  lg:gap-12">
      {data && (
        <>
          <div className="boxes  bg-[#F3E9DC] gap-5">
            <h1>{Math.round(data.main.temp)}˚C</h1>

            <h2>{data.weather[0].description}</h2>
          </div>

          <div className="boxes  bg-[#F1FFC4]">
            <img
              className=" w-42 h-44  md:w-44 md:h-44 xl:w-52 xl:h-52 "
              src="assets/animated/cloudy-day-1.svg"
              alt=""
            />
            <h1>{data.name}</h1>
          </div>

          <div className="boxes  bg-[#ACD4DF] gap-5">
            <h1>Veloc. del viento</h1>
            <h1>{data.wind.speed}m/s</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
