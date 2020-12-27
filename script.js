var numberofButtons = document.querySelectorAll(".drum").length

//click to detect sounds
for(var i = 0;i < numberofButtons; i++){
 
    if(document.querySelectorAll(".drum")[i].innerHTML=== "w"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            
        });

        
    }else if(document.querySelectorAll(".drum")[i].innerHTML=== "a"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
        });
    }else if(document.querySelectorAll(".drum")[i].innerHTML=== "s"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
        });
    }else if(document.querySelectorAll(".drum")[i].innerHTML=== "d"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
        });
    }else if(document.querySelectorAll(".drum")[i].innerHTML=== "j"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
        });
    }else if(document.querySelectorAll(".drum")[i].innerHTML=== "k"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
        });
    }else if(document.querySelectorAll(".drum")[i].innerHTML=== "l"){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
        });
    }

}

// press to detect sounds
document.addEventListener("keypress",function(event){
    if(event.key === "w"){
        var audio = new Audio('sounds/crash.mp3')
        audio.play();
    }else if(event.key === "a"){
        var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
    }else if(event.key === "s"){
        var audio = new Audio('sounds/snare.mp3')
            audio.play();
    }else if(event.key === "d"){
        var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
    }else if(event.key === "j"){
        var audio = new Audio('sounds/tom-2.mp3')
        audio.play();
    }else if(event.key === "k"){
        var audio = new Audio('sounds/tom-3.mp3')
        audio.play();
    }else if(event.key === "l"){
        var audio = new Audio('sounds/tom-4.mp3')
        audio.play();
    }
})


