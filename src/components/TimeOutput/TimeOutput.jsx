import classes from './TimeOutput.module.css';
import getFullTimeData from './getFullTimeData';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const TimeOutput = ({ className, ms }) => {
  // Данные о текущем времени
  const data = getFullTimeData(ms);

  const [zoneValue, zoneName] = data.timeZone.split(' ');

  return (
  
  <div>
    <div className={classes.mainData}>
      <div className={classes.dataBlocks}>
          <div className={classes.dataBlock}>
            <svg viewBox="0 0 24 24" version="1.1" width={22} height={22} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#263445">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M24,12a1,1,0,0,1-2,0A10.011,10.011,0,0,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12Zm-8,1a1,1,0,0,0,0-2H13.723A2,2,0,0,0,13,10.277V7a1,1,0,0,0-2,0v3.277A1.994,1.994,0,1,0,13.723,13ZM1.827,6.784a1,1,0,1,0,1,1A1,1,0,0,0,1.827,6.784ZM2,12a1,1,0,1,0-1,1A1,1,0,0,0,2,12ZM12,22a1,1,0,1,0,1,1A1,1,0,0,0,12,22ZM4.221,3.207a1,1,0,1,0,1,1A1,1,0,0,0,4.221,3.207ZM7.779.841a1,1,0,1,0,1,1A1,1,0,0,0,7.779.841ZM1.827,15.216a1,1,0,1,0,1,1A1,1,0,0,0,1.827,15.216Zm2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,4.221,18.793Zm3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,7.779,21.159Zm14.394-5.943a1,1,0,1,0,1,1A1,1,0,0,0,22.173,15.216Zm-2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,19.779,18.793Zm-3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,16.221,21.159Z"></path>
              </g>
            </svg>
            <span className={classes.dataTitle}>Точное время: </span>
            <span className={classes.dataValue}>{data.time}</span>
          </div>

          <div className={classes.dataBlock}>
            <svg viewBox="0 0 24 24" version="1.1" width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                  stroke="#263445"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000" />
              </g>
            </svg>
            <span className={classes.dataTitle}>Дата: </span>
            <span className={classes.dataValue}>{data.date}</span>
          </div>

          <div className={classes.dataBlock}>
            <svg viewBox="0 0 24 24" version="1.1" width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Calendar / Calendar_Week">
                  <path
                    id="Vector"
                    d="M4 8H20M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8M20 8V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H16M8 4H16M8 4V2M16 4V2M16 12H8"
                    stroke="#263445"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>

            <span className={classes.dataTitle}>День недели: </span>
            <span className={classes.dataValue}>{data.weekName}</span>
          </div>

          <div className={classes.dataBlock}>
            <svg viewBox="0 0 24 24" version="1.1" width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="stopwatch_4" data-name="stopwatch 4">
                <path
                  fill="#263445"
                  d="m19.83 8.46 1.25-1.53A.84.84 0 0 0 21 5.76l-1-.84a.82.82 0 0 0-1.23.08l-1.2 1.45A9.35 9.35 0 0 0 14 5.13V4h1.17a.83.83 0 0 0 .83-.83V1.83a.83.83 0 0 0-.83-.83H9.83a.83.83 0 0 0-.83.83v1.34a.83.83 0 0 0 .83.83H11v1.13a9.45 9.45 0 0 0-3.78 1.48L5.93 5a.84.84 0 0 0-1.17-.11l-1 .85a.82.82 0 0 0-.12 1.16L5 8.59v.05a9.49 9.49 0 1 0 14.79-.18zm-.4-2.66.77.63-1.06 1.29a9.56 9.56 0 0 0-.75-.66zM10 2h5v1h-5zm2 2h1v1h-1zM4.49 6.43l.78-.63 1.15 1.41a9.33 9.33 0 0 0-.73.68zM12.5 23a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"
                />
                <path
                  fill="#263445"
                  d="M12.5 7.25a7.26 7.26 0 0 0-7.25 7.25.5.5 0 0 0 .5.5h6.75a.5.5 0 0 0 .5-.5V7.75a.5.5 0 0 0-.5-.5zM12 14H6.27A6.25 6.25 0 0 1 12 8.27z"
                />
              </g>
            </svg>
            <span className={classes.dataTitle}>Часовой пояс: </span>
            <div className={classes.dataValue}><span className={classes.zoneValue}>{zoneValue} </span> <span className={classes.zoneName}>({zoneName})</span></div>
          </div>

          <div className={classes.dataBlock}>
            <svg viewBox="0 0 24 24" version="1.1" width={23} height={23} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#263445">
              <g id="calendar_number" data-name="calendar number">
                <path
                  fill="#263445"
                  d="M22.5 3H21V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h-4V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1H7V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2.5A1.5 1.5 0 0 0 1 4.5v18A1.5 1.5 0 0 0 2.5 24h20a1.5 1.5 0 0 0 1.5-1.5v-18A1.5 1.5 0 0 0 22.5 3zM19 2h1v3h-1zm-7 0h1v3h-1zM5 2h1v3H5zM2.5 4H4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h1.5a.5.5 0 0 1 .5.5V8H2V4.5a.5.5 0 0 1 .5-.5zm20 19h-20a.5.5 0 0 1-.5-.5V9h21v13.5a.5.5 0 0 1-.5.5z"
                />
                <path
                  fill="#263445"
                  d="M10.62 15.89a3.35 3.35 0 0 0-1.28-.26h-.18l2.14-2.38.09-.12a.29.29 0 0 0 0-.14v-.39a.26.26 0 0 0-.07-.2.25.25 0 0 0-.19-.07h-4.4a.24.24 0 0 0-.18.07.26.26 0 0 0-.07.2v.4a.25.25 0 0 0 .07.19.28.28 0 0 0 .18.06H10L7.85 15.6l-.08.13a.33.33 0 0 0 0 .17v.3a.27.27 0 0 0 .07.19.29.29 0 0 0 .19.07H9a2 2 0 0 1 1.2.31 1.17 1.17 0 0 1 .43 1 1.26 1.26 0 0 1-.48 1.07 1.93 1.93 0 0 1-1.15.4 3.53 3.53 0 0 1-.72-.08 1.53 1.53 0 0 1-.64-.31 1.15 1.15 0 0 1-.38-.62.31.31 0 0 0-.18-.23.27.27 0 0 0-.18 0h-.54a.24.24 0 0 0-.17.06.22.22 0 0 0-.07.16 1.65 1.65 0 0 0 .2.7 1.91 1.91 0 0 0 .54.64 2.56 2.56 0 0 0 .87.46 3.79 3.79 0 0 0 1.27.16 3.55 3.55 0 0 0 1.46-.28 2.42 2.42 0 0 0 1-.8 2.12 2.12 0 0 0 .37-1.27 2.15 2.15 0 0 0-.31-1.21 1.85 1.85 0 0 0-.9-.73zM18.47 14.05a2.73 2.73 0 0 0-.49-1 2.26 2.26 0 0 0-.86-.65 3.1 3.1 0 0 0-1.29-.24 3 3 0 0 0-1.28.24 2.26 2.26 0 0 0-.86.65 2.93 2.93 0 0 0-.5 1A4.76 4.76 0 0 0 13 15.2V17.17a5.31 5.31 0 0 0 .17 1.15 2.69 2.69 0 0 0 .49 1 2.09 2.09 0 0 0 .86.65 3.1 3.1 0 0 0 1.29.24 3.11 3.11 0 0 0 1.3-.24 2.06 2.06 0 0 0 .85-.65 2.86 2.86 0 0 0 .49-1 4 4 0 0 0 .17-1.15V15.2a4 4 0 0 0-.15-1.15zm-.91 2.43v.63a2.59 2.59 0 0 1-.43 1.55 1.49 1.49 0 0 1-1.28.57 1.48 1.48 0 0 1-1.27-.57 2.59 2.59 0 0 1-.44-1.55V15.27a2.68 2.68 0 0 1 .44-1.55 1.44 1.44 0 0 1 1.27-.58 1.47 1.47 0 0 1 1.28.58 2.68 2.68 0 0 1 .43 1.55v.61z"
                />
              </g>
            </svg>
            <span className={classes.dataTitle}>День в году: </span>
            <span className={classes.dataValue}>{data.dayNumber}</span>
          </div>

          <div className={classes.dataBlock}>
            <svg viewBox="0 0 28 28" version="1.1" width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#263445">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="ic_fluent_calendar_week_start_28_regular" fill="#263445" fillRule="nonzero">
                    <path d="M6.25,25 C4.45507456,25 3,23.5449254 3,21.75 L3,6.25 C3,4.45507456 4.45507456,3 6.25,3 L21.75,3 C23.5449254,3 25,4.45507456 25,6.25 L25,21.75 C25,23.5449254 23.5449254,25 21.75,25 L6.25,25 Z M6.25,23.5 L21.75,23.5 C22.7164983,23.5 23.5,22.7164983 23.5,21.75 L23.5,6.25 C23.5,5.28350169 22.7164983,4.5 21.75,4.5 L6.25,4.5 C5.28350169,4.5 4.5,5.28350169 4.5,6.25 L4.5,21.75 C4.5,22.7164983 5.28350169,23.5 6.25,23.5 Z M8.75,19.75 C8.37030423,19.75 8.05650904,19.4678461 8.00684662,19.1017706 L8,19 L8,9 C8,8.58578644 8.33578644,8.25 8.75,8.25 C9.12969577,8.25 9.44349096,8.53215388 9.49315338,8.89822944 L9.5,9 L9.5,19 C9.5,19.4142136 9.16421356,19.75 8.75,19.75 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <span className={classes.dataTitle}>Неделя в году: </span>
            <span className={classes.dataValue}>{data.weekNumber}</span>
          </div>
      </div>
      <Clock value={ms} hourMarksWidth={2} renderNumbers={true} minuteMarksLength={4} hourHandOppositeLength={5} minuteHandOppositeLength={5} />
    </div>
    <div className={classes.universalBlock}>
      <div className={classes.universalTitle}>Всемирное время <span className={classes.universalUTC}>(UTC)</span></div>
      <span className={classes.universalValue}>{data.universalTime}</span>
    </div>
  </div>
  )
}

export default TimeOutput;

