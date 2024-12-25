const Questions = [
    {
        question:"What country has the largest city in the world?",
        answers:["a" ,"b","c","d"],
        correct:0,

    },

    {
        question:"What is the larest country in the world?",
        answers:["Russia","USA","England","Iceland"],
        correct:0,
    },
    {
        question:"Who is the current president of America?",
        answers:["Donald Trumph","Joe Walter","Alison Morgan","Hunter Nolthaox"],
        correct:0,
    },
    {
        question:"What is the last chapter in the bible?",
        answers:["John","Joshua","Revelations","Mathew"],
        correct:2,

    },
    {
        question:"What is the capital of USA?",
        answers:["Lagos","Manchester","New-York","New-Jersey"],
        correct:2
    },
    {
        question:"Who is the richest man in the world now?",
        answers:["Elon Musk","Mark Zucker","James Brown","Adams"],
        correct:0,

    },
    {
        question:"Who is the father of history?",
        answers:["Herodutus","Thomas Edison","Magareth James","John Musk"],
        correct:0,
    },
    {
        question:"who is second richest man in the world now?",
        answers:["Thesla","Bill gate","James brown" ,"Elon Musk"],
        correct:3,
    },

    {
        question:"Another name of memoramdum",
        answers:["Memo","Chasbarbage","Memoril","Carptenjark"],
        correct:0,

    },
    {
        question:"Who is the general overseer of RRCG",
        answers:["Papa Oyedepo","Mathew Ashimolowo","Pastor Chris","Oreme"],
        correct:0,
    }

    

]

const Displaysection = document.querySelector("#qustiondisplay");
const Score = document.querySelector("#Score");
const button = document.querySelectorAll("button");
const main = document.querySelector("main");
let objectposition = 0;
let points = 0;

const display = () =>{
    Displaysection.textContent = Questions[objectposition].question
    Questions[objectposition].answers.forEach((value ,index)=>{
        button[index].textContent = value;



    })
    button.forEach((but)=>{
        but.style.backgroundColor = "";
    })


}
const add = (calm, more) =>{
    if(calm === Questions[objectposition].correct){
        more.style.backgroundColor = "green";
        points++;


    }else{
        more.style.backgroundColor = "red";
    }
    Score.textContent = points;
    Score.classList.add("change");
    setTimeout(()=>{
        objectposition++
        if(objectposition < Questions.length){
            display();
        }else{
            main.textContent = `Gameover your score is ${points} out of ${Questions.length} would you like to retry`;
            main.classList.add("game");
            
        }

    },2000);

}

const handleplay = () =>{
    if(Displaysection.textContent = Questions[objectposition].question){
        add();
        
        
    }else{


    }

}
// const music = (play, pulse) =>{
//     setTimeout(()=>{
//         if(play === Questions[objectposition].correct){
            
            
//         }else{
//             pulse === Questions[objectposition].correct;
//         }
//     },1000)
// }



