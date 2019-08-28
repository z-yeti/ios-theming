var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
var weatherDesc = [
  'Tornado',
  'Tropical Storm',
  'Hurricane',
  'Thunderstorm',
  'Thunderstorm',
  'Snow',
  'Sleet',
  'Sleet',
  'Freezing Drizzle',
  'Drizzle',
  'Freezing Rain',
  'Showers',
  'Showers',
  'Flurries',
  'Snow',
  'Snow',
  'Snow',
  'Hail',
  'Sleet',
  'Dust',
  'Fog',
  'Haze',
  'Smoky',
  'Blustery',
  'Windy',
  'Cold',
  'Cloudy',
  'Cloudy',
  'Cloudy',
  'Cloudy',
  'Cloudy',
  'Clear',
  'Sunny',
  'Fair',
  'Fair',
  'Sleet',
  'Hot',
  'Thunderstorms',
  'Thunderstorms',
  'Thunderstorms',
  'Showers',
  'Heavy Snow',
  'Light Snow',
  'Heavy Snow',
  'Partly Cloudy',
  'Thunderstorm',
  'Snow',
  'Thunderstorm',
  'blank'
];

window.addEventListener(
  'load',
  function() {
    document.body.style.width = '100%';
    document.body.style.height = '100%';
  },
  false
);

function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes =
    currentTime.getMinutes() < 10
      ? '0' + currentTime.getMinutes()
      : currentTime.getMinutes();
  var currentSeconds =
    currentTime.getSeconds() < 10
      ? '0' + currentTime.getSeconds()
      : currentTime.getSeconds();
  var currentDate =
    currentTime.getDate() < 10
      ? '0' + currentTime.getDate()
      : currentTime.getDate();
  timeOfDay = currentHours < 12 ? 'am' : 'pm';

  if (Clock == '24h') {
    timeOfDay = '';
    currentHours = (currentHours < 10 ? '0' : '') + currentHours;
    currentTimeString = currentHours + ':' + currentMinutes;
  }
  if (Clock == '12h') {
    currentHours = (currentHours < 10 ? '0' : '') + currentHours;
    currentHours = currentHours == 0 ? '12' : currentHours;
    currentHours = currentHours == 13 ? '01' : currentHours;
    currentHours = currentHours == 14 ? '02' : currentHours;
    currentHours = currentHours == 15 ? '03' : currentHours;
    currentHours = currentHours == 16 ? '04' : currentHours;
    currentHours = currentHours == 17 ? '05' : currentHours;
    currentHours = currentHours == 18 ? '06' : currentHours;
    currentHours = currentHours == 19 ? '07' : currentHours;
    currentHours = currentHours == 20 ? '08' : currentHours;
    currentHours = currentHours == 21 ? '09' : currentHours;
    currentHours = currentHours == 22 ? '10' : currentHours;
    currentHours = currentHours == 23 ? '11' : currentHours;
    currentHours = currentHours == 24 ? '12' : currentHours;
    currentTimeString = currentHours + ':' + currentMinutes;
  }

  document.getElementById('hour').innerHTML = currentHours;
  document.getElementById('minute').innerHTML = currentMinutes;
  document.getElementById('weekday').innerHTML = days[currentTime.getDay()];
  document.getElementById('date').innerHTML = currentDate;
  document.getElementById('month').innerHTML = months[currentTime.getMonth()];
}
function init() {
  updateClock();
  setInterval('updateClock();', 15000);
}
