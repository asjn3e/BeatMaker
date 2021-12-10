function CreateSoundObject(soundName){
    this.soundSelect=document.querySelector(`#${soundName}-select`);
    this.currentSound=document.querySelector(`#${soundName}-select`).value;
}
class DrumKit{
    constructor(){
        this.sequencer=document.querySelector(".sequencer");
        this.difficultyBox=document.querySelectorAll(".difficultyBox__input");
        this.articles=document.querySelectorAll(".proRequierd");
        this.difficulty="lite";
        this.Interval=null;
        this.bpm=300;
        this.index=1;
        // sound objects
        this.kick=new CreateSoundObject("kick");
        this.snare=new CreateSoundObject("snare");
        this.hihat=new CreateSoundObject("hihat");
        this.openhat=new CreateSoundObject("openhat");
        this.crash=new CreateSoundObject("crash");
        this.tom=new CreateSoundObject("tom");
        this.perc=new CreateSoundObject("perc");
        this.ride=new CreateSoundObject("ride");
        this.shaker=new CreateSoundObject("shaker");
        this.pads=document.querySelectorAll(".pad");

        this.difficultySwitcher = (value)=>{
            this.difficulty=value;
            this.sequencer.classList.toggle("Pro")
            
        }
        this.repeat=(x)=>{
            x %= 10;
            if (x == 0){
                x=10
            }
            console.log(x);
            //reseting previous index
            let previousIndex=x-1;
            if(x-1==0){
                previousIndex=10;
            }
            const previousPads=document.querySelectorAll(`.b${previousIndex}`)
            previousPads.forEach(element =>{
                element.style.transform="scale(1)"
            })

            const currentPads=document.querySelectorAll(`.b${x}`);
            currentPads.forEach(element =>{
                element.style.transform="scale(1.5)"
                const sound=new Audio();
                if(element.classList.contains("active")){
                    switch (element.classList[1]) {
                        case "kick-pad":
                            sound.src=this.kick.currentSound;
                            break;
                        case "snare-pad":
                            sound.src=this.snare.currentSound;
                            break;
                        case "hihat-pad":
                            sound.src=this.hihat.currentSound;
                            break;
                        case "openhat-pad":
                            sound.src=this.openhat.currentSound;
                            break;
                        case "crash-pad":
                            sound.src=this.crash.currentSound;
                            break;
                        case "tom-pad":
                            sound.src=this.tom.currentSound;
                            break;
                        case "perc-pad":
                            sound.src=this.perc.currentSound;
                            break;
                        case "ride-pad":
                            sound.src=this.ride.currentSound;
                            break;
                        case "shaker-pad":
                            sound.src=this.shaker.currentSound;
                            break;
                    }
                    sound.play();
                    sound.currentTime=0;
                }
            })
        }
        this.play=()=>{
            const beatPerMinute=60 / this.bpm * 1000;
            this.Interval=setInterval(() => {
                this.repeat(this.index);
                this.index++;
            }, beatPerMinute);
        }
    }
}
const drumkit=new DrumKit();

drumkit.play();
//event listeners
drumkit.difficultyBox.forEach((element)=>{
    element.addEventListener("input",(e)=>{
        drumkit.difficultySwitcher(element.value);
    })
})

drumkit.pads.forEach(element=>{
    element.addEventListener("click",()=>{
        element.classList.toggle("active");
    })
})

// drumkit.articles.forEach(element =>{
//     element.addEventListener("transitionend",()=>{
//         element.classList.toggle("disChanger")
//     })
// })

// drumkit.difficultySwitcher();