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
    num = number.split('');
    num_len = num.length;
    result = 1;

    for (let index = 0; index < num_len; index++) {
        result = result * parseFloat(num[index]);
    }
    console.log(`Entered Values = ${num}`);
    console.log(`Product of all digits = ${result}`);

}