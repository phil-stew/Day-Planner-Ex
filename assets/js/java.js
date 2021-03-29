dateEl= document.getElementById('TodaysDate');
timeEl= document.getElementById('timeSet');
inputDayPlanEl = document.getElementById('text');
var nine = document.getElementById('9am');
var ten = document.getElementById('10am');
var eleven = document.getElementById('11am');
var twevle = document.getElementById('12pm');
var one = document.getElementById('1pmm');
var two = document.getElementById('2pm');
var three = document.getElementById('3pm');
var four = document.getElementById('4pm');
var five = document.getElementById('5pm');
var six = document.getElementById('6pm');




//savingItems();


//submitBtn.addEventListener('click', function(event){
    //event.preventDefault();

    //var timePlaned = 9
        
    
$(".btn").click(function (e) { 
    e.preventDefault();
    console.log(this)

    var dayActivity ={
        nineam : nine.value.trim(),
        tenam : ten.value.trim(),
        elevenam : eleven.value.trim(),
        //twevleam : twevle.value.trim(),
        //onepm : one.value.trim(),
        //nineam : nine.value.trim(),
        //nineam : nine.value.trim(),
        //nineam : nine.value.trim(),
        //nineam : nine.value.trim(),
    }
 planEvents();displayEvent();


    
    function planEvents(){
     localStorage.setItem("activity",  JSON.stringify(dayActivity));
}

    function displayEvent(){

        var dayPlans = JSON.parse(localStorage.getItem("activity"));

        console.log(dayPlans)
    }
   
    
    

    

    //document.getElementById("9am") = dayActivity
    console.log()

});



function displayTime() {
    
    
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateEl.textContent= (rightNow);


}





  


 


 setInterval(displayTime, 1000);

