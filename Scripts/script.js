var moves = 0;

function mark(number) {
    choice = document.getElementById(`choice-${number}`);
    if (choice.innerText.length == 0) {
        if (moves % 2 == 0) {
            choice.innerText = 'x';
        } else {
            choice.innerText = 'o';
        }
        moves++;
        if (checkWinner()) {
            win(choice.innerText);
            setTimeout(function() {
                reset();
            }, 2000)
        } else if (moves == 9) {
            draw();
            setTimeout(function() {
                reset();
            }, 2000)
        }
    }
}

function checkWinner() {
    var choices = [];

    for (i=1; i <= 9; i++) {
        choices[i] = document.getElementById(`choice-${i}`).innerText;
    }
    
    var winningCombinations = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];

    for (var combo of winningCombinations) {
        if (choices[combo[0]] !== '' &&
            choices[combo[0]] === choices[combo[1]] &&
            choices[combo[1]] === choices[combo[2]]) {
            return true;
        }
    }
    return false;
}

function win(choice) {
    document.getElementById('message').innerText = `${choice.toUpperCase()} wins`;
    document.body.style.backgroundColor = 'rgb(0, 255, 0)';

    setTimeout(function() {
        document.body.style.backgroundColor = '#ffd700';
        document.getElementById('message').innerText = '';
    }, 2000);
}

function draw() {
    document.getElementById('message').innerText = 'Draw';
    document.body.style.backgroundColor = 'gray';

    setTimeout(function() {
        document.body.style.backgroundColor = '#ffd700';
        document.getElementById('message').innerText = '';
    }, 2000);
}

function reset() {
    for (var i=1; i <= 9; i++) {
        document.getElementById(`choice-${i}`).innerText = '';
    }
    moves = 0;
}