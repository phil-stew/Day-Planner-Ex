dateEl= document.getElementById('TodaysDate');
timeEl= document.getElementById('timeSet');
workTime= document.getElementById('worktime');
submitBtn = document.getElementById('button-addon2')
inputDayPlanEl = document.getElementById('text');




savingItems();


//submitBtn.addEventListener('click', function(event){
    //event.preventDefault();

    //var timePlaned = 9
        
    
$(".btn").click(function (e) { 
    e.preventDefault();
    console.log(this)
    
    this.value = dayPlan
    console.log(dayPlan)



    var dayPlannner = document.getElementById('text').value;
    localStorage.setItem(dayPlan , dayPlannner);
    var dayPlans = localStorage.getItem(dayPlan).value;
    dayPlanEl.textContent = dayPlans;
    console.log(dayPlans)

});

function savingItems(){
    
    dayPlanEl = document.getElementById('text');
    activityData= dayPlanEl.value 
     var activityData = localStorage.getItem(dayPlan);
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
