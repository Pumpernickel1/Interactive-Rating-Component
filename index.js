let selectedRating = document.querySelector('#numButtonDiv');

console.log(numButtonDiv);

selectedRating.addEventListener('click', (e) => {
    let storedRating = '0';
    if (e.target.innerText == '1') {
        storedRating = '1';
    } else if (e.target.innerText == '2') {
        storedRating = '2';
    } else if (e.target.innerText == '3') {
        storedRating = '3';
    } else if (e.target.innerText == '4') {
        storedRating = '4';
    } else storedRating = '5';
    console.log(storedRating);
});

var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');

if (1 === 1) {
    page1 = page2
}