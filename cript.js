

let talkGif = document.getElementById("talkGif");

let askQuition = document.getElementById("askQuition");

let btnEl = document.getElementById("btn");



function speak(text){
    let my_speak=new SpeechSynthesisUtterance(text)

    my_speak.rate=1
    my_speak.pitch=1
    my_speak.volume=1
    my_speak.lang="hi-GB"
   
    window.speechSynthesis.speak(my_speak)
  
}


function wishMe(){

    let day = new Date()

    let hours = day.getHours()


    if(hours >=0 && hours <12){

        speak("good morniing sir");
    }
    else if(hours >12 && hours < 16){

        speak("good afternoon sir");
    }
    else{
        speak("good evennig sir");
    }
}

window.addEventListener('load',()=>{

    wishMe();
})

let speechRe = window.speechRecognition || window.webkitSpeechRecognition

let recognition =new speechRe()

recognition.onresult=(event)=>{

 let curruntIndex =event.resultIndex
 let transcript =event.results[curruntIndex][0].transcript

 askQuition.innerText = transcript;
   takeCommand(transcript.toLowerCase());
}

btnEl.addEventListener("click",()=>{

    recognition.start();
})


function takeCommand(massage){

    if(massage.includes("hello")){
        speak("hello sir how can i help you?");
    }
    else if(massage.includes("who are you")){

        speak("im shifra your persnonal vertual assitants created by akash sir");
    }
    else if(massage.includes("open youtube")){
speak("opening youtube");

window.open("https://www.youtube.com/","_blank")
        
    }
}