dateEl= document.getElementById('TodaysDate');
timeEl= document.getElementById('timeSet');
workTime= document.getElementById('worktime');
submitBtn = document.getElementById('button-addon2')
inputDayPlanEl = document.getElementById('text');




savingItems();


submitBtn.addEventListener('click', function(event){
    event.preventDefault();

    var dayPlannner = document.getElementById('text').value;
    localStorage.setItem("dayplan" , dayPlannner);
    var dayPlans = localStorage.getItem("dayplan").value;
    dayPlanEl.textContent = dayPlans;
    console.log(dayPlans)

   });

function savingItems(){
    dayPlanEl = document.getElementById('text');
    activityData= dayPlanEl.value 

    
     var activityData = localStorage.getItem("dayplan");
     document.getElementById('text').value = activityData;

     console.log(activityData)
     
     console.log(dayPlanEl)
     console.log("dayplan")
}

function displayTime() {
    
    
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateEl.textContent= (rightNow);

}



 function displayHour(){
 var timeDay = moment.locale();
 workTime.textContent= (timeDay);

}
  


 


 setInterval(displayTime, 1000);

 displayHour();
 savingItems();
