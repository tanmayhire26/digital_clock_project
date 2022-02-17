

function clock(){

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am_pm=document.getElementById("ampm");
    

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    

    if(a<=11){
        am_pm.innerHTML='AM';
        

    }
    else if(a==12){
        am_pm.innerHTML='PM';
        hours.innerHTML=12;
    }
    else{
        am_pm.innerHTML='PM';
        hours.innerHTML=a-12;
    }

    
    
    
}

setInterval(clock,1000);
function set_alarm(){
    
    var current_hr=new Date().getHours();
    var wake=document.getElementById("wakeuptime").value;
    var lunch=document.getElementById("lunchtime").value;
    var nap=document.getElementById("naptime").value;
    var sleep=document.getElementById("nighttime").value;
    if(current_hr==wake){
        document.getElementsByClassName("right-image")[0].style.backgroundImage="url(wakeup.PNG)";
        document.getElementsByClassName("container3-text")[0].innerHTML="Good Morning!! Wake up!!";
        document.getElementsByClassName("right-message-text")[0].innerHTML="Grab some healthy breakfast!!!";
        
    }
    else if(current_hr==lunch){
        document.getElementsByClassName("right-image")[0].style.backgroundImage="url(lunch.PNG)";
        document.getElementsByClassName("container3-text")[0].innerHTML="Good Afternoon!! Take some sleep";
        document.getElementsByClassName("right-message-text")[0].innerHTML="Let's have some lunch!!!";
    }
    else if(current_hr==nap){
        document.getElementsByClassName("right-image")[0].style.backgroundImage="url(lunch_image.PNG)";
        document.getElementsByClassName("container3-text")[0].innerHTML="Good Evening!!";
        document.getElementsByClassName("right-message-text")[0].innerHTML="Stop Yawning, Get some tea.. It's just evening!!";
    }
    else{
        document.getElementsByClassName("right-image")[0].style.backgroundImage="url(sleep.PNG)";
        document.getElementsByClassName("container3-text")[0].innerHTML="Good Night!!";
        document.getElementsByClassName("right-message-text")[0].innerHTML="Close your eyes and go to sleep";
    }

}

function display_time(obj,d_time){
        
        var x=obj.options[obj.selectedIndex].text;
        document.getElementById(d_time).innerHTML=" " + x;

   }

  