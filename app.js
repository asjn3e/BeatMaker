function CreateSoundObject(soundName) {
  return document.querySelector(`#${soundName}-select`).value;
}
class DrumKit {
  constructor() {
    this.sequencer = document.querySelector(".sequencer");
    this.difficultyBox = document.querySelectorAll(".difficultyBox__input");
    this.articles = document.querySelectorAll(".proRequierd");
    this.difficulty = "lite";
    this.Interval = null;
    this.bpm = 250;
    this.index = 1;
    this.pads = document.querySelectorAll(".pad");
    this.startandstopBTN = document.querySelector("#start-stop--btn");
    this.speedRange = document.querySelector("#speed-range");
    this.muteButtons=document.querySelectorAll(".mute--button");
    this.difficultySwitcher = (value) => {
      this.difficulty = value;
      this.sequencer.classList.toggle("Pro");
    };
    this.repeat = (x) => {
      x %= 9;
      if (x == 0) {
        x = 9;
      }

      //reseting previous index
      let previousIndex = x - 1;
      if (x - 1 == 0) {
        previousIndex = 9;
      }
      const previousPads = document.querySelectorAll(`.b${previousIndex}`);
      previousPads.forEach((element) => {
        element.style.transform = "scale(1)";
      });

      const kick = CreateSoundObject("kick");
      const snare = CreateSoundObject("snare");
      const hihat = CreateSoundObject("hihat");
      const openhat = CreateSoundObject("openhat");
      const crash = CreateSoundObject("crash");
      const tom = CreateSoundObject("tom");
      const perc = CreateSoundObject("perc");
      const ride = CreateSoundObject("ride");
      const shaker = CreateSoundObject("shaker");

      const currentPads = document.querySelectorAll(`.b${x}`);
      currentPads.forEach((element) => {
        element.style.transform = "scale(1.5)";
        const sound = new Audio();
        if (element.classList.contains("active")) {
          switch (element.classList[1]) {
            case "kick-pad":
              if(!this.muteButtons[0].classList.contains("active")){
                sound.src = kick;
              }
              break;
            case "snare-pad":
                if(!this.muteButtons[1].classList.contains("active")){
                    sound.src = snare;
                  } 
                  
              break;
            case "hihat-pad":
                if(!this.muteButtons[2].classList.contains("active")){
                    sound.src = hihat;
                  }
              break;
            case "openhat-pad":
                if(!this.muteButtons[3].classList.contains("active")){
                    sound.src = openhat;
                  }
              break;
            case "crash-pad":
                if(!this.muteButtons[4].classList.contains("active")){
                    sound.src = crash;
                  }
              break;
            case "tom-pad":
                if(!this.muteButtons[5].classList.contains("active")){
                    sound.src = tom;
                  }
              break;
            case "perc-pad":
                if(!this.muteButtons[6].classList.contains("active")){
                    sound.src = perc;
                  }
              break;
            case "ride-pad":
                if(!this.muteButtons[7].classList.contains("active")){
                    sound.src = ride;
                  }
              break;
            case "shaker-pad":
                if(!this.muteButtons[8].classList.contains("active")){
                    sound.src = shaker;
                  }
              break;
          }
          sound.play();
          sound.currentTime = 0;
        }
      });
    };
    this.play = () => {
      const beatPerMinute = (60 / this.bpm) * 1000;
      this.Interval = setInterval(() => {
        this.repeat(this.index);
        this.index++;
      }, beatPerMinute);
      this.startandstopBTN.innerText = "stop";
    };
    this.stop = () => {
      clearInterval(this.Interval);
      this.Interval = null;
      this.startandstopBTN.innerText = "paly";
    };
  }
}
const drumkit = new DrumKit();

//event listeners
drumkit.difficultyBox.forEach((element) => {
  element.addEventListener("input", (e) => {
    drumkit.difficultySwitcher(element.value);
  });
});

drumkit.pads.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

drumkit.startandstopBTN.addEventListener("click", (e) => {
  if (e.target.innerText == "stop") {
    drumkit.stop();
  } else {
    drumkit.play();
  }
});

drumkit.speedRange.addEventListener("input", (e) => {
  const speedRange = e.target.value;
  drumkit.bpm = speedRange;
  document.querySelector("#beatSpeed").innerText = speedRange;
  drumkit.stop();
});

drumkit.muteButtons.forEach((element)=>{
    element.addEventListener("click",()=>{
        element.classList.toggle("active")
    })
})