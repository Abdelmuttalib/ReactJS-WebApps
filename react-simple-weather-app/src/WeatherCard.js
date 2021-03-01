import React from 'react';

const WeatherCard = ({ weatherInfo }) => {

  const toCelius = (fahrenheit) => {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
      console.log(fToCel);
      return fToCel;
  }
  const celius = toCelius(weatherInfo.temp);
  // 25C

  return(
    <div className='cardContainer'>
    <p className='cardCity'>{weatherInfo.city}</p>
    <div>
      <img className='cardPic' src={weatherInfo.icon} alt='iconPicture'/>
    </div>
    <div className='cardIconContainer'>
    <span className='cardMoreInfo'><img className='cardIcon'/><span className='cardIconText'>{weatherInfo.weatherStatus}</span></span>
    <span className='cardMoreInfo'><img className='cardIcon' src='https://library.kissclipart.com/20180830/vpe/kissclipart-wind-clipart-wind-computer-icons-6a8c05fa926b74b1.png' alt='windSpeed'/><span className='cardIconText'>{weatherInfo.windSpeed}<span className='unit'> mph</span></span></span>
    <span className='cardMoreInfo'><img className='cardIcon' src='https://image.flaticon.com/icons/png/128/2933/2933951.png' alt='pressure'/><span className='cardIconText'>{weatherInfo.pressure}<span className='unit'> atm</span></span></span>
    </div>
    <p className='cardCelius'>{celius.toFixed(0)}°</p>
    </div>
  )
}

export default WeatherCard;
