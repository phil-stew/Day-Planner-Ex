dateEl= document.getElementById('date');
timeEl= document.getElementById('timeSet');
workTime= document.getElementById('worktime');
submitBtn = document.getElementById('button-addon2')





function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateEl.textContent= (rightNow);

  }function printDayTask(task, time ) {
  var hourToday = moment(time, 'LT').diff(moment(), 'days');
  };

 setInterval(displayTime, 1000);
  
function localStorage(){
    event.preventDefault();

}




var timeDay = moment().startOff(9)
workTime.textContent= (timeDay);