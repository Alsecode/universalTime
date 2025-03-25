// Получение времени типа: часы:минуты:секунды.миллисекунды
const getFormattedTime = (ms) => {
  const now = new Date(ms);
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  return formattedTime;
}

// Получение даты в российском формате: число дня, название месяца, год
const getFormattedDate = (ms) => {
  const now = new Date(ms);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  let formattedDate = now.toLocaleDateString('ru-RU', options);

  formattedDate = formattedDate.replace(' г.', ' года');

  return formattedDate;
}

// Получение дня недели
const getDayOfTheWeek = (ms) => {
  const date = new Date(ms);
  const dayOfTheWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });

  return dayOfTheWeek;
}

// Получение часового пояса
const getTimeZone = (ms) => {
  const date = new Date(ms);

  // Смещение в минутах от UTC
  const offsetMinutes = date.getTimezoneOffset();

  // Знак смещения
  const sign = offsetMinutes <= 0 ? '+' : '-';

  // Количество часов смещения
  const hoursOffset = Math.floor(Math.abs(offsetMinutes) / 60);
  const absOffset = Math.abs(offsetMinutes);
  const minutesOffset = (absOffset % 60).toString().padStart(2, '0');
  
  // Строка с GMT-смещением
  const gmtString = minutesOffset === 0 ? `GMT${sign}${hoursOffset}:${minutesOffset}` : `GMT${sign}${hoursOffset}`;

  // IANA-идентификатор часового пояса
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return `${gmtString} ${timeZone}`;
}

// Получение номера дня в году
const getNumberOfTheDay = (ms) => {
  const date = new Date(ms);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayNumber = Math.floor(diff / oneDay);

  return dayNumber;
}

// Получение номера недели в году
const getNumberOfTheWeek = (ms) => {
  const date = new Date(ms);
  // Дата в формате UTC (без учета часового пояса)
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

  // Устанавка даты на ближайший четверг: смещение даты так, чтобы получить правильное определение недели
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

  // Первый день года в UTC
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

  // Разница в днях и деление на 7, округляя в большую сторону
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

  return weekNo;
}

// Получение всемирного времени
const getUniversalTime = (ms) => {
  const now = new Date(ms);

  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const seconds = now.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = now.getUTCMilliseconds().toString().padStart(3, '0');

  const utcTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  
  return utcTime;
}

// Получение всех данных о дате
const getFullTimeData = (ms) => {
  return {
    time: getFormattedTime(ms),
    date: getFormattedDate(ms),
    weekName: getDayOfTheWeek(ms),
    timeZone: getTimeZone(ms),
    dayNumber: getNumberOfTheDay(ms),
    weekNumber: getNumberOfTheWeek(ms),
    universalTime: getUniversalTime(ms),
  }
}

export default getFullTimeData;