import { getDayOfWeek } from '../../helpers/getDayOfWeek';
import { getUniqueDayNames } from '../../helpers/getUniqueDayNames';
import Card from '../Card/Card';
import styles from './WeatherForecast.module.scss';

const WeatherForecast = ({ weatherDataHourly }) => {
  const uniqueDayNames = getUniqueDayNames(weatherDataHourly);

  return (
    <Card title={'Weather'}>
      <div
        className={styles.forecastScroll}
        role="region"
        aria-label="5-day weather forecast"
        tabIndex="0"
      >
        {uniqueDayNames.map((dayName) => (
          <div key={dayName}>
            <span className={styles.dayWithDate}>{dayName}</span>
            <ul className={styles.forecastList}>
              {weatherDataHourly &&
                weatherDataHourly.list.map((data) => {
                  if (getDayOfWeek(data.dt) === dayName) {
                    return (
                      <li className={styles.forecastItem} key={data.dt}>
                        <p>{data.dt_txt.split(' ')[1].slice(0, 5)}</p>
                        <img
                          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                          alt={data.weather[0].description || 'Weather icon'}
                        />
                        <p>
                          {data.main.temp.toFixed(1)}
                          <span>°C</span>
                        </p>
                      </li>
                    );
                  }
                  return null;
                })}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeatherForecast;
