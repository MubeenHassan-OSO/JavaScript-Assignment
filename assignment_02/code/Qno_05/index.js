// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input:not(input[type=submit])");
    const refresh_values = () => {
        for (const input of inputs) {
            window[input.name] = input.value;
        }
    };

    document.getElementById("submit").onclick = () => {
        refresh_values();
        main();
    };
});

function main() {
    const array = number.split('');
    let arrlen = array.length / 2;
    arrlen = Math.ceil(arrlen);
    let result = 0;
    for (let index = 0; index < arrlen; index++) {
        result = result + parseFloat(array[index]);
    }
    console.log(`Entered Values = ${array}`);
    console.log(`Sum of half digits = ${result}`);
}