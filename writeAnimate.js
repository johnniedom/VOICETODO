export function animate(element, duration , interval ) {
  const text = element.innerText;
  let newText = "";
  let currentIndex = 0;
  // create a loop to iterate over each character in the text
  if (text.length > currentIndex ) {
  const intervalId = setInterval(() => {
    // update the element with the new text

    newText = text.slice(0 , currentIndex);
    currentIndex++;


    element.innerText = newText;

    // check if the animation is finished  
    if (newText === text) {
      clearInterval(intervalId);
    }
  }, interval);
}
  // set a timeout to stop the animation after the specified duration
}

/**
 * 
 if (currentIndex < text.length) {
      // add the next character to the new text


      newText = text.slice(0 , -currentIndex);
      currentIndex++;

      console.log(newText.length);
    }
 *   
 */


/**
 * 
 *
   else if(newText.length === 1 ) {
    setInterval(() =>{
          currentIndex = 0;
        console.log(text, currentIndex)
        
        newText += text.charAt(currentIndex);
       
      currentIndex++;
      console.log(newText, currentIndex);
    },500)
      
    }
 * 
 * ``
 * 
   // set a timeout to stop the animation after the specified duration
  setTimeout(() => {
    clearInterval(intervalId);
  }, duration);
} 
 */