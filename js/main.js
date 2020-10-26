const options = ["Myślę że powinieneś to olać.",
    "Myślę, że masz bardzo poważny problem.",
    "Nie wiem, jestem tylko komputerem",
    "Komputery nie myślą!",
    "Komputer, to nie przyjaciel!",
    "Nie wiem!"
];
//dodawania
const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    options.push(input.value);

    alert(`Została dodana opcja : 
    "${input.value}"`);
    input.value = "";
};
document.querySelector('.add').addEventListener('click', addOption);
//dodawania

//pokaż opcje
const showOptions = () => {
    document.querySelector('h1').textContent = "Moje możliwości wyświetlają się w konsoli, kliknij F12 i zobacz konsolę.";
    console.log(options);
};
document.querySelector('.showOptions').addEventListener('click', showOptions);
//pokaż opcje

//pokaż radę
const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length)
    console.log(index);
    document.querySelector('h1').textContent = options[index];
};

document.querySelector('.showAdvice').addEventListener('click', showAdvice);
//pokaż radę

//wyczyść
const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = "Musisz dodać jakieś nowe opcje, ponieważ mój zakres odpowiedzi jest niewystarczający";
};
document.querySelector('.clean').addEventListener('click', resetOptions);
//wyczyść