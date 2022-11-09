const countdown = () => {
  const mernDevTime = new Date("may 20, 2023 00:00:00").getTime();
  const currentTime = new Date().getTime();
  const gap = mernDevTime - currentTime;

  //times converted from milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //display times setting
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % hour) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  //add in html
  const days = (document.getElementById("day").innerHTML = textDay);
  const hours = (document.getElementById("hour").innerHTML = textHour);
  console.log(hours);
  const minutes = (document.getElementById("minute").innerHTML = textMinute);
  const seconds = (document.getElementById("second").innerHTML = textSecond);
};

setInterval(countdown, 1000);
