import { useEffect, useState } from 'react';
import './App.css';
import Results from './component/Results';
import Search from './component/Search';
import axios from 'axios';


function App() {
  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState("");

  const addSearch = (value) => {
    setSearch(value);
  };

  const searchHandler = () => {
    if (search === "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
        .then((respone) => {
          console.log(respone);
        }).catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div className='container mt-2'>
      <Search search={search} eventHandler={addSearch} searchWeather={searchHandler} />
      <Results />
    </div>
  );
}

export default App;
