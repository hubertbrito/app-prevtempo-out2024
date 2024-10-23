import "./weatherInfo.css";

function WeatherInformation({ weather, backgroundColor }) {
  return (
    <div className="container-dados" style={{ backgroundColor }}>
      <h2>{weather?.name}</h2>
      <div>
        {weather?.weather?.[0]?.icon && (
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={`Ícone do clima para ${weather.name}`}
          />
        )}
        {weather?.main?.temp && !isNaN(weather.main.temp) && (
          <p>Temperatura:&nbsp; {Math.round(weather.main.temp)}°C</p>
        )}
      </div>
      <p>{weather?.weather?.[0]?.description}</p>
      <div>
        <div className="info-clima-cidade ">
          <div className="info-clima-cidade">
            <p>Sensação termica:&nbsp; </p>
            <span>
              {" "}
              {!isNaN(weather.main?.feels_like) && (
                <p>{Math.round(weather.main.feels_like)}</p>
              )}
            </span>
          </div>
          <div className="info-clima-cidade">
            <p>Umidade:&nbsp; </p>
            <span>
              {" "}
              {!isNaN(weather.main?.humidity) && (
                <p>{Math.round(weather.main.humidity)}%</p>
              )}
            </span>
          </div>

          <div className="info-clima-cidade">
            <p>Pressão:&nbsp; </p>
            <span>
              {" "}
              {!isNaN(weather.main?.pressure) && (
                <p>{Math.round(weather.main.pressure)}</p>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInformation;
