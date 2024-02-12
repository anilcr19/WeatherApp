const apiKey = 'f90d4090ac2d84ca15b9d9c71236eeb0';

const fetchWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default fetchWeather;