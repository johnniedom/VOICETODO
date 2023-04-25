export function speakTimer() {
  console.log(this);
  this.classList.toggle("fa-beat-fade");

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

  const speakRec = new SpeechRec();
  console.log(speakRec, "hello");

  speakRec.continuous = true;
  speakRec.lang = "en-US";
  
  speakRec.onresult = (e) =>{
    console.log(e);
  }
}
