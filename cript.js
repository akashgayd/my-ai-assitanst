

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

    btnEl.style.display = "none";

    talkGif.style.display = "block";
    recognition.start();

})


function takeCommand(massage){

    btnEl.style.display = "flex";
     talkGif.style.display = "none";
     askQuition.textContent = "ask me anything";


    if(massage.includes("hello")){
        speak("hello sir how can i help you?");
    }
    else if(massage.includes("how are you")){

        speak("im fine what abaut you?")
    }

    else if(massage.includes("who are you")){

        speak("im shifra your personal virtual A i assistant created by akash sir");
    }
    else if(massage.includes("youtube")){
speak("opening youtube");
window.open("https://www.youtube.com/","_blank")
        
    }
    else if(massage.includes("facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com/","_blank")
}

else if(massage.includes("whatsapp")){
    speak("opening whatsapp");
    window.open("whatsapp://")
}

else if(massage.includes("instagram")){
    speak("opening instagram");
    window.open("instagram://")
}

else if(massage.includes("shapchat")){
    speak("opening snapchat");
    window.open("snapchat://")
}

else if(massage.includes("telegram")){
    speak("opening telegram");
    window.open("telegram://")
}

else if(massage.includes("youtube")){
    speak("opening youtube");
    window.open("youtube://")
}
else{
    let finldSet =" this is i found the internet regarding"+ massage.replace("shipra","") || massage.replace("shifra","")||
    massage.replace("shipera","")|| massage.replace("shifrra","");

    speak(finldSet)
    window.open(`https://www.google.com/search?q=${massage.replace("shipra","")}${massage.replace("sifra","")}`,"_blank")
}


}