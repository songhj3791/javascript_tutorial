function lightbulbonoff(){
    var onoffcheck = document.getElementById('lightbulb').src;
    console.log(onoffcheck);
    if(onoffcheck=="https://www.w3schools.com/js/pic_bulboff.gif"){
        document.getElementById('lightbulb').src = "https://www.w3schools.com/js/pic_bulbon.gif";
        document.getElementById('onoff_btn').innerHTML = "turn off";
    }else{
        document.getElementById('lightbulb').src = "https://www.w3schools.com/js/pic_bulboff.gif";
        document.getElementById('onoff_btn').innerHTML = "turn on";

    }
}