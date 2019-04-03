const timeContainer = document.getElementById('time');
const dateContainer = document.getElementById('date');
const hourContainer = document.getElementById('hour');
const minuteContainer = document.getElementById('minute');
const weatherContainer = document.getElementById('weather');
const chargeContainer = document.getElementById('charge');

const dayMonth = dateFns.format(new Date(), 'DD.MMM.YYYY');
dateContainer.innerHTML = dayMonth;

const hour = dateFns.format(new Date(), 'HH');

var a = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen '
];
var b = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];

function inWords(num) {
  if ((num = num.toString()).length > 9) return 'overflow';
  n = ('000000000' + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = '';
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore '
      : '';
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh '
      : '';
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand '
      : '';
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred '
      : '';
  str +=
    n[5] != 0
      ? (str != '' ? 'and ' : '') +
        (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])
      : '';
  return str;
}
hourContainer.innerHTML = inWords(hour);

const minute = dateFns.format(new Date(), '.mm');
minuteContainer.innerHTML = minute;

function mainUpdate(type) {
  if (type == 'battery') {
    if (batteryCharging) {
      chargeContainer.className = 'animate';
    } else {
      battery.className = ' ';
    }
  }
  // if (type == 'weather') {
  //   weatherDiv.innerHTML = weather.city + ' | ' + weather.temperature + '&deg;';
  // }
}
