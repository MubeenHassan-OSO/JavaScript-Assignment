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
    arr_num = number.split('');
    arr_len = arr_num.length / 2;

    if (arr_len % 1 != 0) {
        arr_len = Math.floor(arr_len);
        console.log(`The Central Number is ${arr_num[arr_len]}.`);

        if ((arr_num[arr_len] % 2) == 0) {
            console.log(`The Central Number ${arr_num[arr_len]} is an even number.`);
        } else {
            console.log(`The Central Number ${arr_num[arr_len]} is an odd number.`);
        }
    } else {
        const central_num = parseFloat(arr_num[arr_len - 1]) + parseFloat(arr_num[arr_len]);
        console.log(`Sum of Central elements ${arr_num[arr_len - 1]} + ${arr_num[arr_len]} =  ${central_num} .`);

        if ((central_num % 2) == 0) {
            console.log(`The Sum ${central_num} is an even number.`);
        } else {
            console.log(`The Sum ${central_num} is an odd number.`);
        }
    }
}