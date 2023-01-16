function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const numberOne = getRandomNumber(1, 99);
// const numberTwo = getRandomNumber(1, 99);
// const numberThree = getRandomNumber(1, 99);
// const numberFour = getRandomNumber(1, 99);
// const numberFive = getRandomNumber(1, 99);

const numbers = [];

for(let i = 0; i < 5; i++){
    const randomNumber = getRandomNumber(1, 99);
    console.log(randomNumber);

    numbers.push(randomNumber);
}

console.log(numbers);

const numbersContainer = document.getElementById('numbers-container');
numbersContainer.innerHTML = numbers;

setTimeout(function(){
    numbersContainer.innerHTML = '';
}, 5000);

setTimeout(function(){
    const guessedNumbers = [];

    for(let i = 0; i < 5; i++){
        const userInput = prompt('Inserisci un numero:');
        console.log(userInput);

        if(userInput == numbers[i]){
            guessedNumbers.push(numbers[i]);
        }
    }

    numbersContainer.innerHTML = 'Hai indovinato' + guessedNumbers.length + ' numeri<br>';
    numbersContainer.innerHTML += guessedNumbers;
}, 5500);

