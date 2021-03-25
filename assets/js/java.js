dateEl= document.getElementById('date')
timeEl= document.getElementById('timeSet')




function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateEl.textContent= (rightNow);
  }

  function printDayTask(task, time ) {

      var hourToday = moment(time, 'LT').diff(moment(), 'days');

  }






  setInterval(displayTime, 1000);