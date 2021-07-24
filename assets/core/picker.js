var namesList = []
// Set timer countdown time here in minutes : seconds format
var time = 0;
const winnerMusic = new Audio('/assets/sound/applause.wav');
const hororMusic = new Audio('/assets/sound/horor.wav');

// Default variables
let i = 0;
let intervalHandle = null;
let timeOver = null;
const startButton = document.getElementById('startButton');
membersRef.on('value', getDataMember, showDataErr)
function getDataMember(items) {
    
    items.forEach(function (child) {
        if(!child.val().has_win) {
            namesList.push({
                has_win: child.val().has_win,
                name: child.val().name,
                flag: child.val().flag,
                id: child.key
            })
        }
    })
}

function getDataMemberErr(err) {
    return []
}

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
    hororMusic.play();
    startButton.setAttribute("disabled", true);
    startButton.innerText = "......."

    intervalHandle = setInterval(function () {
        headerNames.textContent = namesList[i++ % namesList.length].name;
    }, Math.random() * 100);

    let a = 11
    timeOver = setInterval(() => {
        if(a <= 0) {
            
            startButton.innerText = "Yeiii, you win today"
            
            winnerMusic.play();
            hororMusic.pause();
            fireworks();
            continuous();
            getAyat();
            clearInterval(intervalHandle);
        }
        if(a > 0) {
            a--
        } else {
            clearInterval(timeOver)
        }
    }, 1000);

});