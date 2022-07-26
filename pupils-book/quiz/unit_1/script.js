let songs = [
    {
        title: "1",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/o/one/one_B/one_British_English_pronunciation.mp3",
        options: [
            {name: "1", src: "../../img/1.png", correct: true},
            {name: "3", src: "../../img/3.png", correct: false},
            {name: "5", src: "../../img/5.png", correct: false},
            {name: "7", src: "../../img/7.png", correct: false}
        ]
    },

    {
        title: "2",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/t/two/two_B/two_British_English_pronunciation.mp3",
        options: [
            {name: "4", src: "../../img/4.png", correct: false},
            {name: "2", src: "../../img/2.png", correct: true},
            {name: "8", src: "../../img/8.png", correct: false},
            {name: "10", src: "../../img/10.png", correct: false}
        ]
    },
    {
        title: "3",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/t/thr/three/three_British_English_pronunciation.mp3",
        options: [
            {name: "3", src: "../../img/3.png", correct: true},
            {name: "6", src: "../../img/6.png", correct: false},
            {name: "5", src: "../../img/5.png", correct: false},
            {name: "9", src: "../../img/9.png", correct: false}
        ]
    },

    {
        title: "4",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/f/fou/four_/four_British_English_pronunciation_78190.mp3",
        options: [
            {name: "8", src: "../../img/8.png", correct: false},
            {name: "4", src: "../../img/4.png", correct: true},
            {name: "1", src: "../../img/1.png", correct: false},
            {name: "5", src: "../../img/5.png", correct: false}
        ]
    },
    {
        title: "5",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/f/fiv/five_/five_British_English_pronunciation.mp3",
        options: [
            {name: "5", src: "../../img/5.png", correct: true},
            {name: "2", src: "../../img/2.png", correct: false},
            {name: "4", src: "../../img/4.png", correct: false},
            {name: "7", src: "../../img/7.png", correct: false}
        ]
    },

    {
        title: "6",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/six/six_B/six_British_English_pronunciation.mp3",
        options: [
            {name: "7", src: "../../img/7.png", correct: false},
            {name: "8", src: "../../img/8.png", correct: false},
            {name: "9", src: "../../img/9.png", correct: false},
            {name: "6", src: "../../img/6.png", correct: true}
        ]
    },
    {
        title: "7",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/s/sev/seven/seven_British_English_pronunciation.mp3",
        options: [
            {name: "6", src: "../../img/6.png", correct: false},
            {name: "7", src: "../../img/7.png", correct: true},
            {name: "2", src: "../../img/2.png", correct: false},
            {name: "10", src: "../../img/10.png", correct: false}
        ]
    },
    {
        title: "8",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/e/eig/eight/eight_British_English_pronunciation.mp3",
        options: [
            {name: "8", src: "../../img/8.png", correct: true},
            {name: "6", src: "../../img/6.png", correct: false},
            {name: "9", src: "../../img/9.png", correct: false},
            {name: "3", src: "../../img/3.png", correct: false}
        ]
    },
    {
        title: "9",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/n/nin/nine_/nine_British_English_pronunciation.mp3",
        options: [
            {name: "8", src: "../../img/8.png", correct: false},
            {name: "9", src: "../../img/9.png", correct: true},
            {name: "4", src: "../../img/4.png", correct: false},
            {name: "5", src: "../../img/5.png", correct: false}
        ]
    },
    {
        title: "10",
        src: "https://www.macmillandictionary.com/media/british/uk_pron/t/ten/ten_B/ten_British_English_pronunciation.mp3",
        options: [
            {name: "10", src: "../../img/10.png", correct: true},
            {name: "2", src: "../../img/2.png", correct: false},
            {name: "1", src: "../../img/1.png", correct: false},
            {name: "7", src: "../../img/7.png", correct: false}
        ]
    }
];
let playerContainer = document.querySelector(".playerContainer"),
    player = document.querySelector(".player"),
    grid = document.querySelector(".grid"),
    next = document.querySelector(".next"),
    finalPage = document.querySelector(".finish");
    rightCount = document.querySelector("#rightCount");

    let rightAnswers = 0;
    let wrongAnswers = 0;

let shuffledSongs = shuffle(songs);
    currentIndex = 0;

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

function start(){
        player.src = shuffledSongs[0].src;
        player.play();
    }

function showOptions(){
    shuffle(shuffledSongs[currentIndex].options).forEach((option) => {
        const image = new Image(100, 100);
        image.classList.add("img");
        image.src = option.src;
//        const button = document.createElement("button");
//        button.style.backgroundImage = "url(option.src)";
//        button.innerHTML = '<img width="100" height="100" src=' + option.src + '>' + option.name;
        if(option.correct){
            image.dataset.correct = true;

        }
        image.addEventListener("click", selectAnswer);

        grid.appendChild(image);
    });
}

function eraseData(){
    grid.innerHTML = "";
    next.classList.add("hide");
}
function disableButtons(buttons){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
function selectAnswer(e){
    let button = e.target;
    if(button.dataset.correct){
        rightAnswers ++;
        currentIndex ++;
        next.classList.remove("hide");
        disableButtons(grid.children);
        button.classList.add("correct");
    } else{
        wrongAnswers ++;
        currentIndex ++;
        next.classList.remove("hide");
        disableButtons(grid.children);
        button.classList.add("incorrect");
    }
}
function nextSong(){
    if(shuffledSongs.length > currentIndex){
        eraseData();
        player.src = shuffledSongs[currentIndex].src;
        showOptions();
    } else {
        finish();
    }
}

function finish(){
    rightCount.innerText = rightAnswers + " out of " + songs.length;
//    player.src = "../../audio/andantino.mp3";
    playerContainer.classList.add("hide");
    eraseData();
    finalPage.classList.remove("hide");
}
window.onload = start;
showOptions();
next.addEventListener("click", nextSong);
