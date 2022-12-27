let selectedRating = document.querySelector('#numButtonDiv');

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');

let storedRating = '0';

selectedRating.addEventListener('click', (e) => {
    if (e.target.innerText == '1') {
        storedRating = '1';
    } else if (e.target.innerText == '2') {
        storedRating = '2';
    } else if (e.target.innerText == '3') {
        storedRating = '3';
    } else if (e.target.innerText == '4') {
        storedRating = '4';
    } else if (e.target.innerText == '5') {
        storedRating = '5';
    };
    console.log(storedRating);
    
    if (storedRating == '1') {
        one.style.backgroundColor = 'hsl(217, 12%, 63%)'
        one.style.color = 'hsl(0, 0%, 100%)'
    };
    
    if (storedRating == '2') {
        two.style.backgroundColor = 'hsl(217, 12%, 63%)'
        two.style.color = 'hsl(0, 0%, 100%)'
    };

    if (storedRating == '3') {
        three.style.backgroundColor = 'hsl(217, 12%, 63%)'
        three.style.color = 'hsl(0, 0%, 100%)'
    };

    if (storedRating == '4') {
        four.style.backgroundColor = 'hsl(217, 12%, 63%)'
        four.style.color = 'hsl(0, 0%, 100%)'
    };

    if (storedRating == '5') {
        five.style.backgroundColor = 'hsl(217, 12%, 63%)'
        five.style.color = 'hsl(0, 0%, 100%)'
    };
    
    if (storedRating != '1') {
        one.style.backgroundColor = 'hsl(216, 12%, 24%)'
        one.style.color = 'hsl(217, 12%, 63%)'
    };
    
    if (storedRating != '2') {
        two.style.backgroundColor = 'hsl(216, 12%, 24%)'
        two.style.color = 'hsl(217, 12%, 63%)'
    };

    if (storedRating != '3') {
        three.style.backgroundColor = 'hsl(216, 12%, 24%)'
        three.style.color = 'hsl(217, 12%, 63%)'
    };

    if (storedRating != '4') {
        four.style.backgroundColor = 'hsl(216, 12%, 24%)'
        four.style.color = 'hsl(217, 12%, 63%)'
    };

    if (storedRating != '5') {
        five.style.backgroundColor = 'hsl(216, 12%, 24%)'
        five.style.color = 'hsl(217, 12%, 63%)'
    };
});

let submitButton = document.querySelector('#submitButton');

let page1 = document.querySelector('#page1');
let page2 = document.querySelector('#page2').style.display = 'none';

submitButton.addEventListener('click', (e) => {
    function whatYouSelected () {
        if (+storedRating > 0 && +storedRating < 6) {
            document.querySelector('#youSelectedText').innerText = `You selected ${storedRating} out of 5`;
            function moveTo2 () {
                page1.style.display = 'none';
                // page2.style.display = 'flex';
                document.querySelector('#page2').style.display = 'flex';
            };
        } else {
            console.log('User did not select a rating.');
            return;
        };
    moveTo2();
    };
whatYouSelected();
});