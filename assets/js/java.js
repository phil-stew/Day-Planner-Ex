dateEl= document.getElementById('TodaysDate');
timeEl= document.getElementById('timeSet');
inputDayPlanEl = document.getElementById('text');



      
    
$(".saveBtn").on("click",function () { 
   
    var input = $(this).siblings(".description").val()
    var time = $(this).parent().attr('id')

    localStorage.setItem(time,input)
 
});



function displayEvent(){
  
    var currentTime = moment().hours()
    $('.time-block').each(function(){
        var compareTime = parseInt($(this).attr('id').split('-')[1])
        
        if(compareTime<currentTime){
            $(this).addClass('past')
        }else if(compareTime>currentTime){
            $(this).removeClass('past')
            $(this).addClass('future')
        }else{
            $(this).removeClass('past')
            $(this).removeClass('future')
            $(this).addClass('present')
        }
    }) 
    
}

displayEvent(); 
var check = setInterval(displayEvent,10000)


$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))
$('#hour-18 .description').val(localStorage.getItem('hour-18'))


function displayTime() {
    
    
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateEl.textContent= (rightNow);


}





  


 


 setInterval(displayTime, 1000);

