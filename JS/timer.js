const getRemainingDateTime = () => {
  const now = new Date();
  const newYearDate = new Date(`${now.getFullYear() + 1}-01-01T00:00:00`);
  
  const remainingMilliseconds = newYearDate - now;
  const remainingSeconds = remainingMilliseconds / 1000;
  const remainingMinutes = remainingSeconds / 60;
  const remainingHours = remainingMinutes / 60;
  const remainingDays = Math.floor(remainingHours / 24);

  return {
    days: remainingDays,
    hours: 24 - now.getHours() - 1,
    minutes: 60 - now.getMinutes() - 1,
    seconds: 60 - now.getSeconds() - 1,
  }
}

const updateTimerData = (fillingElements, dateData) => {
  fillingElements.days.textContent = dateData.days;
  fillingElements.hours.textContent = dateData.hours;
  fillingElements.minutes.textContent = dateData.minutes;
  fillingElements.seconds.textContent = dateData.seconds;
}

const updateDateTimeAttribute = (element, dateData) => {
  element.dateTime = 
  `${dateData.days}d ${dateData.hours}h ${dateData.minutes}m ${dateData.seconds}s`
}


const timer = document.querySelector('.timer');
const timerElements = timer.querySelectorAll('.timer-element .timer-text');
const timerDataElements = {
  days: timerElements[0].firstElementChild,
  hours: timerElements[1].firstElementChild,
  minutes: timerElements[2].firstElementChild,
  seconds: timerElements[3].firstElementChild,
}

updateDateTimeAttribute(timer, getRemainingDateTime());

setInterval(() => {
  updateTimerData(timerDataElements, getRemainingDateTime());
}, 1000);