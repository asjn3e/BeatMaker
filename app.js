class DrumKit{
    constructor(){
        this.sequencer=document.querySelector(".sequencer");
        this.difficultyBox=document.querySelectorAll(".difficultyBox__input");
        this.articles=document.querySelectorAll(".proRequierd");
        this.difficulty="lite";
        this.difficultySwitcher = (value)=>{
            this.difficulty=value;
            this.sequencer.classList.toggle("Pro")
            
        }

    }
}
const drumkit=new DrumKit();

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