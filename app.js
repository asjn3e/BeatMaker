class DrumKit{
    constructor(){
        this.sequencer=document.querySelector(".sequencer");
        this.difficultyBox=document.querySelectorAll(".difficultyBox__input");
        this.articles=document.querySelectorAll(".proRequierd");
        this.difficulty="lite";
        this.Interval=null;
        this.bpm=80;
        this.index=1;
        this.difficultySwitcher = (value)=>{
            this.difficulty=value;
            this.sequencer.classList.toggle("Pro")
            
        }
        this.repeat=(x)=>{
            x %= 10;
            console.log(x);
            document.querySelectorAll(`.b${x}`)
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

// drumkit.articles.forEach(element =>{
//     element.addEventListener("transitionend",()=>{
//         element.classList.toggle("disChanger")
//     })
// })

// drumkit.difficultySwitcher();