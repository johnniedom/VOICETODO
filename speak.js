export function speakTimer(addWord, stopSpeak) {
  // console.log(this);
  this.classList.toggle("fa-beat-fade");
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

  const speakRec = new SpeechRec();

  speakRec.continuous = true;
  speakRec.lang = "en-US";
  let word = "";

  speakRec.onresult = (e) => {
    const curIndex = e.results.length;
    for (let i = e.resultIndex; i < curIndex; i++) {
      let script = e.results[i][0].transcript;
      console.log( script.slice(-1))

      // if (script)
      word += e.results[i][0].transcript;
    }

    addWord.value = `${word}`;
    console.log(word);
  };

  speakRec.start();

  stopSpeak.addEventListener("click", () => {
    speakRec.stop();
    this.classList.remove("fa-beat-fade");
  });
}
