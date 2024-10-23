import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInformation from './components/weatherInformation/weatherInfo';
import hotImg from './assets/hot.jpg'; // Caminho corrigido
import coldImg from './assets/cold.png';

function App() {
  const [weather, setWeather] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(null); // Imagem padrão para temperaturas baixas
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "f40bf50094fb3a02e5db3e11dadf630b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);

    // Definir a cor de fundo com base na temperatura
    if (apiInfo.data.main.temp > 15) {
      setBackgroundImage(hotImg); // Imagem para temperaturas altas
    } else {
      setBackgroundImage(coldImg); // Imagem para temperaturas baixas
    }
  }

  return (
    <div className='container' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', zIndex: '3', // Ajusta a imagem para cobrir toda a área
      opacity: 0.8 // Define a opacidade para 80%
    }}>
      <div className='container-info'>
        <div className='entrada-dados'>
          <h1>Previsão do tempo</h1>
          <input ref={inputRef} type='text' placeholder='Digite a cidade' />
          <button onClick={searchCity}>Buscar</button>
        </div>
        <WeatherInformation weather={weather} />
      </div>
    </div>
  );
}

export default App;